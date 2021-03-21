import axios from "axios";
import React, { useEffect, useState } from "react";

function GetData (){

    const url = 'https://api.polygon.io/v1/meta/symbols/AAPL/company?&apiKey=yh8YgoEetmowqr2anPpzJhF_PpAU_Eio';
    const [data, setData] = useState(null)

    let content = null
    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data);
                setData(response.data)
        })
    }, [url])

    
    if(data){
        content = 
        <div>
            <img src={data.logo}/>
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
        
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default GetData