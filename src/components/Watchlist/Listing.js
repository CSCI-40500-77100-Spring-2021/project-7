import React, { useEffect, useState } from "react";


export default function Listing({lists, toggle}) {
    function handletodoClick(params) {
        toggle(lists.id)
    }
    let priceUrl =
    "https://api.polygon.io/v1/open-close/" +
    //TICKER MUST BE IN UPPERCASE FOR POLYGON API
    lists.name.toUpperCase() +
    "/2021-03-23?unadjusted=true&apiKey=yh8YgoEetmowqr2anPpzJhF_PpAU_Eio";

    return (
        <div>    
            <label>
                <input type="checkbox" checked={lists.complete} onChange={handletodoClick} />
                {lists.name.toUpperCase()}  
            </label>  
                    
        </div>
    )
}
