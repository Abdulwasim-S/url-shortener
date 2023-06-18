import React, { useState } from "react";

const ActivatePage = () => {
  const [show,setShow]=useState("Please wait...")
  async function activation() {
    const activationInfo={
      email: localStorage["url-short-email"]
    }
    const response = await fetch(
      "https://short-url-backend.vercel.app/activation",
      {
        method: "PUT",
        body: JSON.stringify(activationInfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setShow(data.message)
  }
  activation();
  return <div>{show}</div>;
};

export default ActivatePage;