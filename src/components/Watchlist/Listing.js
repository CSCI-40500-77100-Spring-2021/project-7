import React from 'react'

export default function Listing({lists, toggle}) {
    function handletodoClick(params) {
        toggle(lists.id)
    }
    return (
        <div>    
            <label>
                <input type="checkbox" checked={lists.complete} onChange={handletodoClick} />
            </label>            
          {lists.name}   
        </div>
    )
}
