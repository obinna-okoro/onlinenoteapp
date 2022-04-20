import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import MyContext from '../../context/MyContext'

const Output = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { notes, noteInput, setNoteInput, setNotes, handleChange } = useContext(MyContext)

    const [save, setSave] = useState(true)

   
     

     let filtered = notes.find(element => element.id.match(id))
     
     const index = notes.indexOf(filtered)
    
     const delNote = () => {   
        setNotes(prevNotes => {
             prevNotes.splice(index,1)
             return prevNotes  
        })
        navigate("/")
    }

    const editor = () => {
        if (save) {
            setNoteInput(filtered)
            
        } else {
            
        console.log(noteInput)
        // const newArray = [...notes]
        // newArray[index] = noteInput
        setNotes(prevArr => {
            prevArr.splice(index,1)
            return [noteInput, ...prevArr]})

        }

        setSave(prevState => !prevState)
        console.log(notes)
        
    }
    
    
return (
<div>

    <div className='btn'>
    <button className='edit' onClick={editor}> {save ? "Edit" : "Save"}</button>
    <button className='del' onClick={delNote}>Delete</button>
    </div>


    {save ? <div>
                <span className='time'>{filtered.time}</span>
                
                <h1>{filtered.title}</h1>
                <hr />
                <p className='text'>{filtered.body}</p> 
                
        
            </div> 
    : 
            <div className='data-input'>
                <input name="title" defaultValue={noteInput.title} onChange={handleChange} /> <br/>
                <textarea name="body" defaultValue={noteInput.body} onChange={handleChange}/>
            </div>}

</div> 
  )
}

export default Output