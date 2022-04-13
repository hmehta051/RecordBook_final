import React from 'react'

const NormalTr = ({handleEdit , item}) =>{
    function colorChange(name){
        let colorchange={
            background: name==="IIT KANPUR"?
            "#c5dcef":name==="IIT MADRAS"?
            "rgb(248, 232, 169)":name==="IIT BOMBAY"?
            "#e0c5ef":name==="IIIT HYDERABAD"?
            "#edefc5":name==="IIM AHMEDABAD"?
            "#efc5dc":name==="IIT ROORKEE"?
            "#c7efc5":"#efd8c5"
        }
        return colorchange
    }
    return <>
            <td>{item.student_name}</td>
            <td>{item.rank}</td>
            <td className='cp cp1'>
                <span style={colorChange(item.college_preference1)}  className="dp dp1">{item.college_preference1}</span>
            </td>
            <td className='cp cp2'>
                <span style={colorChange(item.college_preference2)} className="dp dp1">{item.college_preference2}</span>
            </td>
            <td className='cp cp3'>
                <span style={colorChange(item.college_preference3)} className="dp dp1">{item.college_preference3}</span>
            </td>
            </>
}

export default NormalTr