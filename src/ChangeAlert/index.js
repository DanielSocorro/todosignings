import React from "react";
import { withStorageListener } from "./withStorageListener";


function ChangeAlert( { show, toggleShow }) {
    if (show) {
        return <p>There was changes? </p>;
    }
}

const ChangeAlertWithStorageListener = withStorageAlert(ChangeAlert)

export { ChangeAlertWithStorageListener };