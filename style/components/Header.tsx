import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "darkgray",

        padding: "20px 0",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <li>
          <Link
            style={{
              margin: "0 20px",
              color: "white",
              textDecoration: "none",
            }}
            href={"/"}
          >
            Home
          </Link>{" "}
        </li>
        <li>
          <Link
            style={{
              margin: "0 20px",
              color: "white",
              textDecoration: "none",
            }}
            href={"/blog"}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            style={{
              margin: "0 20px",
              color: "white",
              textDecoration: "none",
            }}
            href={"/about"}
          >
            About
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
