import React from "react";
import Image from "next/image";
import MainLayout from "../layout/MainLayout";

import drawing from "../public/picture/drawing.jpg";
import graphic from "../public/picture/graphic.png";

export default function Exp() {
  return (
    <MainLayout>
      <div className="bottom botttom2">
        <div className="d-flex gap-5" style={{ justifycontent: "center" }}>
          <p className="title title1">
            OTHER <br />
            EXPERIENCE
          </p>

          <span>
            <div className="card2">
              <Image src={drawing} className="other-ex" />
              <div className="intro">
                <h1 className="title title3">Drawing</h1>
                <p className="inner">
                  Charater design for ycc camp. <br />
                  Drawing for commission.
                </p>
              </div>
            </div>
          </span>

          <span>
            <div className="card2">
              <Image src={graphic} className="other-ex" />
              <div className="intro">
                <h1 className="title title3">Grapic design</h1>
                <p className="inner">
                  Do poster , illustration vector design and web design.
                </p>
              </div>
            </div>
          </span>
        </div>
      </div>
    </MainLayout>
  );
}
