import { Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import './App.css';
import Home from './components/Home';
import Student1 from './components/Student1';
import Student2 from './components/Student2';
import Student3 from './components/Student3';
import Student4 from './components/Student4';
import Student5 from './components/Student5';
import Student6 from './components/Student6';

function App() {
  return (
  
    <Routes>
      <Route path='/' element = {<Home />}></Route>
      <Route path='/student-info/student1' element = {<Student1/>}></Route>
      <Route path='/student-info/student2' element = {<Student2/>}></Route>
      <Route path='/student-info/student3' element = {<Student3/>}></Route>
      <Route path='/student-info/student4' element = {<Student4/>}></Route>
      <Route path='/student-info/student5' element = {<Student5/>}></Route>
      <Route path='/student-info/student6' element = {<Student6/>}></Route>
    </Routes>
  );
}

export default App;
