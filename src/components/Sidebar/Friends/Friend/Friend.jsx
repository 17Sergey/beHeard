import s from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <img src={props.avatar} alt="avatar" />
            <div>{props.name}</div>
        </div>
    );
}

export default Friend;