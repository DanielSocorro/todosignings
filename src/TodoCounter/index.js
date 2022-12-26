import React from 'react';
import './TodoCounter.css';


function TodoCounter({ totalTodos, completedTodos, loading}) {
    return(

            <>
            <h2 className='TodoCounterimg'></h2>
            <h2 className='TodoCounter'>Completed {completedTodos} of {totalTodos} Sings</h2></>
    )
 }

 export { TodoCounter };