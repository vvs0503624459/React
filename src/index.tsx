import React from "react";
import ReactDOM from "react-dom/client";

const title = React.createElement("h1", { id: "title" }, "Hello React");

//
const h1 = <h1 id="title-2">Hello React.js</h1>;
const content = (
  <div>
    <p className="text">Some React.js</p>
    <p className="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
      pariatur unde. Assumenda dolorem iusto modi rem amet debitis laborum
      tenetur quae, quibusdam reprehenderit dolores! Ducimus est molestiae harum
      incidunt quas!
    </p>
    <p className="text">Some React.js</p>
  </div>
);

// function App() {
//   return (
//     <div>
//       <p className="text">Some React.js</p>
//       <p className="text">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
//         pariatur unde. Assumenda dolorem iusto modi rem amet debitis laborum
//         tenetur quae, quibusdam reprehenderit dolores! Ducimus est molestiae
//         harum incidunt quas!
//       </p>
//     </div>
//   );
// }
const App = () => {
  return (
    <div>
      <p className="text">Some React.js</p>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        pariatur unde. Assumenda dolorem iusto modi rem amet debitis laborum
        tenetur quae, quibusdam reprehenderit dolores! Ducimus est molestiae
        harum incidunt quas!
      </p>
    </div>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* {h1},{title},{content} */} <App />
  </React.StrictMode>
);
