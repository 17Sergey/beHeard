import NewMessageForm from "./NewMessageForm";

let NewMessage = (props) => {

    let formSubmit = (formData) => {
        // let newPost = {...formData, userId: props.userId};
        props.addMessage(formData);
    }
    return (
        <NewMessageForm onSubmit={formSubmit} />
    );
}

export default NewMessage;