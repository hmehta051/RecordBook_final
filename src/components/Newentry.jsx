import React, { Fragment,useState} from 'react'
import axios from 'axios'
import { MdOutlineArrowDropDownCircle,MdFormatAlignLeft } from "react-icons/md";
const LOCAL_URL="http://localhost:3001/students"
const HEROKU_URL="https://my-mockapp.herokuapp.com/students"
const API_URL=HEROKU_URL ||LOCAL_URL
function Newentry({handleShow,getData}) {
  const [userDetails, setUserDetails] = useState({
    id: Date.now(),
    student_name: "",
    rank: "",
    college_preference1: "",
    college_preference2: "",
    college_preference3: ""
  })
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(API_URL,userDetails)
    .then(({data})=>getData())
    setUserDetails({
      id: Date.now(),
      student_name: "",
      rank: "",
      college_preference1: "",
      college_preference2: "",
      college_preference3: ""
    })
  }
  return (
    <Fragment>
      <form className='addpopup' onSubmit={handleSubmit}>
        <div className='row'>Add row</div>
        <div className='bodyrow'>
          <div className="grid" >
            <div><span className='ll'><MdFormatAlignLeft/>Student name</span> <input type="text" value={userDetails.student_name} name='student_name' onChange={(e)=>setUserDetails({...userDetails,student_name:e.target.value})} required /></div>
            <div><span className='ll'><MdFormatAlignLeft/>Rank</span><input type="number" name='rank' value={userDetails.rank} placeholder='Enter Number' onChange={(e)=>setUserDetails({...userDetails,rank:e.target.value})} required/></div>
            <div><span className='ll'><MdOutlineArrowDropDownCircle className='dc'/>College Preference 1</span>
            <input list="browsers" name="college_preference1" id="clist" value={userDetails.college_preference1} onChange={(e)=>setUserDetails({...userDetails,college_preference1:e.target.value})} required/>
              <datalist id="browsers">
                <option value="IIT KANPUR"/>
                <option value="IIT MADRAS"/>
                <option value="IIT BOMBAY"/>
                <option value="IIIT HYDERABAD"/>
                <option value="IIT ROORKEE"/>
                <option value="IIM AHMEDABAD"/>
              </datalist>
            </div>
            <div><span className='ll'><MdOutlineArrowDropDownCircle className='dc'/>College Preference 2</span>
            <input list="browsers" name="college_preference2" id="clist" value={userDetails.college_preference2} onChange={(e)=>setUserDetails({...userDetails,college_preference2:e.target.value})} required/>
            </div>
            <div><span className='ll'><MdOutlineArrowDropDownCircle className='dc'/>College Preference 3</span>
            <input list="browsers" name="college_preference3" id="clist" value={userDetails.college_preference3} onChange={(e)=>setUserDetails({...userDetails,college_preference3:e.target.value})} required/>
            </div>
          </div>
        </div>
        <div className='btn12'>
          <button className='btnbtn btnbtn1' onClick={handleShow}>Cancel</button>
          <button className='btnbtn btnbtn2' type='submit'>Save</button>
        </div>
      </form>
    </Fragment>
  )
}

export default Newentry