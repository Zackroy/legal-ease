// import "./App.css"
// import Header from "./components/common/header/Header"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, {useState} from 'react';
// // import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// // import About from "./components/about/About"
// import CourseHome from "./components/allcourses/CourseHome"
// import Team from "./components/team/Team"
// import Pricing from "./components/pricing/Pricing"
// import Blog from "./components/blog/Blog"
// import Contact from "./components/contact/Contact"
// import Footer from "./components/common/footer/Footer"
// import Home from "./components/home/Home"
// import {LogContext} from './context/LogContext'
// import Login from './components/login/Login'
// import Register from "./components/register/register";
// // import Chat from './components/blog/Chat'
// // import Header from "./components/common/header/Header";

// function App() {
//   const [ user, setLoginUser] = useState({})
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route exact path="/"
//             element = {[
//               user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
//             ]}>
//           </Route>
//           {/* <Route path="/login">
//             <Login setLoginUser={setLoginUser}/>
//           </Route>
//           <Route path="/register">
//             <Register />
//           </Route> */}
//             {/* <Route exact path='/home' element={[<Home/>]} />
//             <Route exact path='/Login' element={[<Login/>]} />
//             <Route exact path='/chat' element={[<Chat/>]} /> 
//             <Route exact path='/CourseHome' element={[<CourseHome/>]} />
//             <Route exact path='/team' element={Team} />
//             <Route exact path='/pricing' element={Pricing} />
//             <Route exact path='/journal' element={Blog} />
//             <Route exact path='/contact' element={Contact} />   */}
//         </Routes>
//       </Router>
//     </div>
    
//   );
// }

// export default App
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/register';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
