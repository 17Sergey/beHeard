import React from "react";
import { connect } from "react-redux/es/exports";
import { compose } from "redux";

import Preloader from "../../common/Preloader/Preloader";

import {unfollow, follow, fetchUsers } from "../../../redux/reducers/usersReducer";
import { getUsers } from "../../../redux/selectors/usersSelectors"
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.fetchUsers(this.props.currentPageNumber, this.props.pageSize);
    }

    changePage = (pageNumber) => {
        this.props.fetchUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isUsersFetching && <Preloader />}
                <Users {...this.props} changePage={this.changePage} />
            </>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPageNumber: state.usersPage.currentPageNumber,
        isUsersFetching: state.usersPage.isUsersFetching,
        followingInProgressUsers: state.usersPage.followingInProgressUsers,
    }
}

export default compose(connect(mapStateToProps, { unfollow, follow, fetchUsers }))(UsersContainer);