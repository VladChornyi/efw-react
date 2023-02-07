import "./App.css";
import { Container } from "./components/Container/Container";
import { GlobalStyle } from "./components/GlobalStyle";
import PostList from "./components/PostList/PostList";
import posts from "./data/post.json";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <h2>Hello!</h2>
      </Container>
      <Container>
        <PostList posts={posts} />
        </Container>
    </>
  );
}

export default App;
