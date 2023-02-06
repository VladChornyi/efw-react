
function PostList({posts}) {
    return(
        <>
        <h2>Postlist</h2>
        <ul>
           {posts.map(({id, title, text}) => (
            <li key={id}>
                <h4>{title}</h4>
                <p>{text}</p>
            </li>
           ))
            }
        </ul>
        </>
    )
}

export default PostList;