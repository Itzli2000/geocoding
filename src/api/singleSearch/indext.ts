import { GeocodingParams, GeocodingResult } from "../../types";
import { apiClient } from "../axiosClient";

const getOnelineaddress = async (params: GeocodingParams) => {
  const { searchtype, ...rest } = params;
  return await apiClient.get<GeocodingResult>(`${searchtype}?${new URLSearchParams(rest as unknown as Record<string, string>)}`);
};

const singleSearchService = {
  getOnelineaddress,
};

export default singleSearchService;
