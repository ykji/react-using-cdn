/**
 * Note that createElement is a React API and createRoot is a ReactDOM API
 */

const heading = React.createElement("h1", { id: "heading" }, "This is created using React cdn links");

console.log({ heading });

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
