import React, { useState }  from "react";
import Todocreate from "./Todocreate";


function Todo() {
  const [Todo, Todofun] = useState([])
  const Todolist=(e)=>{
    let value=e;
    let updatearray=[...Todo];
    updatearray.push(value);
    Todofun(updatearray);
  }
 
  return (
    <Todocreate Todolist={Todolist} Todo={Todo} Todfun={Todofun}/>
  );
}

export default Todo;
