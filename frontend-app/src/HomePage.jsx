import React from "react";

export const HomePage = (props) => {
  return (
    <div>
      <h1>Welcome to your Home Page!</h1>
      <p>Your email is: {props.homeProp}</p>
    </div>
  );
};
