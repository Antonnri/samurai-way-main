import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {AppPropsType} from "./components/TypeProps";



const App: React.FC<AppPropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path={'/Messages'}
                           render={() =>
                               <Dialogs dialogsUserName={props.state.dialogsPage.dialogsUserName}
                                        messages={props.state.dialogsPage.messages}/>}/>

                    <Route path={'/profile'}
                           render={() =>
                               <Profile posts={props.state.profilePage.posts}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
