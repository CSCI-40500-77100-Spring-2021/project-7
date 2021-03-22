import React, { useState, useRef, useEffect } from "react";
import "./Watchlist.css";
import List from './List'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'listwatchlist.list'


const Watchlist = ({keyword}) => {
    const [list,setwatchlist] = useState([])
    const TickerName = useRef();

    useEffect(() => {
        const storedTickers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storedTickers) setwatchlist(storedTickers)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list))
    }, [list])

    function toggle(id) {
        const newTicker = [...list]
        const lists = newTicker.find(lists => lists.id === id)
        lists.complete = !lists.complete
        setwatchlist(newTicker)
        
    }


    function  handledAdd(e) {
        const name = TickerName.current.value
        if (name === '') return
        setwatchlist(prevwatchlist => {
            return [...prevwatchlist, {id: uuidv4(), name: name, complete: false}]
        })
        TickerName.current.value = null
    }
    function handleRemove() {
        const newTicker = list.filter(lists => !lists.complete)
        setwatchlist(newTicker)
    }

    return(  
        <>
        <List list={list} toggle={toggle}/> 
        <input ref={TickerName}type ="text" />
        <button onClick={handledAdd}>ADD</button>
        <button onClick={handleRemove}>REMOVE</button>
        <div> {list.filter(lists => !lists.complete).length} Ticker in Watchlist</div>
        </>
    );
};

export default Watchlist;