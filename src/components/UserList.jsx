/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Fragment } from "react";

{
  /*----- Task 3.1 -----*/
}

const UserList = ({ userList, removeItem }) => {
  return (
    <Fragment>
      <div>
        {userList.slice(0, 3).map((data, index) => (
          <div key={data.id}>
            <h3>{data.title}</h3>

            <button onClick={() => removeItem(index)}>Delete</button>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default UserList;
