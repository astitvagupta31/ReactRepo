// ########## Lecture-1 ########## (Inception/Intro)

/*
<!-- Lecture-1 -Inception indexedDB.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Learning</title>
    <link rel="stylesheet" href="./index.css"></link>
</head>
<body>
    <div id="root">
        <h1>Astiiiiiiiiiii</h1>
    </div>
      
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- <script src="App.js">
        // const header = document.createElement("h1");
        // header.innerHTML= "Weclome Guys";
        // const root = document.getElementById("root");
        // root.appendChild(header);
    </script> -->

    <script src="./App.js"></script>
</body>
</html> 

*/


// ########## Lecture-1 ########## (Inception/Intro)

/* 

<<<<<<<<<<<<<<< THEORY >>>>>>>>>>>>>>>>>>


Note ::    createElement("Tag",{"Attributes to Tags as object"},"Content/(Childrens)"); --> It creates a Javascript object 
           ReactElement=(Object) => HTML (Browser Understands) => rendering into the DOM it convert it into a html and puts up in to a DOM.
Note ::    createElement("Tag",{"Attributes to Tags as object"},"(This can be either a single child (Childern) or Array of different children)");    
           console.log(heading)   --> It will give the object which contains (props)
           render() : it replaces (React Element)/Javascript Object to html and putting it in the root (DOM) | It is replacing what is existing inside the root <div id="root"></div> 

-------->  React createElement => Object => HTMLElement(render)

--> Code : Creating h1 element inside react and render it on the page

 const heading = React.createElement("h1", {id: "heading"}, "Hello Astitva");
 const root = ReactDOM.createRoot(document.getElementById("root"))
 root.render(heading);

      --> Code : Creating Nested elements inside react and render it on the page as Html 

    <div id="parent">
        <div id="child">
             <h1> I am Astitva Gupta</h1>
        </div>
    </div>


 const parent = React.createElement("div",{id: "heading"},
 React.createElement("div",{id: "child"},
 React.createElement("h1",{},"I am Astitva Gupta")));

 const rootParent = ReactDOM.createRoot(document.getElementById("root"));
 rootParent.render(parent)
 console.log(parent)


--> Code : Creating Nested elements inside react and render it on the page as Html 
    
     <div id="parent">
        <div id="child">
             <h1> I am Astitva Gupta</h1>
             <h2> I am Front End Developer</h2>
        </div>
    </div>


 const parent = React.createElement("div",{id: "heading"},
 React.createElement("div",{id: "child"},
 [React.createElement("h1",{},"I am Astitva Gupta"),
 React.createElement("h2",{},"I am Frontend Developer")]));

 const rootParent = ReactDOM.createRoot(document.getElementById("root"));
 rootParent.render(parent)
 console.log(parent)


        
-->  Code : Creating Nested elements inside react and render it on the page as Html 
    <div id="parent">
        <div id="child1">
             <h1> I am Astitva Gupta</h1>
             <h2> I am Front End Developer</h2>
        </div>

        <div id="child2">
             <h1> I am Astitva Gupta</h1>
             <h2> I am Front End Developer</h2>
        </div>
    </div>
   

 const parent = React.createElement("div",{id: "heading"},
 [
 React.createElement("div",{id: "child1"},
 [React.createElement("h1",{},"I am Astitva Gupta"),
 React.createElement("h2",{},"I am Frontend Developer")])
 ],
 React.createElement("div",{id: "child2"},
 [React.createElement("h1",{},"I am Astitva Gupta"),
 React.createElement("h2",{},"I am Frontend Developer")])
 );

 const rootParent = ReactDOM.createRoot(document.getElementById("root"));
 rootParent.render(parent)
 console.log(parent)

--> Note :: Above code is too untidy and messy for the simple html structure that's why we use "JSX" to create Tags */



//        ########## Lecture-2 ########## (Igniting Our App / Large Scale Application)

