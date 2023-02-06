import "./App.css";
import { Container } from "./components/Container/Container";
import PostList from "./components/PostList/PostList";
import posts from "./data/post.json";

function App() {
  return (
    <>      
      <Container><h2>Hello!</h2></Container>
      <PostList posts = {posts}/>
    </>
  );
}

export default App;
