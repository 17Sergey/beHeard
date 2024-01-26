import { Checkbox, Input } from "../FormsControls/FormsControls";
import { fieldRequired } from "../../../utils/validators/validator";
import { Field, reduxForm } from "redux-form";

import classes from "./Login.module.css";
import formControlsStyles from "../FormsControls/FormsControls.module.css"

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.heading}>Log in</div>
            <div>
                <Field component={Input} validate={[fieldRequired]} placeholder="Email"
                    name="email" className={classes.fieldContainer} />
            </div>
            <div>
                <Field component={Input} validate={[fieldRequired]} placeholder="Password"
                    name="password"
                    className={classes.fieldContainer} />
            </div>
            <div>
                <Field component={Checkbox} label={"Remember me"} name="rememberMe"
                    className={classes.checkboxFieldContainer} />
            </div>
            {props.error &&
                <div className={formControlsStyles.formSummaryError}>
                    {props.error}
                </div>
            }
            <div className={classes.btn}>
                <button>Login</button>
            </div>
        </form>
    );
}

export default reduxForm({ form: "login" })(LoginForm);