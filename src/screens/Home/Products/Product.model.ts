export interface IProduct {
  id: string;
  label: string;
  price: number;
  currency: string;
  unity: string;
}

export interface IOverviewData {
  moreViewed: IProduct[];
  lastUpdated: IProduct[];
}
