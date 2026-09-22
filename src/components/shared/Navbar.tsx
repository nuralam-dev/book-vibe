import Link from "next/link";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link
          href="/"
          className="border border-[#23BE0A] text-[#23BE0A] font-semibold rounded-lg px-4 py-2 hover:bg-[#23BE0A] hover:text-white transition-all"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/listed-books"
          className="text-[#131313]/80 hover:text-[#23BE0A] px-4 py-2 font-medium"
        >
          Listed Books
        </Link>
      </li>
      <li>
        <Link
          href="/pages-to-read"
          className="text-[#131313]/80 hover:text-[#23BE0A] px-4 py-2 font-medium"
        >
          Pages to Read
        </Link>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-white py-4 max-w-7xl mx-auto px-4 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow space-y-2"
          >
            {links}
          </ul>
        </div>
        <Link href="/" className="text-2xl font-bold text-[#131313]">
          Book Vibe
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center space-x-4">{links}</ul>
      </div>

      <div className="navbar-end gap-3">
        <Link
          href="/signin"
          className="btn border-none bg-[#23BE0A] hover:bg-[#1fa109] text-white font-semibold text-base px-6 rounded-xl min-h-0 h-11"
        >
          Sign In
        </Link>
        <Link
          href="/signup"
          className="btn border-none bg-[#59C6D2] hover:bg-[#43b2be] text-white font-semibold text-base px-6 rounded-xl min-h-0 h-11"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;