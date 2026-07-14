import TransactionItem from "./TransactionItem";
import { useFinance } from "../context/FinanceContext";
import { Link } from "react-router-dom";
import { BiCaretDown } from "react-icons/bi";

function TransactionList() {
  const { transactions } = useFinance();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center pr-5">
        <h2 className="text-xl font-bold">Recent Transactions</h2>
        <Link
          to="/dashboard/transactions"
          className="text-blue-500 cursor-pointer flex items-center gap-1"
        >
          All Transactions
          <BiCaretDown size={16} />
        </Link>
      </div>

      {transactions.length > 0 ? (
        transactions
          .sort((a, b) => b.id - a.id)
          .slice(0, 5)
          .map((item) => <TransactionItem key={item.id} item={item} />)
      ) : (
        <p className="text-sm text-zinc-500 text-center my-20">
          No transactions to show
        </p>
      )}
    </div>
  );
}

export default TransactionList;
