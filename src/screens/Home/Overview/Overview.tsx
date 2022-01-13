import OverwiewContainer from "layouts/OverviewContainer";
import { useEffect } from "react";
import client from "utils/fetch/client";
import useAsync from "utils/hooks/useAsync";
import { ResponseStatus } from "utils/http";
import { IOverviewData } from "../Products/Product.model";
import LastUpdated from "./LastUpdated/LastUpdated";
import MoreViewed from "./MoreViewed/MoreViewed";

const Overview = () => {
  const { data, status, error, run } = useAsync<IOverviewData>({
    type: ResponseStatus.Idle,
  });

  useEffect(() => {
    run(client<IOverviewData>(`/overview`));
  }, []);

  switch (status) {
    case ResponseStatus.Pending:
      return <div>Chargement en cours ...</div>;
    case ResponseStatus.Error:
      throw error;
    case ResponseStatus.Succes:
      const { moreViewed, lastUpdated } = data;
      return (
        <OverwiewContainer>
          <MoreViewed products={moreViewed} />
          <LastUpdated products={lastUpdated} />
        </OverwiewContainer>
      );
    default:
      throw new Error("This should be impossible");
  }
};

export default Overview;
