import React from 'react'
import Listing from './Listing'

export default function List({list, toggle}) {
  return (
      list.map(lists => {
        return <Listing key={lists.id} toggle={toggle} lists={lists} />
    })
  )
}