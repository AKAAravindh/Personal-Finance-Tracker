import { useFinance } from "../context/FinanceContext";

function Navbar() {
  const { setToggleAddTransaction } = useFinance();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-zinc-900 rounded-xl shadow h-min">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
        Finance<span className="text-green-500">Flow</span>
      </h1>

      <button
        onClick={() => setToggleAddTransaction((prev) => !prev)}
        className="px-4 py-2 rounded-lg bg-green-500 text-black dark:text-white font-semibold cursor-pointer"
      >
        + Add Money
      </button>
    </nav>
  );
}

export default Navbar;
