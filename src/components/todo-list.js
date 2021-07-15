import React from "react";
import TodoListItem from "./todo-list-item";
import './todo-list.css';

const TodoList = ({data}) => {
    const elements = data.map((elem) =>{
        const {id, ...otherProps} = elem;
        return (
            <li
                className='list-group-item'
                key={elem.id}>
                <TodoListItem {...otherProps}/>
            </li>
        )
    });
    return(
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    );
};

export default TodoList;