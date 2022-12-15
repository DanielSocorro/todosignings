import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo, 
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    return (
        <form onSubmit={onSubmit}>
               <label>New Signings</label>
               <textarea 
               value={newTodoValue}
               onChange={onChange}
               placeholder="Add a new player for signing"
               
               />
                   <div className="TodoForm-buttonContainer">
                   <button
                   className="TodoForm-button-cancel"
                   type="button"
                   onClick={onCancel}
                   >
                    Cancel
                   </button>
                   <button 
                   className="TodoForm-button-add"
                   type="submit"
                   >
                      Add signing
                   </button>
                   </div>
        </form>

    );
}

export { TodoForm };