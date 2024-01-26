import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom"

import classes from "./Login.module.css";
import { logIn } from "../../../redux/reducers/authReducer";
import LoginForm from "./LoginForm";

let Login = (props) => {
    const formSubmit = (formData) => {
        props.logIn(formData);
    }
    if (props.isAuth) return <Navigate to={"/profile"} />;
    return (
        <div>
            <NavLink to="/news" className={classes.background} />
            <div className={classes.logInContainer}>
                <LoginForm onSubmit={formSubmit} />
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
}

export default connect(mapStateToProps, { logIn })(Login);