import { ConversionRate } from "../services/services";

interface RatesTableProps {
  rates: ConversionRate;
}

const RatesTable: React.FC<RatesTableProps> = ({ rates }) => {
  return (
    <div className="mt-6 max-h-[500px] overflow-y-scroll">
      <div className="bg-white rounded-md shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Currency
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.entries(rates).map(([currency, value]) => (
              <tr key={currency}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {currency}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RatesTable;
