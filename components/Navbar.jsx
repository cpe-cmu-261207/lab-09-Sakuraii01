import Image from 'next/image'
import Link from "next/link";
import React from "react";

import mypicture from "../public/picture/mypicture.jpg"

export function Navbar() {
  return( 
    <div>
      <div className="d-flex align-items-center ms-5">
         <Image
          src= {mypicture}
          width="50px"
          height="50px"
          style={
            { objectfit: "cover" ,
              margintop: "10px" ,
            }}
          className="rounded-circle"
        />
        <li>
          <Link href='/Home' >
            <a className="item text-decoration-none">HOME</a>
          </Link>
        </li>
        <li>
          <Link href='/Exp' >
          <a className="item text-decoration-none">EXPERIENCE</a>
          </Link>
        </li>
        <li>
          <Link href='/Contact' >
          <a className="item text-decoration-none">CONTACT</a>
          </Link>
        </li>
        <li>
          <Link href='/lab-07' >
          <a className="item text-decoration-none">TO DO LIST</a>
          </Link>
        </li>
        <hr />
      </div>
     
      {/* <Link href='/welcome'>
        Click to go to Google.com
      </Link> */}
    </div>
    );
}
