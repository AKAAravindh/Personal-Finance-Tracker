import { useFinance } from "../context/FinanceContext";

function SummaryCards() {
  const { transactions } = useFinance();

  const totalIncome = transactions.reduce((total, item) => {
    if (item.type === "income") {
      return total + item.amount;
    }
    return total;
  }, 0);

  const totalExpense = transactions.reduce((total, item) => {
    if (item.type === "expense") {
      return total + item.amount;
    }
    return total;
  }, 0);

  const cards = [
    {
      title: "Income",
      amount: "₹" + totalIncome.toFixed(2) || 0.0,
      icon: "↑",
    },
    {
      title: "Expense",
      amount: "₹" + totalExpense.toFixed(2) || 0.0,
      icon: "↓",
    },
    {
      title: "Savings",
      amount: "₹" + (totalIncome - totalExpense).toFixed(2) || 0.0,
      icon: "💰",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {cards.map((item) => (
        <div
          key={item.title}
          className="p-5 bg-white dark:bg-zinc-900 rounded-xl shadow"
        >
          <p className="text-zinc-500">{item.title}</p>

          <h3 className="text-2xl font-bold mt-2">
            <span
              className={`${item.title === "Income" ? "text-green-400" : "text-red-400"}`}
            >
              {item.icon}
            </span>{" "}
            {item.amount}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
