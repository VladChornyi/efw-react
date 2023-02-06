
import PropTypes from 'prop-types';
import { PostItem } from "../PostItem/PostItem.jsx"
function PostList({posts}) {

    return(
        <>
        <h2>Postlist</h2>
        <ul>
           {posts.map(({id, title, text}) => (
           <PostItem
           key={id}
           title={title}
           text={text}/>
           ))
            }
        </ul>
        </>
    )
}
PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.exact({id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,}))
    
};

export default PostList;