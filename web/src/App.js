import React from "react";
import "./App.css";

import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = `https://wnmytrip.herokuapp.com/api/trip`;

function App() {
  const [trips, setTrips] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    //
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (keyword == "") {
        axios.get(`${baseURL}`).then((response) => {
          setTrips(response.data);
        });
      } else if (keyword != "") {
        axios.get(`${baseURL}/keyword/${keyword}`).then((response) => {
          if (response.data.length > 0) {
            setTrips(response.data);
          } else if (response.data.length == 0) {
            alert("No trip found");
          }
        });
      }
    }
  };

  return (
    <>
      <div className="style-font">
        <header className="text-center">
          <h1 className="font_header">เที่ยวไหนดี</h1>
          <input
            onKeyPress={handleKeyPress}
            value={keyword}
            onChange={(event) => {
              setKeyword(event.target.value);
            }}
            className="style-font text-center"
            type="text"
            name=""
            placeholder="หาที่เที่ยวแล้วไปกัน..."
          />
        </header>
        {/* Loop for request api from search */}
        {trips.map((element) => {
          return (
            <>
              <div className="grid mb-3" key={element.eid}>
                <div className="item">
                  <div className="content">
                    <img
                      className="crop shadow-lg"
                      src={element.photos[0]}
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="item">
                  <div className="content ">
                    <h3 className="font_topic text-left truncate">
                      <a className="read-more topic-link" href={element.url}>
                        {element.title}
                      </a>
                    </h3>
                    <div className="font_detail text-left">
                      <p className="truncate-3 ">{element.description}</p>
                      พร้อมแล้วก็ไปเลย ช้าหมดอดมันส์กับเพื่อน ....{" "}
                      <a className="read-more" href={element.url}>
                        อ่านต่อ
                      </a>
                    </div>
                    <div className="font_detail text-left">
                      <p className="text-left font_tags">
                        หมวด - <a href="#">{element.tags[0]}</a>{" "}
                        <a href="#">{element.tags[1]}</a> และ{" "}
                        <a href="#">{element.tags[2]}</a>
                      </p>
                    </div>
                    <div className="grid-img">
                      <div className="item">
                        <img
                          className="crop-square shadow-lg"
                          src={element.photos[1]}
                          alt=""
                        ></img>
                      </div>
                      <div className="item">
                        <img
                          className="crop-square shadow-lg"
                          src={element.photos[2]}
                          alt=""
                        ></img>
                      </div>
                      <div className="item">
                        <img
                          className="crop-square shadow-lg"
                          src={element.photos[3]}
                          alt=""
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
