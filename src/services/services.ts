import axios from "axios";

export interface ConversionedValue {
  amount: number;
  from: string;
  to: string;
}

export interface CurrencyAmounts {
  [currencyCode: string]: string;
}

export const getAllSymbolsEndpoint = async (): Promise<CurrencyAmounts> => {
  const response = await axios.get("https://api.frankfurter.app/currencies");
  return response.data;
};

export const getConversionedValueEndpoint = async (
  data: ConversionedValue
): Promise<any> => {
  const response = await axios.get("https://api.frankfurter.app/latest", {
    params: {
      amount: data.amount,
      from: data.from,
      to: data.to,
    },
  });
  return response.data;
};
