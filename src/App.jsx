/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import mainLogo from "./assets/img/d416a902652e9634d786e81d004b9c84.png";
import { fetchUsers } from "./utls/api/Api";
import Accordion from "./components/Accordion/Accordion";

function App() {
  {
    /*>>> Task 3.1 >>>*/
  }
  const [userList, setUserList] = useState([]);

  // remove item from userList
  const removeItem = (indexToRemove) => {
    setUserList((prevItems) =>
      prevItems.filter((item, index) => index !== indexToRemove)
    );
  };

  useEffect(() => {
    (async () => {
      const response = await fetchUsers();
      setUserList(response);
    })();
  }, []);
  {
    /*<<< Task 3.1 <<<*/
  }
  return (
    <>
      {/*>>> Task 3.2 >>>*/}
      <div className="image-container">
        <img src={mainLogo} alt="" id="img" />
      </div>

      <Accordion />
      {/*<<< Task 3.2 <<<*/}

      {/*----- Task 3.1 -----*/}
      {/* <UserList userList={userList} removeItem={removeItem}/> */}
    </>
  );
}

export default App;
