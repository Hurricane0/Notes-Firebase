import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Notes = ({ notes, onRemove }) => {
    return (
        <TransitionGroup component="ul" className={"list-group"}>
            {notes.map(note => {
                return (
                    <CSSTransition
                        key={note.id}
                        classNames="note"
                        timeout={800}
                    >
                        <li key={note.id} className={"list-group-item note"}>
                            <span>
                                <strong>{note.title}</strong>
                                <small>{note.date}</small>
                            </span>
                            <button
                                onClick={() => onRemove(note.id)}
                                type="button"
                                className="btn btn-danger"
                            >
                                &#x02717;
                            </button>
                        </li>
                    </CSSTransition>
                );
            })}
        </TransitionGroup>
    );
};

export default Notes;
