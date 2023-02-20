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

function App() {
  return (
    <>
      {/* <FormReg/> */}
      {/* <GlobalStyle />
      <Container>
        <Tabs /> */}
      {/* <AccordionItem /> */}
      {/* <FAQ /> */}
      {/* </Container>
      {/* <Albums /> */}
      {/* <StarWars/> */}
      <nav>
        <NavLink to="/">HomePage</NavLink>
        <NavLink to="/tasks">TasksPage</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />}>
          <Route path="boys" element={<Boys />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
