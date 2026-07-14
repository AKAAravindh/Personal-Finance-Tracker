import { FaGithub, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-10 border-t border-zinc-200 dark:border-zinc-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg">
            Finance<span className="text-green-500">Tracker</span>
          </h3>

          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-sm mx-auto md:mx-0">
            A personal finance management app to track expenses, budgets, and
            transactions efficiently.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-center md:text-left">
          <p className="font-semibold text-zinc-800 dark:text-white">
            Built With
          </p>

          <p className="text-zinc-500 dark:text-zinc-400">
            React · Tailwind CSS · LocalStorage
          </p>

          <a
            href="https://github.com/AKAAravindh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 hover:text-black dark:hover:text-white transition"
          >
            <FaGithub size={17} />
            GitHub Repository
          </a>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500 dark:text-zinc-400 flex flex-col md:flex-row justify-between gap-2 text-center">
        <p>
          © {new Date().getFullYear()} Finance Tracker. All rights reserved.
        </p>

        <p>
          Made with <FaHeart className="inline text-red-500 mx-1" size={12} />{" "}
          by Aravindh Raj
        </p>
      </div>
    </footer>
  );
}

export default Footer;
