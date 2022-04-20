import {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../../context/MyContext'
import { useParams, useSearchParams } from 'react-router-dom'
import Output from '../Output/Output'

const Notes = () => {

    const { notes, setNotes, resetNotes } = useContext(MyContext)

    const [searchParams, setSearchParams] = useSearchParams()

    const [search, setSearch] = useState("")

    const searcher = () => {
      setSearchParams({title: search})
      resetNotes()
    }

    useEffect(()=> {
    
      const searching = searchParams.get("title")

      if (searching == null) {
        resetNotes()
      } else {
        const newArr = notes.filter(element => element.title.includes(searching))

      setNotes(newArr)
      }

    },[notes, resetNotes, searchParams, setNotes])
    
    const {id} = useParams()
    
  return (
    <div className='parent'>
         
          <aside className='main side'>
            <input type="search" name="" id="" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search' /> <button onClick={searcher}>Search</button>
          {notes.map((note, i) =>
           { return <h3 key={i}><Link className='link' to={note.id}>{note.title}</Link></h3> }
        )}
          </aside>
              
         {id && <div className='main display'>
          <Output />
          </div>}
         
              

       
    </div>
  )
}

export default Notes