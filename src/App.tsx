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
import {DialogsPageType, stateType} from "./components/TypeProps";




const App: React.FC<stateType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path={'/dialogs'} render={ () => <Dialogs dialogsItem={props.dialogsPage.dialogsItem}
                    message={props.dialogsPage.message}/> }/>,

{/*
                    <Route path={'/profile'} render={() =>
                        <Profile message={props.profilePage.posts.message}
                                 likesCount={props.profilePage.posts.likesCount}
                                 id={props.profilePage.posts.id}
                    /> }/>,
*/}



{/*                    <Route path={'/News'} render={() => <News/>}/>,
                    <Route path={'/Music'} render={() => <Music/>}/>
                    <Route path={'/Settings'} render={() => <Settings/>}/>*/}

                </div>
            </div>
        </BrowserRouter>
    );
}

// posts={props.posts}
export default App;
