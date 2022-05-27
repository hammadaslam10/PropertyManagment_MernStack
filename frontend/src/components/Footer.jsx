import React from "react";
import "../Styling/Footer.css";
export const Footer = () => {
  return (
    <div id="footerdiv">
      <div className="left1">
        <p>support </p>
        <ul>
          <li>help center </li>
          <li>air cover</li>
          <li>safety information </li>
          <li>support people with disability</li>
          <li>cancellation options</li>
          <li>our covid-19 response </li>
          <li>report a neighbourhoood concern</li>
        </ul>
      </div>
      <div className="left2">
        <p>community</p>
        <ul>
          <li>diasaster housing relief </li>
          <li>support afghan refugees</li>
          <li>combat discrimination</li>
        </ul>
      </div>
      <div className="right1">
        <p>hosting </p>
        <ul>
          <li>Try hosting </li>
          <li>air covers</li>
          <li>explore hosting resources</li>
          <li>visit our communnity forum </li>
          <li>how to host reponsibly </li>
        </ul>
      </div>
      <div className="right2">
        <p>newsroom</p>
        <ul>
          <li>newsroom</li>
          <li>learn about features</li>
          <li> leeter for our founders </li>
          <li>careers</li>
          <li>investors</li>
        </ul>
      </div>
    </div>
  );
};
