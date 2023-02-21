import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">HomePage</NavLink>
          <NavLink to="/tasks">TasksPage</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
