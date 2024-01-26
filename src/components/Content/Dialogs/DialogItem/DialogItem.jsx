import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <img src={props.avatar} alt="avatar" className={s.avatar} />
            <NavLink to={path} className={navData => navData.isActive ? s.active : null}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;