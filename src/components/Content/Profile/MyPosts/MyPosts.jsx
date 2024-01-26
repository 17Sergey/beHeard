import React from "react";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";

const MyPosts = (props) => {

    return (
        <div>
            <h2>My Posts</h2>
            <NewPost userId={props.userId} addPostActionCreator={props.addPostActionCreator} />
            <Posts posts={props.posts} addLike={props.addLike} />
        </div>
    );
}

export default MyPosts;