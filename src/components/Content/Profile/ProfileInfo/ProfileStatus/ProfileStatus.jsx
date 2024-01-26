import React, { useEffect, useState } from 'react';
import styles from './ProfileStatus.module.css';

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, updateStatus] = useState(props.status);

    useEffect( () => {
        updateStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => setEditMode(true);
    
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const changeStatus = (e) => {
        updateStatus(e.target.value);
    }

    const showPlainStatus = () => {
        return <span onClick={activateEditMode}>{props.status || "My status"}</span>;
    }

    const showEditModeStatus = () => {
        return (
            <div>
                <input type="text" autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status}
                    onChange={changeStatus}
                />
            </div>
        );
    }

    return (
        <div className={styles.status}>
            {editMode ? showEditModeStatus() : showPlainStatus()}
        </div>
    );
}

export default ProfileStatus;