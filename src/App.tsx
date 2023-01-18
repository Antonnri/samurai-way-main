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
import {AppType} from "./components/TypeProps";


const App = () => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content' >
{/*                    <Route path={'/Profile'} render={() => <Profile posts={props.posts}/>}/>,
                    <Route path={'/Dialogs'} render={() => <Dialogs dialogs={props.dialogs} message={props.messages} />}/>,*/}
{/*                    <Route path={'/News'} render={() => <News />}/>,
                    <Route path={'/Music'} render={() => <Music />}/>
                    <Route path={'/Settings'} render={() => <Settings/>}/>*/}

                </div>
            </div>
        </BrowserRouter>
    );
}




export default App;
