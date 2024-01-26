import { lazy } from 'react';
import { Routes, Route } from "react-router-dom";

import s from "./Content.module.css";

import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import UsersContainer from "./Users/UsersContainer";
import Login from "../common/Login/Login";
import { WithSuspense } from '../../hoc/WithSuspense';

const DialogsContainer = WithSuspense(lazy(() => import('./Dialogs/DialogsContainer')));
const ProfileContainer = WithSuspense(lazy(() => import('./Profile/ProfileContainer')));

function Content(props) {
    return (
        /* Wrapper for content to be in the right place with any active Route */
        <div className={s.content}>
            <Routes>
                <Route path="profile/:userId?/*" element={<ProfileContainer hello={"Hellooooo Sergeeeyy!!"}/>} />
                <Route path="dialogs/*" element={<DialogsContainer />} />
                <Route path="news/*" element={<News />} />
                <Route path="music/*" element={<Music />} />
                <Route path="settings/*" element={<Settings />} />
                <Route path="users/*" element={<UsersContainer />} />
                <Route path="login/*" element={<Login />} />
            </Routes>
        </div>
    );
}

export default Content;