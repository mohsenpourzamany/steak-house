import React from "react";
import AboutImage from "../assests/AboutImage.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, mea civibus senserit conceptam id. Quot
          aperiri debitis ne his. Ipsum nulla mucius eu nec. Pri fugit
          deseruisse ad. Ei vis vidit velit, no mea modo eruditi suscipiantur.
          Sed percipit philosophia ei, has decore splendide cotidieque eu. No
          vel stet maluisset mnesarchum, te duo harum sententiae accommodare.
          Feugait accumsan torquatos eu nam. No nibh liber exerci sit. Eu postea
          numquam usu, falli philosophia ei vix, et melius sententiae
          philosophia sea. Omnesque appetere pri an. Sea ea munere labores, no
          vim postea dicunt persequeris. Placerat interpretaris et has, an
          salutandi interesset has. Usu viderer detracto no. Eum ad postulant
          eloquentiam vituperatoribus, et quo alii habeo partem. Ea usu semper
          detraxit petentium, movet eruditi veritus pro in. Eirmod elaboraret
          interpretaris nam ut, ad vel prima facer. Usu denique salutandi ne. In
          vel clita propriae.
        </p>
      </div>
    </div>
  );
}

export default About;
