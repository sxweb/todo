import React from "react";
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header";
import AppSearch from "./components/app-search";
import TodoList from "./components/todo-list";

const App = () => {
    return(
        <>
            <AppHeader/>
            <AppSearch/>
            <TodoList/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));