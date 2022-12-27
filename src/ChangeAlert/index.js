import React from "react";
import { withStorageListener } from "./withStorageListener";


function ChangeAlert( { show, toggleShow }) {
    if (show) {
        return (
        <div>
            <p>There was changes</p>
            <button
            onClick={toggleShow}>Reload
            </button>
        </div>);
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageAlert(ChangeAlert)

export { ChangeAlertWithStorageListener };