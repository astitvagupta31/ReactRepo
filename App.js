import React from "react";
import ReactDOM  from "react-dom/client";

// React Element 

// const heading = React.createElement("h1",{id:"heading"},"Hello Guys, I am Astitva Gupta");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

// JSX in multiple line then () brackets is needed



// REACT FUNCTIONAL COMPONENT 

// const HeadingComponen1 = () => { 
//     return <h1 className="heading">Hello Boys Astitva Is Here</h1>;
// }

// const HeadingComponen2 = () => <h1 className="heading">Hello Boys Astitva Is Here</h1>;

// Both above Functional components are same

const Title = () =>  (
        <h1 className="head" tabIndex="5">
          Hey 
        </h1>
  );


const HeadingComponent = () => (
        <div id="container">
              <Title></Title>
              <Title />
          <h1 className="heading">Functional Component</h1>
        </div>
);

const title = (
        <h1 className="head" tabIndex="5">
        Nameste React  
      </h1> 
)

const HeadingComponent1 = () => (
        <div id="container">
             {title}
          <h1 className="heading">Functional Component</h1>
        </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);


//  root.render(jsxHeading);
// console.log(jsxHeading) --> Gives js object



