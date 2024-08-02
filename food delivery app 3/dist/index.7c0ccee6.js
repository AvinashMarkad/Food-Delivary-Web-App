const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "chaild"
    }, React.createElement("h1", {
        id: "heading2"
    }, "I am Heading tag"), React.createElement("h2", {
        id: "h2"
    }, "I am Heading 2 tag"))
], [
    React.createElement("div", {
        id: "chaild2"
    }, React.createElement("h1", {
        id: "heading2"
    }, "I am Heading tag"), React.createElement("h2", {
        id: "h2"
    }, "I am Heading 2 tag"))
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
