import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { CSSTransition } from "react-transition-group";

const Alert = () => {
    const { alert, hide } = useContext(AlertContext);

    return (
        <CSSTransition
            in={alert.visible}
            classNames={"alert"}
            timeout={{
                enter: 500,
                exit: 350
            }}
            mountOnEnter
            unmountOnExit
        >
            <div
                className={`alert alert-${alert.type ||
                    "warning"} alert-dismissible`}
            >
                <strong>Warning!</strong> {alert.text}
                <button
                    onClick={hide}
                    type="button"
                    className="close"
                    aria-label="Close"
                    style={{ outline: "none" }}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    );
};

export default Alert;
