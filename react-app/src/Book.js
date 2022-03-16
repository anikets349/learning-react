import React from "react";

const Book = (props) => {
  // console.log(props);
  const { title, author, img, children } = props;
  const clickHandler = (e) => {
    // console.log(e);
    console.log(e.target);
    console.log(title);
  };
  const ComplexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="Ikigai" />
      <h2>{title}</h2>
      <h3>{author}</h3>
      {children}
      <button type="button" onClick={clickHandler}>
        Click Me!
      </button>
      <button type="button" onClick={() => ComplexExample(author)}>
        Complex Example
      </button>
    </article>
  );
};

export default Book;
