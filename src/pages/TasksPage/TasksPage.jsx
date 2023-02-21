import { NavLink, Outlet } from "react-router-dom";
import { StarWars } from "../../components/StarWars/StarWars";
import { useLocation } from "react-router-dom";

export function TasksPage() {
 const location = useLocation();
  return (
    <div>
      TasksPage
      <NavLink state={{from: location}} to="boys">Boys</NavLink>
      <NavLink state={{from: location}} to="starwars">StarWars</NavLink>
      <Outlet />
    </div>
  );
}
