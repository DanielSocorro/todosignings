import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css'; 


function ChangeAlert({show, toggleShow}) {
    if (show) {
        return (
            <div className="ChangeAlert-bg">
              <div className="ChangeAlert-container">
                <p>Looks like you have change your TODOs in other window.</p>
                <p>¿Would you like to sincronized your TODOs?</p>
                <button
                  className="TodoForm-button TodoForm-button--add"
                  onClick={toggleShow}
                >
                  Yes!
                </button>
              </div>
            </div>
          );
        } else {
          return null;
        }
      }
      
      const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
      
      export { ChangeAlertWithStorageListener };