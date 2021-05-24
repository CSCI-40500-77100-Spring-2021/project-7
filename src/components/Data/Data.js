import axios from "axios";
import React, { useEffect, useState } from "react";

function GetData({ ticker }) {
  // console.log("data ticker: ", ticker);
  const [data, setData] = useState(null);


  let content = null;
  useEffect(() => {
    if (ticker) {
      let url =
        "https://api.polygon.io/v1/meta/symbols/" +
        //TICKER MUST BE IN UPPERCASE FOR POLYGON API
        ticker.toUpperCase() +
        "/company?&apiKey=yh8YgoEetmowqr2anPpzJhF_PpAU_Eio";

      let priceUrl =
        "https://api.polygon.io/v1/open-close/" +
        //TICKER MUST BE IN UPPERCASE FOR POLYGON API
        ticker.toUpperCase() +
        "/2021-03-19?unadjusted=true&apiKey=yh8YgoEetmowqr2anPpzJhF_PpAU_Eio";

      axios.get(url).then((response) => {
        console.log('here');
        setData(response.data);
      });
    }


  }, [ticker]);

  if (data) {
    console.log('there is some data here')
    content = (
      <div>
        <img src={data.logo} alt="company logo" />
        <table aria-label="table" border="1">
          <tbody>
            <tr>
              <td>
                <h2 aria-label="Company Name">Company Name: </h2>
              </td>
              <td>
                <p aria-label="name">{data.name}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Industry: </h2>
              </td>
              <td>
                <p aria-label="industry">{data.industry}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Description: </h2>
              </td>
              <td>
                <p aria-label="description">{data.description}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Website: </h2>
              </td>
              <td>
                <p aria-label="url">{data.url}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h2>Country: </h2>
              </td>
              <td>
                <p aria-label="country">{data.country}</p>
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
