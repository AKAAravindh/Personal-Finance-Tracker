function TransactionItem({ item }) {
  const transactionDate = new Date(item.id).toLocaleDateString("en-US", {
    dateStyle: "full",
  });
  const transactionTime = new Date(item.id).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-xl">
      <div>
        <h4 className="font-semibold">{item.title}</h4>

        <p className="text-sm text-zinc-500">
          {transactionDate} • {transactionTime}
        </p>
      </div>

      <p
        className={`${item.type === "income" ? "text-green-400" : "text-red-400"} font-bold flex items-center`}
      >
        {item.type === "expense" ? "-" : "+"}
        <span className="ml-1 flex items-center">₹{item.amount}</span>
      </p>
    </div>
  );
}

export default TransactionItem;
