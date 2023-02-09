import css from "./App.module.scss";
import { Button } from "./components/Button/Button";
import { Container } from "./components/Container/Container";
import { GlobalStyle } from "./components/GlobalStyle";
import PostList from "./components/PostList/PostList";
import posts from "./data/post.json";
import { AccordionItem } from "./components/AccordionItem/AccordionItems.jsx";
import { FAQ } from "./components/FAQ/FAQ";
import { Boys } from "./components/Boys";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <AccordionItem />
        <FAQ />
        <Boys />
      </Container>
    </>
  );
}

export default App;
