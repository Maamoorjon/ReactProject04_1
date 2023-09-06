import Component from "./component/Component.js";
import Profile from "./component/Profile";
export default function App() {
  const profile = [
    { name: "Ma'murjon", age: 43, country: "Uzbekistan", color: "" },
    { name: "Kumie", age: 72, country: "Japan", color: "red" }
  ];
  return (
    <div className="App">
      <Component title="Childrenとは">
        <Profile {...profile[0]} />
        <Profile {...profile[1]} />
      </Component>
    </div>
  );
}
