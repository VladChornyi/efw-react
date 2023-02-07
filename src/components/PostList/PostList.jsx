
import PropTypes from 'prop-types';
import { PostItem } from "../PostItem/PostItem.jsx"
function PostList({posts}) {
const imgPost =
  "url(https://img.freepik.com/premium-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg?w=2000)";
    return (
      <>
        <h2
          style={{
            color: "red",
            textAlign: "center",
            backgroundColor: "violet",
          }}
        >
          Postlist
        </h2>
        <ul
          style={{
            backgroundImage: imgPost,
          }}
        >
          {posts.map(({ id, title, text }) => (
            <PostItem key={id} title={title} text={text} />
          ))}
        </ul>
      </>
    );
}
PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.exact({id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,}))
    
};

export default PostList;