import "./Component.css";
import Profile from "./Profile.js";

const Component = ({ title, children }) => {
  return (
    <div className={`component`}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Component;
