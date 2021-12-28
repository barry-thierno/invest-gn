export enum ResponseStatus {
  Idle = "idle",
  Pending = "pending",
  Error = "error",
  Succes = "success",
}

// export type ApiResponse<T> =
//   | { type: ResponseStatus.Idle }
//   | { type: ResponseStatus.Pending }
//   | { type: ResponseStatus.Error; error: Error }
//   | { type: ResponseStatus.Succes; data: T };
