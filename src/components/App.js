import { NavLink, Route, Routes } from "react-router-dom";
import { Button } from "./Button/Button";
import { Container } from "./Container/Container";
import { GlobalStyle } from "./GlobalStyle";
import PostList from "./PostList/PostList";
import posts from "../data/post.json";
import { AccordionItem } from "./AccordionItem/AccordionItems.jsx";
import { FAQ } from "./FAQ/FAQ";
import Tabs from "./Tabs/Tabs.jsx";
import Albums from "./Albums/Albums";
import { StarWars } from "./StarWars/StarWars";
import { FormReg } from "./FormReg/FormReg";
import { HomePage } from "../pages/HomePage";
import { TasksPage } from "../pages/TasksPage/TasksPage";
import { Boys } from "./Boys/Boys";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage.jsx";
import { Layout } from "./Layout/Layout";
import { Counter } from "./Counter/Counter";
import { GoodList } from "./GoodsList/GoodsList";
import { Users } from "./Users/Users";

function App() {
  return (
    <>
      <Counter />
      <GoodList />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />}>
            <Route path="boys" element={<Boys />} />
            <Route path="starwars" element={<StarWars />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
