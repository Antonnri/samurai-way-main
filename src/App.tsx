import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {AppPropsType} from "./components/TypeProps";
import state from "./components/redux/state";


const App: React.FC<AppPropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
ncvncvncvn
                    <Route path={'/dialogs'} render={() =>
                        <Dialogs dialogsItem={props.state.dialogsPage.dialogsItem}
                                 messages={props.state.dialogsPage.messages}/>}/>
                    <Route path={'/dialogs'} render={() =>
                        <Dialogs messages={props.state.dialogsPage.messages}
                                 dialogsItem={props.state.dialogsPage.dialogsItem}/>}/>
                    <Route path={'/profile'}
                           render={() =>
                        <Profile posts={props.state.profilePage.posts}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
