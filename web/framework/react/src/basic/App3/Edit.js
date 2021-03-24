/*** 演示 ‘需要清理的副作用’ ***/
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
export default function () {
  useEffect(() => {
    return () =>{
      console.log("Unload Edit");
    }
  }, []);

  return (
    <div className="app-edit">
      <h1>Edit 1</h1>
      <h1>Edit 2</h1>
      <h1>Edit 3</h1>
   </div>
  );
}