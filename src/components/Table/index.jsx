import React from "react";
import "./Table.scss";
import Plus from "../../assets/icon/table-icon.png";
import { Link } from "react-router-dom";

import Cookies from "js-cookie";
const Table = (props) => {
  const userId = Cookies.get("id");
  return (
    <table class="table">
      <thead class="table-light">
        <tr>
          <th scope="col">Nama</th>
          <th scope="col">Email</th>
          <th scope="col">Jenis Kelamin</th>
          <th scope="col">Thread</th>
          <th scope="col">Action</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((user, index) => {
          return (
            <tr>
              <td>
                <div className="d-flex">
                  <img
                    src={user.image}
                    width={35}
                    height={35}
                    className="rounded-circle ms-4 me-2"
                    alt=""
                  />
                  <div>{user.username}</div>
                </div>
              </td>
              <td className="text-email">{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.total_threads}</td>

              <td>
                <Link to={userId == user.id ? "/profile" : `/user/${user.id}`}>
                  <img src={Plus} width={35} alt="" />
                </Link>
              </td>
              <td>
                <div className="status">{user.roles}</div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
