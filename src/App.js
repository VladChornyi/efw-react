import css from "./App.module.scss";
import { Button } from "./components/Button/Button";
import { Container } from "./components/Container/Container";
import { GlobalStyle } from "./components/GlobalStyle";
import PostList from "./components/PostList/PostList";
import posts from "./data/post.json";
import { AccordionItem } from "./components/AccordionItem/AccordionItems.jsx";
import { FAQ } from "./components/FAQ/FAQ";
import Tabs from "./components/Tabs/Tabs.jsx";
import Albums from "./components/Albums/Albums";

function App() {
  return (
    <>
      {/* <GlobalStyle />
      <Container>
        <Tabs />
        <AccordionItem />
        <FAQ />
      </Container> */}
      <Albums />
    </>
  );
}

export default App;
