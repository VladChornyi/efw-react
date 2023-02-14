import { Button } from "./Button/Button";
import { Container } from "./Container/Container";
import { GlobalStyle } from "./GlobalStyle";
import PostList from "./PostList/PostList";
import posts from "../data/post.json";
import { AccordionItem } from "./AccordionItem/AccordionItems.jsx";
import { FAQ } from "./FAQ/FAQ";
import Tabs from "./Tabs/Tabs.jsx";
import Albums from "./Albums/Albums";

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
