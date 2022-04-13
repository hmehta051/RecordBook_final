import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineArrowDropDownCircle,MdFormatAlignLeft } from "react-icons/md";
import React, { useState,useEffect } from 'react'
import Result from "./Result";
import './Common.css'
import axios from 'axios'
import Newentry from "./Newentry";
import MapData from "./MiniComponent/MapData";
const API_URL="https://my-mockapp.herokuapp.com/students"||"http://localhost:3001/students"

function Home() {
    const [data,setData]=useState([])
    const [show,setShow]=useState(false)
    const [see,setSee]=useState(false)
    const handleSee=()=>{
        setSee(!see)
    }
    const handleShow=()=>{
        setShow(!show)
    }
    const getData=()=>{
        axios.get(API_URL)
        .then(({data})=>setData(data))
    }
    useEffect(() => {
        getData()
    }, [])
  return (
    <div id='main'>
        <h4 className='head1'>Student List</h4>
        <table className='tableMain'>
            <thead className='tableHead'>
                <tr id='headDes'>
                    <th><MdFormatAlignLeft className="cd"/>Student Name<MdKeyboardArrowDown className="arrowd" /></th>
                    <th><span className="hash">#</span>Rank<MdKeyboardArrowDown className="arrowd"/></th>
                    <th><MdOutlineArrowDropDownCircle className="cd"/>College Preference 1<MdKeyboardArrowDown  className="arrowd"/></th>
                    <th><MdOutlineArrowDropDownCircle className="cd"/>College Preference 2<MdKeyboardArrowDown className="arrowd"/></th>
                    <th><MdOutlineArrowDropDownCircle className="cd"/>College Preference 3<MdKeyboardArrowDown className="arrowd"/></th>
                </tr>
            </thead>
            <tbody className='tableBody'>
            <MapData data={data}  setData={setData}/>
            </tbody>
        </table>
        <div className="btnpart">
        <button className="btn btn1" onClick={handleShow}>Add New Student</button>
        <button className="btn btn2" onClick={handleSee}>Get Result</button>
        <div>{see?<Result handleSee={handleSee} getData={getData} data={data}/>:null}</div>
        <div>{show?<Newentry handleShow={handleShow} getData={getData}/>:null}</div>
        </div>
    </div>
  )
}

export default Home