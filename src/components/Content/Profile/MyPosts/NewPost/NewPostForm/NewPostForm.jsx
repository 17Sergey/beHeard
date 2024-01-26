import classes from './NewPostForm.module.css'
import { Field, reduxForm } from "redux-form";
import { fieldRequired, maxLengthCreator } from '../../../../../../utils/validators/validator';
import { TextArea } from '../../../../../common/FormsControls/FormsControls';

const maxLength30 = maxLengthCreator(30);

let NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.newPost}>
            <Field
                component={TextArea}
                name={"newPostText"}
                placeholder="your news..."
                className={classes.newPostTextarea}
                validate={[fieldRequired, maxLength30]} />
            <div>
                <button className={classes.btn}>Send</button>
            </div>
        </form>
    );
}

NewPostForm = reduxForm({ form: "newPost" })(NewPostForm);

export default NewPostForm;
