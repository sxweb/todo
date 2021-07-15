import React from "react";
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header";
import AppSearch from "./components/app-search";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";

const App = () => {

    const todoData = [
        {label:'Drink coffee', important: false, id: 1},
        {label:'Make awesome app', important: true, id: 2},
        {label:'Have a rest', important: false, id: 3}
    ]

    return(
        <>
            <AppHeader/>
            <AppSearch/>
            <ItemStatusFilter/>
            <TodoList data={todoData}/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));