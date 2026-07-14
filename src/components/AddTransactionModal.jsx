import { useState } from "react";
import { useFinance } from "../context/FinanceContext";
import { CgClose } from "react-icons/cg";

function AddTransactionModal() {
  const { addTransaction, setToggleAddTransaction } = useFinance();

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "type" && value === "income" ? { category: "" } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(formData.amount) <= 0) return;

    addTransaction({
      ...formData,
      amount: Number(formData.amount),
      category:
        formData.type === "expense"
          ? formData.category.trim() || "Uncategorized"
          : "",
    });

    setFormData({
      title: "",
      amount: "",
      type: "expense",
      category: "",
    });

    setToggleAddTransaction(false);
  };

  return (
    <div
      onClick={() => setToggleAddTransaction(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-6"
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl dark:bg-zinc-900"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Add Transaction</h2>
            <p className="text-sm text-zinc-500">
              Record your income or expense
            </p>
          </div>

          <button
            type="button"
            onClick={() => setToggleAddTransaction(false)}
            className="rounded-full p-2 text-red-400 transition hover:bg-red-50 hover:text-red-500 cursor-pointer"
          >
            <CgClose size={22} />
          </button>
        </div>

        {/* Type */}
        <label className="mt-5 block text-sm font-medium">
          Transaction Type
        </label>

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-green-500"
        >
          <option className="text-black" value="expense">
            Expense
          </option>

          <option className="text-black" value="income">
            Income
          </option>
        </select>

        {/* Title */}
        <label className="mt-4 block text-sm font-medium">Title</label>

        <input
          className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-green-500"
          placeholder="Salary, Food, Shopping..."
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        {/* Amount */}
        <label className="mt-4 block text-sm font-medium">Amount</label>

        <input
          className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-green-500"
          placeholder="0.00"
          name="amount"
          type="number"
          min="1"
          value={formData.amount}
          onChange={handleChange}
          required
        />

        {/* Category */}
        {formData.type === "expense" && (
          <>
            <label className="mt-4 block text-sm font-medium">Category</label>

            <input
              className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-green-500"
              placeholder="Food, Travel, Bills..."
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-green-500 py-3 font-bold text-black transition hover:bg-green-400 cursor-pointer dark:text-white"
        >
          Save Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionModal;
