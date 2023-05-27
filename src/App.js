
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import React, { useState ,useEffect} from 'react';
import Todos from './Component/Todos';
import Addtodos from './Component/Addtodos';
import About from './Component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  let initTodo;
 if(localStorage.getItem("tODOS")===null){
  initTodo=[]
 }else{
  initTodo=JSON.parse(localStorage.getItem("tODOS"))
 }
  const ondelete = (todos)=>{
console.log("this todo list",todos)
setTODOS(tODOS.filter(item => {
  return item!==todos
}))
localStorage.setItem("tODOS",JSON.stringify(tODOS));
  }
  const Additeam =(describtion,status)=>{
 let id
   
 (tODOS.length == 0)? id= 0 : id = tODOS[tODOS.length-1].id + 1 ;
      let my ={
        id:id,
        describtion:describtion,
        status:status
      }
      
      
    setTODOS([...tODOS,my])
      
  }
 
  const [ tODOS, setTODOS] = useState( initTodo );
  useEffect(()=>{
    localStorage.setItem("tODOS",JSON.stringify(tODOS));

  },[tODOS])
 
  return (
    <div>
      <Router>
      <Header />
      <Switch>
        
      <Route exact path="/"render={()=>{
            return(<> <Addtodos Additeam={Additeam}/> 
            <Todos TODOS={tODOS} ondelete={ondelete}/></>)
          }}>
           
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
      
        </Switch>
     
      <Footer/>
      </Router>
 
    </div>


  );
}

export default App;
