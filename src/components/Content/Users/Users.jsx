import styles from "./Users.module.css";
import User from "./User/User";
import { Paginator } from "../../common/Paginator/Paginator";
import { useState } from "react";

let Users = (props) => {

    let createUsersList = (users) => {
        return users.map(user =>
            <User
                followingInProgressUsers={props.followingInProgressUsers}
                user={user}
                follow={props.follow}
                unfollow={props.unfollow}
                key={user.id}
            />
        );
    }

    return (
        <div>

            <div className={styles.heading}>Users</div>
            
            <Paginator
                currentPageNumber={props.currentPageNumber}
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
                changePage={props.changePage}
            />

            <div className={styles.usersList}>
                {createUsersList(props.users)}
            </div>
            
        </div>
    );
}

export default Users;
