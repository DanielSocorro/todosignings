import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext);

    return(

            <>
            <h2 className='TodoCounterimg'></h2>
            <h2 className='TodoCounter'>Completed {completedTodos} of {totalTodos} Sings</h2></>
    )
 }

 export { TodoCounter };