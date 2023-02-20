import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function ListUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://localhost:8888/api/users/").then(function (response) {
      console.log(response.data);
      console.log(typeof response);
      setUsers(response.data);
      console.log(typeof response.data);
    });
  }

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:8888/api/user/${id}/delete`)
      .then(function (response) {
        console.log(response.data);
        getUsers();
      });
  };

  return (
    <div>
      <h1>Edit List</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* <tbody>
          {users.map((user, key) => (
            <tr className="table-body" key={key}>
              <td className="table-tr">{user.id}</td>
              <td className="table-tr">{user.name}</td>
              <td className="table-tr">{user.email}</td>
              <td>
                <Link
                  to={`user/${user.id}/edit`}
                  style={{ marginRight: "10px" }}
                >
                  Edit
                </Link>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
}
