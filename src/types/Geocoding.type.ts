export interface GeocodingParams {
  returntype: "locations" | "geographies";
  searchtype: "onelineaddress" | "address" | "coordinates";
  benchmark: string;
  vintage?: string;
  address?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  x?: number;
  y?: number;
  format?: "json" | "html";
  layers?: string;
}

export interface GeocodingResult {
  result: {
    input: {
      address: {
        address: string;
      };
      benchmark: {
        isDefault: boolean;
        benchmarkDescription: string;
        id: string;
        benchmarkName: string;
      };
    };
    addressMatches: AddressMatch[];
  };
}

export interface AddressMatch {
  tigerLine: {
    side: string;
    tigerLineId: string;
  };
  coordinates: {
    x: number;
    y: number;
  };
  addressComponents: {
    zip: string;
    streetName: string;
    preType: string;
    city: string;
    preDirection: string;
    suffixDirection: string;
    fromAddress: string;
    state: string;
    suffixType: string;
    toAddress: string;
    suffixQualifier: string;
    preQualifier: string;
  };
  matchedAddress: string;
}