/*
<!-- Lecture-2 -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
    <link rel="stylesheet" href="./index.css"></link>
</head>
<body>
    <div id="root">
        <h1>Astii</h1>
    </div>
      
    <script type="module" src="./App.js"></script> 
</body>
</html>
*/

/*
import React from "react";
import ReactDOM  from "react-dom/client";

const parent = React.createElement("div",{id: "heading"},
 [
 React.createElement("div",{id: "child1"},
 [React.createElement("h1",{},"I am Astitva Gupta "),
 React.createElement("h2",{},"I am Frontend Developer")])
 ],
 React.createElement("div",{id: "child2"},
 [React.createElement("h1",{},"I am Astitva Gupta"),
 React.createElement("h2",{},"I am Frontend Developer")])
 );

 const rootParent = ReactDOM.createRoot(document.getElementById("root"));
 rootParent.render(parent)
 console.log(parent)

*/

/* 

<<<<<<<<<<<<<<< THEORY >>>>>>>>>>>>>>>>>>


---> NPM -> It manages packages  (in packages.json file)
         -> Repository of all packages 
         -> It does not stand for "Node packages Manager"

   Note : "Package.json" is the configuration for npm. (It keeps the track of all the dependencies/Packages that we are using).
   Note : "Package-lock.json" -> It keeps the record of exact version of that dependency that is installed.
   Note : Node Modules -> It contains all the data of every Dependencies/Packages. (Collection of dependencies)
                       -> It fetches all the code of all the dependencies in to the system. (This makes it heavy)
   Note : Packages <==> Dependencies       

---> Bundler (Package) -> It helps to do bundle the application like (html,css,.js files together)
                       -> It makes app easy to go for production   
                       -> Examples :   Web-Pack , Parcel, wheat etc. 
     
        Note : Create React app is using web pack behind the scenes.  
        Command : npm install -D parcel      (-D --> Dev Dependency)

        Note : "parcel": "^2.12.0" ((Major.Minor.Patch))
        ---->  " ^ " -> Caret , " ~ " -> Tilde  

---> Two Types of dependencies : 1. Dev dependency 2. Normal Dependency

        --> Dev dependency : It is generally required for a development phase
        --> Normal Dependency : It is used in production also

---> Syntax: The syntax of the npm version looks like the following. (Major.Minor.Patch)

Tilde (~) notation:
The tilde (~) notation is employed to match the latest patch version while freezing the major and minor versions. This notation is useful for automatically accepting bug fixes, considering that patch updates primarily address bugs.

Example: The ~1.2.0 will update all the future patch updates. We have to write just ~1.2.0 and all the next patch update dependencies. For example, 1.2.1, 1.2.2, 1.2.5……………1.2.x.
Note: Patch updates are very small security changes in a package that is why the ~version is approximately equivalent to the version.

Caret (^) notation:
It automatically updates both minor and patch updates.

Example: The ^1.2.4 will update all the future Minor and patch updates, for example, ^1.2.4 will automatically change the dependency to 1.x.x if any update occurs. 
Using caret notation it is important to look at our code regularly if it is compatible with the newest version or not.

Note : -> Those dependencies can have it's own dependencies that is called "Transitive Dependency".
       -> Example : We have a dependency in our project known as "Parcel" but parcel also has dependencies in the node modules in it's json files
       -> One project might have more than one package.json, package-lock.json.

Note : -> If we want some files to not go in production then put it inside ".gitignore" file. 
       -> If we have "package.json" and "package-lock.json" then we can generate node modules.

--> "npx parcel index.html" to ignite our app (Host it on local server)
    - npx command -> executing a package

Note : 1. By using CDN incorporation in index.html file is not a good way to bring react, react dom into the project.
       2. Preferred way is by using npm.

Note : # Parcel  (Bundler)
           - Dev build
           - Local server
           - HMR = Hot Module Replacement (Automatically Refresh)  
           - File Watching Algorithm (written in c++)     
           - Faster builds (Cacheing)
           - Image Optimization
           - Minification 
           - Bundle all the files (Bundling)
           - Compresseing
           - Parcel is also using other libraries
           - Consistent Hashing (Read Hashing)
           - Code Splitting 
           - Differential Bundling - Support older browsers
           - Diagnostics (Beautiful errors)
           - Error Handling
           - Host it on HTTPS as well
           - Tree Shaking - Remove unused code
           - npx parcel index.html (build)
           - It creates a production build 

*/

