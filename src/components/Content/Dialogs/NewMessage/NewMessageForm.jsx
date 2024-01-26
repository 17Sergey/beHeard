import classes from './NewMessageForm.module.css'
import { Field, reduxForm } from "redux-form";
import { fieldRequired, maxLengthCreator } from '../../../../utils/validators/validator';
import { TextArea } from '../../../common/FormsControls/FormsControls';

const maxLength30 = maxLengthCreator(30);

let NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.newMessage}>
            <Field
                component={TextArea}
                validate={[fieldRequired, maxLength30]}
                name={"newMessageText"}
                placeholder="your message..."
                className={classes.newMessageTextarea} />
            <div>
                <button className={classes.btn}>Send</button>
            </div>
        </form>
    );
}

NewMessageForm = reduxForm({ form: "newMessage" })(NewMessageForm);

export default NewMessageForm;
