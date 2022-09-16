import React from "react";
import MainLayout from "../layout/MainLayout";
import Image from "next/image";

import mypic2 from "../public/picture/mypic2.jpg"

export default function Contact(){
    return(
        <MainLayout>
             <div className="middle3 box-transparent">
                <p className="title title1 text-center" style={{ fontweight: "bold"}}>
                    CONTACT ME
                </p>
                <div className="contact d-flex ms-5 ">
                    <span>
                        <Image className="d-block" src={mypic2} width="250px" height="250px"
                        style={{borderradius: "50px" ,  boxshadow: "5px 5px 20px black"}}/>
                    </span>
                    
                    <table className="t1">
                    <tr>
                        <td className="td2">Name</td>
                        <td className="td1">Pearl Kurokami</td>
                    </tr>
                    <tr>
                        <td className="td2">Nickname</td>
                        <td className="td1">Sakura</td>
                    </tr>
                    <tr>
                        <td className="td2">Address</td>
                        <td className="td1">
                        34/250 M.Passorn2 T.Klongsam <br />A.Klongluang J.Prathumtani
                        12120
                        </td>
                    </tr>
                    <tr>
                        <td className="td2">Facebook</td>
                        <td>
                        <a
                            href="https://www.facebook.com/june.sakura.9/"
                            className="facebook td1 text-decoration-none"
                            >Pearl Kurokami</a
                        >
                        </td>
                    </tr>
                    <tr>
                        <td className="td2">Email</td>
                        <td>
                        <a
                            href="mailto: pearl_cmu.ac.th"
                            className="td1 email text-decoration-none"
                            >pearl_cmu.ac.th</a
                        >
                        </td>
                    </tr>
                    <tr>
                        <td className="td2">Phone</td>
                        <td className="td1">094-081-9174</td>
                    </tr>

                    <tr />
                    </table>
                </div>
            </div>
        </MainLayout>
    );
}