import React, { useContext } from "react";
import MyContext from "./MyContext"; // Assuming you have a custom context defined in a separate file

const MyComponent = () => {
  const contextValue = useContext(MyContext);

  // Rest of your component code
  return <div>{/* JSX elements and logic */}</div>;
};

export default MyComponent;
