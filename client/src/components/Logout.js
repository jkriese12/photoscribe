import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as actionType from "../constants/actionTypes";
import { FaSignOutAlt } from "react-icons/fa";
import "./styles/Logout.css";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/");
  };

  return (
    <Link to="/">
      <div className="logout-button" onClick={logout}>
        Logout <FaSignOutAlt onClick={logout} />
      </div>
    </Link>
  );
};

export default Logout;
