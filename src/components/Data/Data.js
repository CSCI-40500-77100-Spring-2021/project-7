import axios from "axios";
import React, { useEffect, useState } from "react";

function GetData({ ticker }) {
  console.log("data ticker: ", ticker);

  let url =
    "https://api.polygon.io/v1/meta/symbols/" +
    //TICKER MUST BE IN UPPERCASE FOR POLYGON API
    ticker.toUpperCase() +
    "/company?&apiKey=yh8YgoEetmowqr2anPpzJhF_PpAU_Eio";

  console.log("data url: ", url);

  console.log("data table", ticker);

  let priceUrl =
    "https://api.polygon.io/v1/open-close/" +
    //TICKER MUST BE IN UPPERCASE FOR POLYGON API
    ticker.toUpperCase() +
    "/2021-03-19?unadjusted=true&apiKey=yh8YgoEetmowqr2anPpzJhF_PpAU_Eio";

  const [data, setData] = useState(null);

  let content = null;
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, [url]);

  if (data) {
    content = (
      <div>
        <img src={data.logo} alt="company logo" />
        <table border="1">
          <tbody>
            <tr>
              <td>
                <h2>Company Name: </h2>
              </td>
              <td>
                <p> {data.name} </p>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Industry: </h2>
              </td>
              <td>
                <p> {data.industry} </p>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Description: </h2>
              </td>
              <td>
                <p> {data.description} </p>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Website: </h2>
              </td>
              <td>
                <p> {data.url} </p>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Country: </h2>
              </td>
              <td>
                <p> {data.country} </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default GetData;
