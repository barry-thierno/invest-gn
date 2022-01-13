import React from "react";
import { ResponseStatus } from "utils/http";

export type RequestState<T> =
  | { status: ResponseStatus.Idle }
  | { status: ResponseStatus.Pending }
  | { status: ResponseStatus.Error; error: Error }
  | { status: ResponseStatus.Succes; data: T };

export type RequestAction<T> =
  | { type: ResponseStatus.Idle }
  | { type: ResponseStatus.Pending }
  | { type: ResponseStatus.Error; error: Error }
  | { type: ResponseStatus.Succes; data: T };

function useSafeDispatch(dispatch: React.Dispatch<RequestAction<unknown>>) {
  const mountedRef = React.useRef(false);

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return React.useCallback(
    (args) => (mountedRef.current ? dispatch(args) : void 0),
    [dispatch]
  );
}

export type AsyncState<T> = {
  status: ResponseStatus;
  data: T;
  error: Error;
};

function asyncReducer<T>(
  _: RequestState<T>,
  apiResp: RequestAction<T>
): RequestState<T> {
  const { type } = apiResp;
  switch (type) {
    case ResponseStatus.Pending: {
      return { status: ResponseStatus.Pending };
    }
    case ResponseStatus.Succes: {
      const { data } = apiResp;
      return { status: ResponseStatus.Succes, data };
    }
    case ResponseStatus.Error: {
      const { error } = apiResp;
      return { status: ResponseStatus.Error, error };
    }
    default: {
      throw new Error(`Unhandled action type: ${apiResp.type}`);
    }
  }
}

function useAsync<T>(initialState = { type: ResponseStatus.Idle }) {
  const [state, unsafeDispatch] = React.useReducer(asyncReducer, {
    status: ResponseStatus.Pending,
    ...initialState,
  });
  const dispatch = useSafeDispatch(unsafeDispatch);
  const { data, error, status } = state as AsyncState<T>;

  const run = React.useCallback(
    (promise: Promise<T>) => {
      dispatch({ type: ResponseStatus.Pending });
      promise.then(
        (resp: T) => dispatch({ type: ResponseStatus.Succes, data: resp }),
        (error: Error) => {
          dispatch({ type: ResponseStatus.Error, error });
        }
      );
    },
    [dispatch]
  );

  const setData = React.useCallback(
    (data: T) => dispatch({ type: ResponseStatus.Succes, data }),
    [dispatch]
  );
  const setError = React.useCallback(
    (error: Error) => dispatch({ type: ResponseStatus.Error, error }),
    [dispatch]
  );

  return {
    setData,
    setError,
    error,
    status,
    data,
    run,
  };
}

export default useAsync;
