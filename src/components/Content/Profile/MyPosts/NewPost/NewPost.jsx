import NewPostForm from "./NewPostForm/NewPostForm";

let NewPost = (props) => {

    let formSubmit = (formData) => {
        props.addPostActionCreator(formData); 
    }
    return (
        <NewPostForm onSubmit={formSubmit} />
    );
}

export default NewPost;