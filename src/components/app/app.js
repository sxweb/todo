import React from "react";
import AppHeader from "../app-header";
import AppSearch from "../app-search";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

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

export default App;