import { GrTransaction } from "react-icons/gr";
import BalanceCard from "./BalanceCard";
import BudgetCard from "./BudgetCard";
import CategoryCard from "./CategoryCard";
import SummaryCards from "./SummaryCards";
import TransactionList from "./TransactionList";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <BalanceCard />

          <SummaryCards />

          <TransactionList />
        </div>

        <div className="space-y-6">
          <BudgetCard />

          <CategoryCard />
        </div>
      </div>
      <Link
        to="/dashboard/transactions"
        className="fixed bg-green-400 right-10 bottom-10 rounded-full flex items-center justify-center p-3 cursor-pointer hover:-translate-y-0.5 transition-all duration-300"
      >
        <span>
          <GrTransaction size={22} />
        </span>
      </Link>
    </div>
  );
}

export default HomePage;
