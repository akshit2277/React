const parent=React.createElement("div",{id:"parent"},[
  React.createElement("div", {id:"child"},[
    React.createElement("h1",{},"i ma H1 tag",),
    React.createElement("h2",{},"i ma H2 tag"),
  ]),
  React.createElement("div", {id:"child"},[
    React.createElement("h1",{},"i ma H1 tag",),
    React.createElement("h2",{},"i ma H2 tag"),
  ])

]);

console.log(parent);


// const heading = React.createElement(
//   "h1",

//   { id: "heading" },
//   "hello worldd from react"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
