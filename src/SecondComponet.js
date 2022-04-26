import React from "react";

export const SecondComponet = () => {

  const books = ["Harry Potter","Games of thrones","Clean code"];
  //const books = [];

  return (
    <div className="second-component">
      <h1>List Books</h1>
      {books.length >= 1 ? (
        <ul>
          {books.map((book, index) => {
            return <li key={index}>{book}</li>;
          })}
        </ul>
      ) : (
        <p>Don't exists books</p>
      )}
    </div>
  );
};
