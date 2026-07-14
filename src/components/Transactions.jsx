import { BiSearch } from "react-icons/bi";
import { useFinance } from "../context/FinanceContext";
import { useState } from "react";
import TransactionItem from "./TransactionItem";

export default function Transactions() {
  const { transactions, setToggleAddTransaction } = useFinance();

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredTransactions = transactions.filter((item) => {
    const matchesType = filter === "all" || item.type === filter;

    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesType && matchesSearch;
  });

  return (
    <div className="bg-zinc-100 dark:bg-zinc-950 p-6 rounded-xl flex-1">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Transactions</h1>
            <p className="text-zinc-500">
              View and manage all your transactions
            </p>
          </div>

          <button
            onClick={() => setToggleAddTransaction(true)}
            className="px-5 py-2 bg-green-500 text-white rounded-lg font-semibold cursor-pointer hidden sm:block"
          >
            + Add Transaction
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-3 flex-wrap">
          <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 px-4 py-2 rounded-lg">
            <BiSearch />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search transactions..."
              className="outline-none bg-transparent"
            />
          </div>

          <button
            onClick={() => setFilter("all")}
            className="px-4 py-2 rounded-lg bg-white dark:bg-zinc-900"
          >
            All
          </button>

          <button
            onClick={() => setFilter("income")}
            className="px-4 py-2 rounded-lg bg-white dark:bg-zinc-900"
          >
            Income
          </button>

          <button
            onClick={() => setFilter("expense")}
            className="px-4 py-2 rounded-lg bg-white dark:bg-zinc-900"
          >
            Expense
          </button>
        </div>

        {/* List */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl p-5 shadow space-y-3">
          {filteredTransactions.length > 0 ? (
            filteredTransactions
              .sort((a, b) => b.id - a.id)
              .map((item) => <TransactionItem key={item.id} item={item} />)
          ) : (
            <p className="text-zinc-500">No transactions found</p>
          )}
        </div>
      </div>
    </div>
  );
}
