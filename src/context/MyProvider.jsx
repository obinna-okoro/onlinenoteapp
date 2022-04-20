import { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import MyContext from './MyContext'




const MyProvider = ({children}) => {

    const data =  [{
      id: "c76f466e-4a5e-4992-b911-fd3c9cccbe23",
      time: "2020-08-03 14:58:26",
      title: "Gojo reisenki: Gojoe",
      body: "The newly planted trees were held up by wooden frames in hopes they could survive the next storm."
    }, {
      id: "dd3e9040-ad4c-45cb-ad17-7defbdcf5edd",
      time: "2019-12-26 11:13:05",
      title: "Target Shoots First, The",
      body: "Chocolate covered crickets were his favorite snack."
    }, {
      id: "1a9c7dc7-f4b5-4d8a-8910-866113ab0e29",
      time: "2020-05-02 05:13:17",
      title: "Jupiter's Wife",
      body: "Bill ran from the giraffe toward the dolphin."
    }, {
      id: "697296f2-ba7f-4f1e-9275-d275afe28601",
      time: "2020-05-19 07:15:58",
      title: "The Way He Looks",
      body: "Traveling became almost extinct during the pandemic."
    },]


    
    useEffect(() => {
      const result = JSON.parse(localStorage.getItem("noteData"))
       if (result !== null){
        console.log("refreshed")
           setNotes(result)} 

     },[])

     useEffect(() => {
       return () => {
        localStorage.setItem("noteData", JSON.stringify(notes))
       }
     })

    const currentDate = new Date().toLocaleString()

    const [notes, setNotes] = useState(data)

   
    const resetNotes = () => {
     setNotes(JSON.parse(localStorage.getItem("noteData")))
   }



    const [noteInput, setNoteInput] = useState({
      id: uuid(),
      time: currentDate,
      title: "",
      body: ""
    })



    const handleChange = (event) => {
      setNoteInput(prevNote => {
          return {
              ...prevNote,
              [event.target.name] : event.target.value
          }
      })
     
       
  }

 
   


  const handleSubmit = () => {
     
    setNotes(prevNotes => {
      let result = [noteInput, ...prevNotes] 

      localStorage.setItem("noteData", JSON.stringify(result));
    console.log(result)
  return result}
    )

    

}



  


  return (
    <MyContext.Provider value={{notes, setNoteInput, resetNotes, noteInput, handleSubmit, setNotes, handleChange}} >
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider