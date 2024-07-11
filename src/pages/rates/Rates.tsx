import { useEffect, useRef } from "react";
import Layout from "../../components/Layout";
import { useGetSymbols } from "../../hooks/useGetSymbols";
import CurrencySelector from "../../components/CurrencyConverter";
import { useCurrencyConverter } from "../../hooks/useCurrencyActions";
import { useGetConversionedValue } from "../../hooks/useGetConversionedValue";
import RatesTable from "../../components/RatesTable";

const Rates = () => {
  const { data: symbolData, isLoading, isPending } = useGetSymbols();
  const {
    baseCurrency,
    amount,
    searchParams,
    setBaseCurrency,
    setAmount,
    handleBaseCurrencyChange,
    handleChangeAmount,
  } = useCurrencyConverter();

  const { data: conversionData } = useGetConversionedValue({
    amount,
    from: baseCurrency,
  });

  const prevConversionDataRef = useRef<any>(null);

  const ratesData = conversionData
  ? conversionData.rates
  : prevConversionDataRef.current?.rates;

  useEffect(() => {
    if (symbolData) {
      const currencies = Object.keys(symbolData);
      setBaseCurrency(searchParams.get("baseCurrency") || currencies[0]);
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

  return (
    <Layout>
      <div className="flex items-center rounded-lg justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Currency Converter
          </h2>
          {symbolData && (
            <CurrencySelector
              value={baseCurrency}
              amount={amount}
              isDisabled={false}
              changeAmount={handleChangeAmount}
              currencies={Object.keys(symbolData)}
              onChange={handleBaseCurrencyChange}
            />
          )}
          {ratesData && <RatesTable rates={ratesData} />}
        </div>
      </div>
    </Layout>
  );
};

export default Rates;
