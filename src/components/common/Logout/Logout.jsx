import { connect } from "react-redux";
import { logOut } from "../../../redux/reducers/authReducer";


let Logout = (props) => {

    return (
        <img src={props.logOutImg} alt="Log Out" className={props.logImgClassName} onClick={props.logOut}/>
    );
    
}

export default connect(null, { logOut })(Logout);