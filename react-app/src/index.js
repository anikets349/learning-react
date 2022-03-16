import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX
// JSX rules
// return a single element
// div/section/article/Fragment
// fragment -- <React.Fragment> </React.Fragment> or simply <> </>
// className instead of class
// close every element
// format

// Nested components

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => {
  return <h2>John Doe</h2>;
};

const Message = () => {
  return <p>This is my message</p>;
};

// function Greeting() {
//   return (
//     <React.Fragment>
//       <div className="main-div">
//         <h1>Hello World</h1>
//       </div>
//       <h2>New header</h2>
//     </React.Fragment>
//   );
// }

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World")
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
