import logo from './logo.svg';
import './App.css';
import AddCourse from './Components/AddCourse';
import SearchCourse from './Components/SearchCourse';
import DeleteCourse from './Components/DeleteCourse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewCourses from './Components/ViewCourses';

function App() {
  return (   
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddCourse/>}/>
        <Route path='/search' element={<SearchCourse/>}/>
        <Route path='/delete' element={<DeleteCourse/>}/>
        <Route path='/view' element={<ViewCourses/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
