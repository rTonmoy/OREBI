import React, { useState } from 'react'
import { createContext } from 'react'
import axios from "axios";
import { useEffect } from "react";
let ApiData = createContext()

const ContextApi = ({children}) => {

  let [info, setInfo] = useState([])
  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setInfo(response.data.products);
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ApiData.Provider value={info}>
        {children}
    </ApiData.Provider>
  )
}

export  {ContextApi, ApiData}