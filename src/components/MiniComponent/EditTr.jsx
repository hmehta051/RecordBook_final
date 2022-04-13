import React,{useState} from "react";

const EditTr = ({handleEdit , item , setNewData}) =>{
  const [editFormData, setEditFormData] = useState(item);
  const changeHandler = (e) =>{
      const {name} = e.target;
      setEditFormData({...editFormData , [name] : e.target.value })  
  }
  const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
       setNewData(editFormData)
       handleEdit(-1)
      }
      else{
          changeHandler(event)
      }
  }
  return  <>
            <td>
              <input type="text" value={editFormData.student_name} className="editinp" onChange={ (e) => changeHandler(e) } 
              onKeyDown={handleKeyDown} name="student_name"/>
            </td>
            <td>
              <input type="number" className='editinp' name="rank" onChange={changeHandler} 
              onKeyDown={handleKeyDown} value={editFormData.rank} />
            </td>
            <td className='cp cp1'>
              <input list="browsers" 
              className='editinp'
              onChange={changeHandler} 
              name="college_preference1"
              onKeyDown={handleKeyDown}
              defaultValue={editFormData.college_preference1} 
              id="clist" required />
              <datalist id="browsers">
              <option value="IIT KANPUR"/>
              <option value="IIT MADRAS"/>
              <option value="IIT BOMBAY"/>
              <option value="IIIT HYDERABAD"/>
              <option value="IIT ROORKEE"/>
              <option value="IIM AHMEDABAD"/>
              </datalist>
            </td>
            <td className='cp cp2'>
              <input list="browsers"
              className='editinp'
              onKeyDown={handleKeyDown}
              onChange={changeHandler} 
              name="college_preference2" 
              value={editFormData.college_preference2} 
              id="clist" required />
          </td>
            <td className='cp cp3'>
            <input list="browsers"
            className='editinp' 
            onKeyDown={handleKeyDown}
            onChange={changeHandler} 
            name="college_preference3" 
            value={editFormData.college_preference3} 
            id="clist" required/>
          </td>
         </>
}

export default EditTr;
