import s from "./HeaderLogo.module.css";
import { NavLink } from "react-router-dom";

const HeaderLogo = (props) => {
    return (
        <NavLink to="/profile" className={s.navLink}>
            <img src="https://static.vecteezy.com/system/resources/previews/011/148/986/original/speaker-3d-render-transparent-icon-png.png" className={s.logo} />
            <span className={s.title}>Be Heard!</span>
        </NavLink>
    );
}

export default HeaderLogo;