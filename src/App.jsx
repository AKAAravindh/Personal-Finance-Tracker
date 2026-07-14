import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HomePage from "./components/HomePage";
import Transactions from "./components/Transactions";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<HomePage />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
