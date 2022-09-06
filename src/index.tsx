import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return (
        <div>
            <h1>Hello!!</h1>
            <h2>Welcome to your First React App..!</h2>
        </div>
    );
};
const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

root.render(<App/>);