import {Routes, Route } from 'react-router-dom'
import MyProvider from './context/MyProvider';
import Notes from './routes/Notes/Notes';
import { useNavigate } from 'react-router-dom';
import './App.css';
import AddNotes from './routes/AddNotes/AddNotes';
import Output from './routes/Output/Output';
import {Helmet} from "react-helmet"

const App = () => {

const navigate = useNavigate()

  

  return (
    <MyProvider>
      <Helmet>
        <title>Online NoteApp</title>
      </Helmet>
    <main>
      <nav>
        <h1 className='logo' onClick={() => navigate("/")} > Online Note App</h1>
        <div className='addnote' onClick={() => {navigate("/addnote")}}> <h1>+</h1></div>
      </nav>
       <Routes>
        <Route path='/' element={<Notes/>}>
        <Route path='/:id' element={<Output/>}/>
        </Route>
        <Route path="/addnote" element={<AddNotes/>}/>
        
        
       </Routes>
      
          
     
    </main>
    </MyProvider>
   
  );
}

export default App;
