import React from "react";
import "./App.css";

import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "http://localhost:7777/api/trip"

function App() {
  return (
    <>
      <div class="style-font">
        <header class="text-center">
          <h1 className="font_header">เที่ยวไหนดี</h1>
          <input
            class="style-font text-center"
            type="text"
            name=""
            placeholder="หาที่เที่ยวแล้วไปกัน..."
          />
        </header>

        <div class="grid">
          <div class="item">
            <div class="content">
              <p>11111</p>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <p>22222</p>
            </div>
          </div>
        </div>
      
      

      </div>
    </>
  );
}

export default App;
