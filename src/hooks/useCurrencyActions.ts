import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

type UpdatedQueryParams = {
  amount?: number;
  base?: string;
  quote?: string;
};

interface CurrencyConverterResult {
  searchParams: URLSearchParams;
  baseCurrency: string;
  quoteCurrency: string;
  amount: number;
  setBaseCurrency: React.Dispatch<React.SetStateAction<string>>;
  setQuoteCurrency: React.Dispatch<React.SetStateAction<string>>;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  handleSwapCurrencies: () => void;
  handleBaseCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleQuoteCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useCurrencyConverter = (): CurrencyConverterResult => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [amount, setAmount] = useState<number>(1);
  const [baseCurrency, setBaseCurrency] = useState<string>("");
  const [quoteCurrency, setQuoteCurrency] = useState<string>("");

  const updateQueryParams = ({ amount, base, quote }: UpdatedQueryParams) => {
    const newParams = new URLSearchParams(location.search);

    if (amount) {
      newParams.set("amount", amount.toString());
    }
    if (base) {
      newParams.set("baseCurrency", base);
    }
    if (quote) {
      newParams.set("quoteCurrency", quote);
    }

    setSearchParams(newParams);
    navigate(location.pathname + "?" + newParams.toString());
  };

  const handleSwapCurrencies = () => {
    const temp = baseCurrency;
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(temp);
    updateQueryParams({ base: quoteCurrency, quote: baseCurrency });
  };

  const handleBaseCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newBaseCurrency = e.target.value;
    setBaseCurrency(newBaseCurrency);
    updateQueryParams({ base: newBaseCurrency });
  };

  const handleQuoteCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newQuoteCurrency = e.target.value;
    setQuoteCurrency(newQuoteCurrency);
    updateQueryParams({ quote: newQuoteCurrency });
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value === "" ? amount : Number(e.target.value);
    setAmount(newAmount);
    updateQueryParams({ amount: newAmount });
  };

  return {
    searchParams,
    baseCurrency,
    quoteCurrency,
    amount,
    setBaseCurrency,
    setQuoteCurrency,
    setAmount,
    handleSwapCurrencies,
    handleBaseCurrencyChange,
    handleQuoteCurrencyChange,
    handleChangeAmount,
  };
};
