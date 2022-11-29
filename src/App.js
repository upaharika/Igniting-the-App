import { createElement } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

//heading using createElement
//need to pass Key prop if it is array or Array method
const heading = createElement("div", { className: "title" }, [
  createElement(
    "h1",
    { key: 101, className: "title" },
    "h1 using createElement"
  ),
  createElement(
    "h2",
    { key: 102, className: "title" },
    "h2 using createElement"
  ),
  createElement(
    "h3",
    { key: 103, className: "title" },
    "h3 using createElement"
  ),
]);

//heading using JSX
//to write any JS code use {}
const num = 3;
const jsxHeading = (
  <div className="title">
    <h1>h1 using JSX</h1>
    <h2>h2 using JSX</h2>
    <h3>h{num} using JSX</h3>
  </div>
);

const TitleComponent = () => <h1>h1 using Functional Component</h1>;
const HeadingComponent = () => {
  return (
    <>
      <TitleComponent />
      <h2>h2 using Functional Component</h2>
      <h3>he using Functional Component</h3>
    </>
  );
};

const NavbarComponent = () => {
  return (
    <div className="navbar-container">
      <div id="logo">
        <img
          src="https://namastedev.com/namaste-react-bootcamp/assets/img/small-logo.png"
          alt="logo"
        />
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          autoFocus
        />
        <span className="icon">🔍</span>
      </div>

      <div className="user-icon">
        <img
          src="https://img.icons8.com/cotton/512/gender-neutral-user.png"
          alt="user icon"
        />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <NavbarComponent />
    {heading}
    {jsxHeading}
    <HeadingComponent />
  </div>
);
