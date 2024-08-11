import React from "react";
import '../Component-Stylings/Home.scss'
import logo from '../resource-pics/CCafeCompass.png'

export default function Home() {
  return (
    <div className="container">
      <div className="welcome"><p>Welcome to</p><img src={ logo } alt="" /></div>
      <div className="content">Main Content</div>
      <div className="bloggers">Bloggers Content</div>
      <div className="cafe">Cafe Content</div>

    </div>
  );
}
