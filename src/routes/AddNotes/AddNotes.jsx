import {useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import MyContext from '../../context/MyContext'

const AddNotes = () => {
  const {notes, handleSubmit, handleChange} = useContext(MyContext)
  
  const navigate = useNavigate()


  
  
 
  

  return (
        <div className="note">
          <form className='data-input' onSubmit={() => navigate("/")}>
            
            <input type="text" name="title" id="title" onChange={handleChange} value={notes.title} placeholder="Title" /> <br />

            
            <textarea name="body" id="body" onChange={handleChange} value={notes.body} placeholder="...Enter text here" />
              <br/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
        </div>
  )
}

export default AddNotes