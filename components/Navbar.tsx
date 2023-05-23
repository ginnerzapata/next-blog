import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../lib/contex";

export default function Navbar() {
  const { user, username } = useContext(UserContext);
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button>FEED</button>
          </Link>
        </li>
        {/* user is signed in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href={`/admin`}>
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user.photoUrl} alt="user image" />
              </Link>
            </li>
            <li></li>
          </>
        )}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
