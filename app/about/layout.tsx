import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About",
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <ul>
        <li>
          <Link href={"/about/contacts"}>Contacts</Link>
        </li>
        <li>
          <Link href={"/about/team"}>Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default AboutLayout;
