import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple Logo" />
        <ul>
          {[
            { label: "Store" },
            { label: "Mac" },
            { label: "iPhone" },
            { label: "Watch" },
            { label: "Vision" },
            { label: "Airpods" },
          ].map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
        
        <div className="flex-center gap-3">
            <button>
                <img src="/search.svg" alt="Search" />
            </button>
            <button>
                <img src="/cart.svg" alt="Cart" />
            </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
