import { Link, useLocation } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

function Breadcrumb() {
  const { pathname } = useLocation();

  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 mx-2">
      <Link to="/" className="hover:text-black dark:hover:text-white">
        Dashboard
      </Link>

      {paths.map((path, index) => {
        const url = "/" + paths.slice(0, index + 1).join("/");

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
