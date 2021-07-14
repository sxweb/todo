import React from "react";
import ReactDOM from 'react-dom';

const AppHeader = () => {
    return <h1>some simple element</h1>;
};

const AppSearch = () => {
    return <input type="text" placeholder='search'/>;
};

const ElementsList = () => {
    return(
        <ul>
            <li>learn react elements</li>
            <li>learn react components</li>
        </ul>
    );
};

const App = () => {
    return(
        <>
            <AppHeader/>
            <AppSearch/>
            <ElementsList/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));