import React, { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import HeadPage from "./HeadPage";

const URLPage = () => {
  const [urlList, setUrlList] = useState([]);
  useEffect(() => {
    async function getUrlList() {
      try {
        const response = await fetch(
          "https://short-url-backend.vercel.app/shorturl",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              email: localStorage["url-short-email"],
              "x-auth-token": localStorage["url-short-token"],
            },
          }
        );
        const data = await response.json();
        if (data.message === "shorturls") {
          setUrlList(data.shortUrls);
        } else {
          setUrlList([]);
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getUrlList();
  }, []);

  return (
    <div>
      <HeadPage />
      <div className="container-fluid" style={{ width: "100%" }}>
        <h1>Shorted URL List</h1>
        <NavLink className="btn btn-success m-2" to="/createurlpage">
          click to create new short url
        </NavLink>
        <div
          className="row p-3 justify-content-between"
          style={{ width: "100%" }}
        >
          {urlList.length === 0 && <h1>No Url have created</h1>}
          {urlList.length > 0 &&
            urlList.map((ele, idx) => (
              <div className="col-md-3 mb-3" style={{ height: "100%" }}>
                <div class="card pt-3">
                  <small>Name :</small>
                  <h3>{ele.urlName}</h3>
                  <small>URL :</small>
                  <NavLink
                    className="card-url text-primary"
                    to={`https://short-url-backend.vercel.app/${ele.short_url}`}
                  >
                    https://short-url-backend.vercel.app/{ele.short_url}
                  </NavLink>
                  <p>Click count : {ele.click_count}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default URLPage;
