import { useFinance } from "../context/FinanceContext";
import { BiRupee, BiTrendingUp, BiWallet } from "react-icons/bi";

function BalanceCard() {
  const { transactions } = useFinance();

  const balance = transactions.reduce((total, item) => {
    return item.type === "income"
      ? total + Number(item.amount)
      : total - Number(item.amount);
  }, 0);

  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const totalExpense = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const latestTransaction = transactions.at(0);

  const expensePercentage =
    totalIncome > 0 ? Math.min((totalExpense / totalIncome) * 100, 100) : 0;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-400 via-green-500 to-teal-600 p-6 text-black shadow-xl">
      {/* Background decoration */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20" />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold opacity-70">Available Balance</p>

          <h2 className="mt-3 flex items-center text-5xl font-black">
            <BiRupee size={40} />
            {Math.abs(balance).toLocaleString("en-IN", {
              minimumFractionDigits: 2,
            })}
          </h2>

          <div className="mt-3 flex items-center gap-2 text-sm font-semibold">
            <span className="rounded-full bg-white/30 px-3 py-1">
              {balance >= 0 ? "Healthy" : "Needs attention"}
            </span>
          </div>
        </div>

        <div className="rounded-2xl bg-white/25 p-4 backdrop-blur">
          <BiWallet size={32} />
        </div>
      </div>

      {/* Spending Progress */}
      <div className="mt-8">
        <div className="mb-2 flex justify-between text-sm font-medium">
          <span>Expense Usage</span>
          <span>{expensePercentage.toFixed(0)}%</span>
        </div>

        <div className="h-2 rounded-full bg-black/20">
          <div
            className="h-2 rounded-full bg-black transition-all"
            style={{
              width: `${expensePercentage}%`,
            }}
          />
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
          <p className="text-sm opacity-70">Transactions</p>
          <p className="mt-1 text-2xl font-bold">{transactions.length}</p>
        </div>

        <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
          <p className="text-sm opacity-70">Status</p>
          <p className="mt-1 flex items-center gap-1 text-2xl font-bold">
            <BiTrendingUp />
            {balance >= 0 ? "Good" : "Low"}
          </p>
        </div>
      </div>

      {/* Latest Transaction */}
      <div className="mt-5 rounded-2xl bg-black/10 p-4">
        <p className="text-sm font-medium opacity-70">Latest Transaction</p>

        {latestTransaction ? (
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="font-bold">{latestTransaction.title}</p>

              <p className="text-sm opacity-70 items-center flex">
                {new Date(latestTransaction.id).toLocaleDateString()}
                {" • "} {new Date(latestTransaction.id).toLocaleTimeString()}
              </p>
            </div>

            <p className="font-bold">
              {latestTransaction.type === "income" ? "+" : "-"}₹
              {latestTransaction.amount}
            </p>
          </div>
        ) : (
          <p className="mt-2 text-sm opacity-70">Start adding transactions</p>
        )}
      </div>
    </div>
  );
}

export default BalanceCard;
