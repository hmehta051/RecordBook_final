import axios from 'axios'
import React, { useState } from 'react'
import NormalTr from './NormalTr'
import EditTr from './EditTr'
const API_URL="https://my-mockapp.herokuapp.com/students"||"http://localhost:3001/students"
function MapData({data, setData}) {
    const [seen,setSeen]= useState(-1)
    const handleEdit=(id)=>{
        setSeen(id)
    }
    const setNewData = (item) =>{
        axios.patch(`${API_URL}/${item.id}` , item )
        .then( res =>{
            console.log(res)
        })
        let newArr = data.map( a =>{
            if( a.id === item.id){
                a = item;
            }
            return a
        })
        setData([...newArr])
        // console.log( "testing" , item)
    }
  return (
    <>
        {
            data.map( a =>{
                return (<tr key={a.id} onClick={() => handleEdit(a.id)}>
                    { seen === a.id ?
                        <EditTr handleEdit={handleEdit} item={a} setNewData={setNewData} />
                        :
                        <NormalTr  handleEdit={handleEdit} item={a}/> 
                    }
                      </tr>)   
            }) 
        }
    </>
  )
}
export default MapData