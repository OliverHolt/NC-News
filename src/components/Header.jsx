import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Header = () => {
  const userValue = useContext(UserContext);

  const selectUser = (event) => {
    userValue.setUser("jessjelly");
    event.target.innerHTML = "Default user";
  };

  return (
    <div className="header">
      <h1 id="title">Northcoders News</h1>
      <button
        id="login"
        onClick={(event) => {
          selectUser(event);
        }}
      >
        Login as default user
      </button>
    </div>
  );
};

export default Header;
