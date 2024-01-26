import s from "./AuthInfo.module.css";
import { NavLink } from "react-router-dom";

import LogOutImg from "../../../assets/images/log-out.svg";
import LogInImg from "../../../assets/images/log-in.svg";
import UserImg from "../../../assets/images/cat.png";
import Logout from "../../common/Logout/Logout";

const AuthInfo = (props) => {
    return (
        <div>
            {props.isAuth ?
                <NavLink to="/profile" className={s.userName}>
                    <img src={UserImg} alt="User img" className={s.userImg}/>
                    <span>{props.login}</span>
                    <Logout logOutImg={LogOutImg} logImgClassName={s.logImg}/>
                </NavLink>
                :
                <NavLink to="/login" className={s.login}>
                    <span>Log in</span>
                    <img src={LogInImg} alt="Log In" className={s.logImg} />
                </NavLink>
            }
        </div>
    );
}

export default AuthInfo;