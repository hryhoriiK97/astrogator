import { ApodResponse } from "../../types/ApodResponse";

export interface ApodScreenContentProps {
  id: string;
  item: ApodResponse;
  isApodRefreshing?: boolean;
  onRefresh?: () => void;
}
