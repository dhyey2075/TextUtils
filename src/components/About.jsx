import React from "react";
import Navbar from './Navbar.jsx'
const About = () => {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className="container">
      <h1 className="my-4">About TextUtils</h1>
      <p>
        TextUtils is a simple text utility website designed to help you edit
        and manipulate text easily. Whether you need to convert text to
        uppercase, make text title case, remove extra spaces, or copy text to
        clipboard, TextUtils has got you covered.
      </p>
      <p>
        With a user-friendly interface and a variety of text editing options,
        TextUtils makes it convenient for you to perform common text operations
        quickly and efficiently.
      </p>
      <p>
        TextUtils is built using React and Bootstrap, ensuring a smooth and
        responsive experience across different devices.
      </p>
      <h4 className="mt-4">Features:</h4>
      <ul>
        <li>Convert text to uppercase</li>
        <li>Convert text to title case</li>
        <li>Remove extra spaces from text</li>
        <li>Copy text to clipboard</li>
        <li>Enable dark mode for easier reading</li>
      </ul>
      <p>
        We hope you find TextUtils helpful for your text editing needs. Feel
        free to explore the various features and let us know if you have any
        feedback or suggestions for improvement.
      </p>
      <p>
        If you encounter any issues while using TextUtils or have any questions,
        please don't hesitate to contact us at support@textutils.com.
      </p>
    </div>
    </>
  );
};

export default About;
