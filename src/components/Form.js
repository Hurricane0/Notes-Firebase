import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

const Form = () => {
    const [value, setValue] = useState("");
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    const handleSubmit = e => {
        e.preventDefault();

        if (value.trim()) {
            firebase
                .addNote(value.trim())
                .then(() => {
                    alert.show("Note was created", "success");
                    setValue("");
                })
                .catch(() => {
                    alert.show("Something went wrong", "danger");
                });
        } else {
            alert.show("Enter something");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    className="form-control"
                    placeholder={"Enter what do you want to do"}
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
                <hr />
            </div>
        </form>
    );
};

export default Form;
