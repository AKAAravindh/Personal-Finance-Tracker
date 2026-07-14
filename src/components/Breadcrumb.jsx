import { Link, useLocation } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

function Breadcrumb() {
  const { pathname } = useLocation();

  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 mx-2">
      <Link to="/dashboard" className="hover:text-black dark:hover:text-white">
        Dashboard
      </Link>

      {paths.slice(1).map((path, index) => {
        const url = "/dashboard/" + paths.slice(1, index + 2).join("/");

        return (
          <div key={url} className="flex items-center gap-2">
            <IoChevronForward size={14} />

            <Link
              to={url}
              className="capitalize hover:text-black dark:hover:text-white"
            >
              {path.replace(/-/g, " ")}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
