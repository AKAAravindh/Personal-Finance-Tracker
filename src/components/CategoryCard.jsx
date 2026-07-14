import { BiRupee } from "react-icons/bi";
import { useFinance } from "../context/FinanceContext";

function CategoryCard() {
  const { transactions } = useFinance();

  const expenseBasedOnCategory = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => {
      const key = item.category || "Uncategorized";
      acc[key] = (acc[key] || 0) + item.amount;
      return acc;
    }, {});

  const expenseArray = Object.entries(expenseBasedOnCategory).map(
    ([category, total]) => ({
      category,
      total,
    }),
  );

  const grandTotalExpense = expenseArray.reduce(
    (sum, item) => sum + item.total,
    0,
  );

  return (
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow">
      <h2 className="font-bold text-xl">Expenses</h2>

      {expenseArray.length > 0 ? (
        <div className="mt-5 space-y-4">
          {expenseArray.map((item) => {
            const percentage =
              grandTotalExpense > 0
                ? (item.total / grandTotalExpense) * 100
                : 0;

            return (
              <div key={item.category}>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex justify-between w-full">
                    <span>{item.category}</span>
                    <span className="flex items-center">
                      <BiRupee />
                      {item.total.toFixed(2)}
                    </span>
                  </div>
                  <span className="text-gray-500">
                    ({percentage.toFixed(2)}%)
                  </span>
                </div>

                <div className="h-2 bg-zinc-200 rounded-full mt-2 w-full">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="mt-3 text-sm text-zinc-500">No expense to show</p>
      )}
    </div>
  );
}

export default CategoryCard;
