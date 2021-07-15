import React from "react";
import './todo-list-item.css';
import './todo-list-item-label.css';

const TodoListItem = ({label, important = false}) => {
    const liStyle = {
        color: important ? 'tomato' : 'black'
    }
    return (
        <span className='todo-list-item'>
            <span
                className='todo-list-item-label'
                style={liStyle}>
                    {label}
            </span>
            <button
                type='button'
                className='btn btn-outline-success btn-sm'>
                <i className='fa fa-exclamation'/>
            </button>
            <button
                type='button'
                className='btn btn-outline-success btn-sm'>
                <i className='fa fa-trash-o'/>
            </button>
        </span>

    );
}

export default TodoListItem;