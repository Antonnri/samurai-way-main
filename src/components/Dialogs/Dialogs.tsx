import React from 'react';
import dialogs from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props: any) => {
    return (
        <div className={dialogs.dialogs}>
            <div>
                <div className={dialogs.dialogItems}>
                    <div className={dialogs.dialog + ' ' + dialogs.active}>
                        <NavLink to='/dialogs/1'> Anton</NavLink>
                    </div>
                    <div className={dialogs.dialog}>
                        <NavLink to='/dialogs/2'> Katya</NavLink>

                    </div>
                    <div className={dialogs.dialog}>
                        <NavLink to='/dialogs/3'> Sergey</NavLink>

                    </div>
                    <div className={dialogs.dialog}>
                        <NavLink to='/dialogs/4'> Winipooh</NavLink>
                    </div>
                </div>
            </div>
            <div className={dialogs.messages}>
                <div className={dialogs.message}>Hi</div>
                <div className={dialogs.message}>Hy</div>
                <div className={dialogs.message}>Very well</div>

            </div>
        </div>
    )

}
export default Dialogs;