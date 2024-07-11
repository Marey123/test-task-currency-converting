import React, { useEffect, useRef } from "react";
import Layout from "../../components/Layout";
import CurrencySelector from "../../components/CurrencyConverter";
import { useCurrencyConverter } from "../../hooks/useCurrencyActions";
import { useGetConversionedValue } from "../../hooks/useGetConversionedValue";
import { useGetSymbols } from "../../hooks/useGetSymbols";

const Main = () => {
  const {
    baseCurrency,
    searchParams,
    setBaseCurrency,
    setQuoteCurrency,
    setAmount,
    quoteCurrency,
    amount,
    handleSwapCurrencies,
    handleBaseCurrencyChange,
    handleQuoteCurrencyChange,
    handleChangeAmount,
  } = useCurrencyConverter();

  const { data: symbolData, isLoading, isPending } = useGetSymbols();
  const { data: conversionData } = useGetConversionedValue({
    amount,
    from: baseCurrency,
    to: quoteCurrency,
  });

  const prevConversionDataRef = useRef<any>(null);

  useEffect(() => {
    if (symbolData) {
      const currencies = Object.keys(symbolData);
      setBaseCurrency(searchParams.get("baseCurrency") || currencies[0]);
      setQuoteCurrency(searchParams.get("quoteCurrency") || currencies[1]);
      setAmount(Number(searchParams.get("amount")) || 1);
    }
  }, [symbolData, searchParams]);

  useEffect(() => {
    prevConversionDataRef.current = conversionData;
  }, [conversionData]);

  if (isLoading || isPending) {
    return (
      <Layout>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </Layout>
    );
  }

  const resultAmount = conversionData?.rates
    ? Object.values(conversionData.rates)[0]
    : prevConversionDataRef.current?.rates;

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
                className="px-4 py-2 bg-gradient-info font-semibold text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                SWAP
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
