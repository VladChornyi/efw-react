import { NavLink, Outlet } from "react-router-dom";
import { StarWars } from "../../components/StarWars/StarWars";

export function TasksPage() {
  return (
    <div>
      TasksPage
      <NavLink to="boys">Boys</NavLink>
      <NavLink to="starwars">StarWars</NavLink>
      <Outlet />
    </div>
  );
}
