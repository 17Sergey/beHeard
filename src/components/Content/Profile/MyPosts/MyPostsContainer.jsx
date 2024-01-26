import { connect } from "react-redux/es/exports";
import { addLike, addPostActionCreator } from "../../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";
import React from "react";

let MyPostsContainer = (props) => {
    return (
        <MyPosts {...props} />
    );
} 

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
    };
};

MyPostsContainer = React.memo(MyPostsContainer);

export default connect(mapStateToProps, { addPostActionCreator, addLike })(MyPostsContainer);