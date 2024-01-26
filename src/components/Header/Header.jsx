import s from "./Header.module.css";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import AuthInfo from "./AuthInfo/AuthInfo";

const Header = (props) => {
    return (
        <div className={s.wrapper}>
            <header className={s.header}>
                <HeaderLogo />
                <AuthInfo isAuth={props.isAuth} login={props.login}/>
            </header>
        </div>
    );
}

export default Header;