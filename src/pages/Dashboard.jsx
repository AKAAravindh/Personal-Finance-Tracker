import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import AddTransactionModal from "../components/AddTransactionModal";
import { useFinance } from "../context/FinanceContext";

function Dashboard() {
  const { pathname } = useLocation();
  const { toggleAddTransaction } = useFinance();

  const showBreadcrumb = pathname !== "/";

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-black p-6 dark:text-white flex flex-col">
      <Navbar />

      {showBreadcrumb && (
        <div className="mt-6">
          <Breadcrumb />
        </div>
      )}

      <main className="mt-6 flex-1 min-h-0 flex w-full flex-col">
        <Outlet />
      </main>

      {toggleAddTransaction && <AddTransactionModal />}
    </div>
  );
}

export default Dashboard;
