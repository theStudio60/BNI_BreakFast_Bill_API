import { useNavigate } from "react-router-dom";
import cookies from "js-cookie";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import React from "react";

const REACT_APP_SERVER_NAME = "http://gz2jcawnza.preview.infomaniak.website";
const REACT_APP_SERVER_FRONT_NAME = "http://localhost:3001";

export default function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);
  const association = useSelector((state) => state.user.data.association);

  function logout() {
    cookies.remove("APICOOKIE", { sameSite: "strict" });
    navigate("/login");
  }

  return (
    <>
      {/*       <a href={REACT_APP_SERVER_FRONT_NAME} className="header__image">
        <img
          src={REACT_APP_SERVER_NAME + "/img/logos/" + association.logoImg}
          alt="logo"
        />
      </a> */}
      <div className="header__nav">
        <button>
          <FaUserAlt />
          {" Hi " + user.firstname}
        </button>
        <button>
          <BsFillGearFill /> Admin
        </button>
        <button onClick={logout}>
          <FiLogOut /> Logout
        </button>
      </div>
    </>
  );
}
