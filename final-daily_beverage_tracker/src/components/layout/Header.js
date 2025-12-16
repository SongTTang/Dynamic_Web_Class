import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../store/themeSlice";

const Header = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const theme = useSelector((state) => state.themes);
  const dispatch = useDispatch();

  const menuRef = useRef(null);

  // clear theme then add new one
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(
      "theme-light",
      "theme-wood",
      "theme-matcha",
      "theme-arabica",
      "theme-serenity",
      "theme-coconut"
    );
    if (theme !== "light") {
      root.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);

  return (
    <header className="border-b bg-bg2 text-text border-border relative">

      {/* title */}
      <div className="py-3 text-center border-b border-border">
        <h1 className="text-2xl font-bold tracking-wide">{title}</h1>
      </div>

      {/* nav link */}
      <div className="flex items-center justify-between px-4 py-2">

        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold underline"
                : "text-primary hover:underline"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/visualization"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold underline"
                : "text-primary hover:underline"
            }
          >
            Visualization
          </NavLink>
        </div>

        {/* mode toggle button*/}
        <div className="relative" ref={menuRef}>
          <Button outline onClick={() => setIsOpen(!isOpen)}>
            Mode
          </Button>

          {isOpen && (
            <div className="absolute right-0 top-10 border border-border bg-card rounded shadow-lg w-40 z-50">
              {["light", "wood", "matcha", "arabica", "serenity", "coconut"].map((m) => {
                const isActive = m === theme;
                // change theme button
                return (
                  <Button
                    key={m}
                    outline
                    className={`relative block w-full justify-start px-3 py-2 capitalize hover:bg-bg`}
                    onClick={() => {
                      dispatch(setTheme(m));
                      setIsOpen(false);
                    }}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r" />
                    )}

                    <span className="pl-2">{m}</span>
                  </Button>
                );
              })}



            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
