import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineArrowDropDownCircle,MdFormatAlignLeft } from "react-icons/md";
import React, { useState,useEffect } from 'react'
import './Result.css'
import { Allotment } from "./MiniComponent/Allotment";
import axios from 'axios'
//const LOCAL_URL="http://localhost:3001/students"
//const CLG_URL="http://localhost:3001/colleges"
const HEROKU_URL="https://my-mockapp.herokuapp.com/students"
const HEROKU_URL_CLG="https://my-mockapp.herokuapp.com/colleges"
//const API_URL=LOCAL_URL||HEROKU_URL

function Result() {
    const [data,setData]=useState([])
    // const getData=()=>{
    //     axios.get(LOCAL_URL)
    //     .then(({data})=>setData(data))
    // }
        const getData=()=>{
            axios.get(HEROKU_URL)
            .then(({data})=>{
                setData(data)
                let temp=data;
                axios.get(HEROKU_URL_CLG)
                .then(({data})=>{
                    setData(Allotment(temp,data))
                })
            })
        }
    useEffect(() => {
        getData()
    }, [])
    
  return (
    <div id='main1'>
        <h1 className="h1">Result</h1>
        <table className='tableResult1'>
            <thead className='tableHead'>
                <tr id='headDes'>
                    <th><MdFormatAlignLeft className="cd"/>Student Name<MdKeyboardArrowDown className="arrowd"/></th>
                    <th><span className="hash">#</span>Rank<MdKeyboardArrowDown className="arrowd"/></th>
                    <th><MdOutlineArrowDropDownCircle className="cd"/>Alloted College<MdKeyboardArrowDown className="arrowd"/></th>
                </tr>
            </thead>
            <tbody className='tableBody'>
                {
                    data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.student_name}</td>
                            <td>{item.rank}</td>
                            <td className='cp cp1'><span style={
                                {
                                    background: item.college_preference1==="IIT KANPUR"?"#c5dcef":item.college_preference1==="IIT MADRAS"?"rgb(248, 232, 169)":item.college_preference1==="IIT BOMBAY"?"#e0c5ef":item.college_preference1==="IIIT HYDERABAD"?"#edefc5":item.college_preference1==="IIM AHMEDABAD"?"#efc5dc":item.college_preference1==="IIT ROORKEE"?"#c7efc5":"#efd8c5"
                                }
                            } className="dp dp1">{item.college_preference1}</span></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Result