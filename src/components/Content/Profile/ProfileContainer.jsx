import React from "react";

import { connect } from "react-redux";
import { compose } from "redux";

import { getProfile } from "../../../redux/reducers/profileReducer";

import Profile from "./Profile";
import WithAuthRedirect from "../../../hoc/WithAuthRedirect";
import Preloader from "../../common/Preloader/Preloader";
import { WithRouter } from "../../../hoc/WithRouter";


class ProfileContainer extends React.Component {
    componentDidMount() {
        // URL changes when user is clicked on "Users" page
        let userId = this.props.router.params.userId;
        if (!userId) userId = this.props.currentUserProfileId;
        this.props.getProfile(userId);
    }

    render() {
        if (!this.props.profile) return <Preloader />
        return (
            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    currentUserProfileId: state.auth.userId,
});


export default compose(connect(mapStateToProps, { getProfile }), WithRouter, WithAuthRedirect)(ProfileContainer);