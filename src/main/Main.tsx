import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import CurrencySelector from "../components/CurrencyConverter";
import Layout from "../components/Layout";
import { useGetSymbols } from "../hooks/useGetSymbols";
import { useGetConversionedValue } from "../hooks/useGetConversionedValue";

type UpdatedQueryParams = { amount?: number; base?: string; quote?: string }

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: symbolData, isLoading, isError, isPending } = useGetSymbols();
  const [amount, setAmount] = useState<number>(0);
  const [baseCurrency, setBaseCurrency] = useState<string>("");
  const [quoteCurrency, setQuoteCurrency] = useState<string>("");

  useEffect(() => {
    if (symbolData) {
      const currencies = Object.keys(symbolData);
      setBaseCurrency(searchParams.get("baseCurrency") || currencies[0]);
      setQuoteCurrency(searchParams.get("quoteCurrency") || currencies[1]);
      setAmount(Number(searchParams.get("amount")) || 0);
    }
  }, [symbolData, searchParams]);

  const { data: conversionData } = useGetConversionedValue({
    amount,
    from: baseCurrency,
    to: quoteCurrency,
  });

  const handleSwapCurrencies = () => {
    const temp = baseCurrency;
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(temp);
    updateQueryParams({ base: quoteCurrency, quote: baseCurrency });
  };

  const handleBaseCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newBaseCurrency = e.target.value;
    setBaseCurrency(newBaseCurrency);
    updateQueryParams({ base: newBaseCurrency });
  };

  const handleQuoteCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuoteCurrency = e.target.value;
    setQuoteCurrency(newQuoteCurrency);
    updateQueryParams({ quote: newQuoteCurrency });
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = Number(e.target.value);
    setAmount(newAmount);
    updateQueryParams({ amount: newAmount });
  };

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

  if (isLoading || isPending) {
    return <Layout>Loading...</Layout>;
  }

  if (isError) {
    return <Layout>Error fetching data. Please try again.</Layout>;
  }

  const resultAmount = conversionData?.rates ? Object.values(conversionData.rates)[0] as number : 0;

  return (
    <Layout>
      {symbolData && (
        <div className="flex items-center rounded-lg justify-center bg-gray-100">
          <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Currency Converter
            </h2>

            <CurrencySelector
              value={baseCurrency}
              amount={amount}
              isDisabled={false}
              changeAmount={handleChangeAmount}
              currencies={Object.keys(symbolData)}
              onChange={handleBaseCurrencyChange}
            />

            <div className="m-6 flex justify-center">
              <button
                onClick={handleSwapCurrencies}
                className="px-4 py-2 bg-gradient-info text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Swap Currencies
              </button>
            </div>

            <CurrencySelector
              value={quoteCurrency}
              amount={resultAmount}
              isDisabled={true}
              currencies={Object.keys(symbolData)}
              onChange={handleQuoteCurrencyChange}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Main;
