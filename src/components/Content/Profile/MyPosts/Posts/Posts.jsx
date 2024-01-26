import Post from "./Post/Post";
import s from "./Posts.module.css";

const Posts = (props) => {

    let postsElements = props.posts
        .map(post => <Post key={post.id} postId={post.id} message={post.message} likesCount={post.likesCount} addLike={props.addLike} />)

    return (
        <div className={s.posts}>
            {postsElements}
        </div>
    );
}

export default Posts;