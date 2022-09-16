import React from "react";
import Image from "next/image";

import lang from "../public/picture/lang.jpg";
import programming from "../public/picture/programming.jpg";
import frontend from "../public/picture/frontend.jpg";
import mypic from "../public/picture/mypic.jpg";
import MainLayout from "../layout/MainLayout";

export default function Home() {
    const imgStyle = {
        objectFit: 'cover',
        mergintop : '20px'
    };

  return (
    <MainLayout>
      <div className="middle d-flex">
        <span className="mt-3">
         <Image src={mypic} className="mypic" style={imgStyle} height={300} width={290} />
        </span>
           
        
        <span>
            <p1 className="title title1"> WELCOME TO <br />{"PEARL KUROKAMI"} WEB </p1>
            <p2 className="descrip1">
            Hello ,my name is Pearl Kurokami. Now I studied at Chiang Mai University , Computer Engineering.
            <br/>I interested in Front-end. I&apos;m a newbie programmer , pleased to meet everyone!
            <br/>I have a lot of hobbie for instant singing , playing music instruments , drawing , reading a boook.
            </p2>
        </span>
      </div>
      <div className="bottom">
        <p className="title title2 justify-content-center">MY SKILL</p>
        <div className="d-flex gap-5">
          <span>
            <div className="card">
              <Image src={programming} className="card-img-top" />
              <div className="card-body">
                <p>BACK-END</p>
                <p className="card-text ms-2">
                  C++ <br/> Python <br /> A litte bit of JAVA
                </p>
              </div>
            </div>
          </span>
          <span>
            <div className="card">
              <Image src={frontend} className="card-img-top" />
              <div className="card-body">
                <p>FRONT-END</p>
                <p className="card-text ms-2">
                  I love coing website by HTML <br />
                  and CSS . I interested in Front-end.
                </p>
              </div>
            </div>
          </span>
          <span>
            <div className="card">
              <Image src={lang} className="card-img-top" />
              <div className="card-body">
                <p>LANGUAGE</p>
                <p className="card-text ms-2">
                  I know 3 languages : Thai , English and Japanese and can read
                  a little bit of Korean.
                </p>
              </div>
            </div>
          </span>
        </div>
      </div>
    </MainLayout>
  );
}
