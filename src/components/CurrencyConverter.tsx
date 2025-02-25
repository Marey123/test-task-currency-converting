import { ChangeEvent } from "react";

interface CurrencyConverterProps {
  value: string;
  amount: number;
  currencies: string[];
  isDisabled: boolean;
  changeAmount?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  value,
  currencies,
  amount,
  isDisabled,
  onChange,
  changeAmount,
}) => {
  return (
    <div className="mb-4 flex">
      <input
        disabled={isDisabled}
        type="number"
        min={1}
        className="mt-1 mr-6 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl"
        value={amount}
        onChange={changeAmount}
      ></input>
      <select
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyConverter;
