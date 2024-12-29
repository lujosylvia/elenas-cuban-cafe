import React from "react";
import { isLoggedIn } from "../../services/auth/utils";


const UpdateMenu = () => {
    const loggedIn = isLoggedIn();
    console.log('#### logged In', loggedIn);
    return (
        <div>
            UpdateMenu
        </div>
    )
}

export default UpdateMenu;