/*

    ########## Lecture-3 ########## (FOUNDATION / FUNDAMENTAL CONCEPTS) (App.js)

import React from "react";
import ReactDOM  from "react-dom/client";

React Element 

const heading = React.createElement("h1",{id:"heading"},"Hello Guys, I am Astitva Gupta");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)

JSX in multiple line then () brackets is needed



REACT FUNCTIONAL COMPONENT 

const HeadingComponen1 = () => { 
    return <h1 className="heading">Hello Boys Astitva Is Here</h1>;
}

const HeadingComponen2 = () => <h1 className="heading">Hello Boys Astitva Is Here</h1>;

Both above Functional components are same

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


root.render(jsxHeading);
console.log(jsxHeading) --> Gives js object

*/






//        ########## Lecture-3 ########## (FOUNDATION / FUNDAMENTAL CONCEPTS)

/*

        <<<<<<<<<<<<<<< THEORY >>>>>>>>>>>>>>>>>>

Note : -> We can create different type of scripts to build our production ready app.
       -> Ex : In package.json =>  "scripts": {
                                       "start": "parcel index.html",
                                       "build": "parcel build index.html",
                                       "test": "jest"
                                     }

       -> npm start = npm run start 

Note : --> create element in React is equivalent to DOM element in html
       
## Note ## :: ==> JSX(Java Script Xml) allows us to write HTML in React. JSX makes it easier to write and add HTML in React 
              ==> JSX is not a HTML in javascript.
              ==> JSX is a HTML/XML like syntax
        --> JS engine understand only ECMA script      
        --> JSX Code is transpiled before it goes to the JS engine and JS engine can receive the code that JS engine understands

        Note : Transpiled --> Code is converted to the code that browsers can understand
            --> Parcel is transpiled the code by using Babel (JS Library)
            --> Babel job is to convert JSX to react Code that browsers understand (Compiler/Transpiler => Babel)
            --> JSX Babel transpiles it to => React.createElement => ReactEl;ement-JS Object => HTML Element(render)
            --> Attributes in JSX is in camelCasing (Ex -> testData,dataTest)
            --> JSX in multiple line then () brackets is needed
            --> Example : const jsxHeading = ( 
                                   <h1 className="head">
                                      Nameste React using JSX 
                                   </h1>);

----> VS CODE Extensions To be Installed -> 1. Prettier code formatter
                                         -> 2. Bracket Pair Colorization Toggler            
                                         -> ES lint
                                         -> Better Comments
    

<<<<<<<<<<------------------- REACT COMPONENT ------------------->>>>>>>>>  

--> Two Types Of Component In React Are :
                                     1. Class Based Component => OLD way of writing Code (It uses JS classes)
                                     2. Functional Component  => NEW way of writing Code (It uses JS Functions)

Note : -> Every Component name must start from a Capital letter (Ex-> Heading, Title)   
       -> A Functional Component is a JS function which return some JSX Element.
       -> Example : const HeadingComponent = () =>{
                            return <h1>Hello Boys Astitva Is Here</h1>;
                        }
       -> How to Render a Functional Component :
                   ---> const HeadingComponent = () => (
        <div id="container">
          <h1 className="heading">Hello Boys Astitva Is Here To Read Functional Component</h1>;
        </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

Note : -> In We can put any JS code in curly braces in functional components or JSX code
       -> Example : const number = 10000;

const HeadingComponent = () => (
        <div id="container">
              <h1>  {number} </h1>
          <h1 className="heading">Hello Boys Astitva Is Here To Read Functional Component</h1>
        </div>
)


------> JSX is take care of Injections Attack (JSX eccapes it/ Sanitize the data)
------> 
             


*/