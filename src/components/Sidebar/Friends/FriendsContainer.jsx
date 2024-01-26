import { connect } from "react-redux/es/exports";
import Friends from "./Friends";



let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends,
    }
}

let FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;