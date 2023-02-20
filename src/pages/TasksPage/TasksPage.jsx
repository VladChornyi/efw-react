import { NavLink, Outlet } from "react-router-dom";

export function TasksPage() {
  return (
    <div>
      TasksPage
      <NavLink to="boys">Boys</NavLink>
      <Outlet />
    </div>
  );
}
