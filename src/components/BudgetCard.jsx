import { BiEdit, BiRupee } from "react-icons/bi";
import { useFinance } from "../context/FinanceContext";

function BudgetCard() {
  const { monthlyBudget, transactions } = useFinance();

  const totalExpenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => {
      return acc + item.amount;
    }, 0);

  const remainingBudget = monthlyBudget - totalExpenses;

  return (
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-xl">Monthly Budget</h3>
        <span onClick={() => alert("Edit budget feature coming soon!")}>
          <BiEdit size={24} className="text-green-500 cursor-pointer" />
        </span>
      </div>

      <div className="flex justify-between mt-4">
        <span className="flex items-center">
          <BiRupee />
          {remainingBudget.toFixed(2)}
        </span>
        <span className="flex items-center">
          <BiRupee />
          {monthlyBudget.toFixed(2)}
        </span>
      </div>

      <div className="w-full h-3 bg-zinc-200 rounded-full mt-3">
        <div
          style={{ width: `${(remainingBudget / monthlyBudget) * 100}%` }}
          className={`h-full ${remainingBudget < 0 ? "bg-red-400" : "bg-green-500"} rounded-full`}
        ></div>
      </div>

      <p className="mt-3 text-sm text-zinc-500">
        {remainingBudget < 0
          ? `You have exceeded your budget by ₹${Math.abs(remainingBudget).toFixed(2)}`
          : `You have ₹${remainingBudget.toFixed(2)} remaining in your budget`}
      </p>
    </div>
  );
}

export default BudgetCard;
