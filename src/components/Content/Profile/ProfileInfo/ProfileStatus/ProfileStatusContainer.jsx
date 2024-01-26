import React from "react";
import { connect } from "react-redux";

import { updateStatus } from "../../../../../redux/reducers/profileReducer";
import ProfileStatus from "./ProfileStatus";

const ProfileStatusContainer = ({ status, getStatus, updateStatus }) => {
    return (
        <ProfileStatus status={status} updateStatus={updateStatus}/>
    );
}
let mapStateToProps = (state) => {
    return {
        status: state.profilePage.status,
    }
}
export default connect(mapStateToProps, { updateStatus } )(ProfileStatusContainer);