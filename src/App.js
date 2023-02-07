import css from './App.module.scss';
import { Button } from "./components/Button/Button";
import { Container } from "./components/Container/Container";
import { GlobalStyle } from "./components/GlobalStyle";
import PostList from "./components/PostList/PostList";
import posts from "./data/post.json";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <h2 className={css.title}>Hello!!!</h2>
      </Container>
      <Container>
        <PostList posts={posts} />
        <Button main>Main</Button>
        <Button>Standart</Button>
        </Container>
    </>
  );
}

export default App;
