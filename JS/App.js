const h1Heading = React.createElement("h1", {id:"header1", className:"redColor"},"React h1");

const parent = React.createElement("div",{id:"parent"},

[
    React.createElement("div",{id:"child1"}, 
    [
        React.createElement("h1", {id:"child1header1", className:"redColor"},"React h1"),
        React.createElement("h2", {id:"child1header2", className:"redColor"}, "React h2") 
    ]),
    React.createElement("div",{id:"child2"}, 
    [
        React.createElement("h1", {id:"child2header1", className:"redColor"},"React h1"),
        React.createElement("h2", {id:"child2header2", className:"redColor"}, "React h2") 
    ])
]

);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

const headerMenu = ReactDOM.createRoot(document.getElementById("headerMenu"));

headerMenu.render(React.createElement("h1", {},"Its a header"));