import FriendsContainer from "./Friends/FriendsContainer";
import Navbar from './Navbar/Navbar'
import s from "./Sidebar.module.css";

const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <Navbar />
            <FriendsContainer />
        </div>
    );
}

export default Sidebar;