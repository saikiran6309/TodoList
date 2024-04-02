import React from 'react'

const TodoList = ({ todolist, deleteHandler }) => (
    <div>
        <h5> Assigned tasks</h5>
        {todolist.map((todo, index) => <div key={index}>
            <h5>{todo} &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button> &nbsp; </h5>
        </div>)}
    </div>
)

export default TodoList
