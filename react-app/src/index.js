import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// variables
const books = [
  {
    id: 1,
    title: "Do Epic Shit",
    author: "Ankur Warikoo",
    img: "https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR200,200_.jpg",
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4+OTOL._AC_UL604_SR200,200_.jpg",
  },
  {
    id: 3,
    title: "As a Man Thinketh",
    author: "James Allen",
    img: "https://images-eu.ssl-images-amazon.com/images/I/81tEgsxpNZS._AC_UL604_SR200,200_.jpg",
  },
  {
    id: 4,
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61Iz2yy2CKL._AC_UL302_SR200,200_.jpg",
  },
  {
    id: 5,
    title: "Attitude Is Everything: Change Your Attitude",
    author: "Jeff Keller",
    img: "https://images-eu.ssl-images-amazon.com/images/I/710jnzKlDTL._AC_UL604_SR200,200_.jpg",
  },
  {
    id: 6,
    title: "India that is Bharat",
    author: "J Sai Deepak",
    img: "https://images-eu.ssl-images-amazon.com/images/I/91xPAUEuzWS._AC_UL604_SR200,200_.jpg",
  },
  {
    id: 7,
    title: "Eat That Frog!",
    author: "Brian Tracy",
    img: "https://images-eu.ssl-images-amazon.com/images/I/61ZNAnIrwwL._AC_UL604_SR200,200_.jpg",
  },
];

// stateless functional component
// always return JSX
// JSX rules
// return a single element
// div/section/article/Fragment
// fragment -- <React.Fragment> </React.Fragment> or simply <> </>
// className instead of class
// close every element
// format

// objects cannot be rendered but arrays can
// each child in a list should have an unique key prop
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        //const { title, author, img } = book;
        return (
          // <Book key={book.id} title={title} author={author} img={img}>
          <Book key={book.id} {...book}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni a
              hic ad libero voluptatem laboriosam deserunt error tempore,
              cupiditate perferendis.
            </p>
          </Book>
        );
      })}
    </section>
  );
}

// props -- an object containing all properties passed to another component
// child props -- anything that is passed between the opening and closing tag of a component
const Book = (props) => {
  console.log(props);
  const { title, author, img, children } = props;
  return (
    <article className="book">
      <img src={img} alt="Ikigai" />
      <h2>{title}</h2>
      <h3>{author}</h3>
      {children}
    </article>
  );
};

// const Image = () => {
//   return (
//     <img
//       src="https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR200,200_.jpg"
//       alt="Ikigai"
//     />
//   );
// };

// const Title = () => {
//   return <h2>Do Epic Shit</h2>;
// };

// // JS in JSX, write it in curly braces
// // specify styles just as another JS object
// const Author = () => {
//   return (
//     <h3
//       style={{
//         fontSize: "1.6rem",
//       }}
//     >
//       Ankur Warikoo
//     </h3>
//   );
// };

// Nested components
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => {
//   return <h2>John Doe</h2>;
// };

// const Message = () => {
//   return <p>This is my message</p>;
// };

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

ReactDom.render(<BookList />, document.getElementById("root"));
