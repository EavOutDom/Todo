import React from "react";

let now = new Date();
let year = now.getFullYear();
const Footer = () => {
    return (
        <div className="fixed text-center bottom-0 w-full text-gray-500 font-semibold">
            <p>COPYRIGHT ©{year}</p>
        </div>
    );
};

export default Footer;
