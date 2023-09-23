"use client";
import React from "react";
import { use } from "react";
import { useEffect } from "react";


const HomeComponent = ({ email }) => {
 
  useEffect(() => {
    console.log("Testing " + email);
  });
  return <h2>{email}</h2>;
};
export default HomeComponent;