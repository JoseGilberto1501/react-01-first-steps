import React from "react";

const MyComponent = () => {

    const name = "Jose";
    const web = "www.facebook.com";

    let user = {
        name: "Jose",
        lastName: "Zuniga Vargas",
        web: "www.facebook.com"
    };

  return (
    <div className="my-component">
      <hr />
      <h2>Created Component</h2>
      <h3>User Information:</h3>
      <ul>
          <li>Name: <strong>{user.name}</strong></li>
          <li>Last Name: <strong>{user.lastName}</strong></li>
          <li>Web: <strong>{user.web}</strong></li>
      </ul>
      <p>This is my first component</p>
      <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
      </ul>
    </div>
  );
};

export default MyComponent;
