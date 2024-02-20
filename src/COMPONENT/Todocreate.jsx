import React, { useState } from "react";
import "./Todo.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Todocreate({ Todolist, Todo, Todfun }) {
  const [values, setvalue] = useState("");
  const [editing, setEditing] = useState(null);

  const clicked = (e) => {
    e.preventDefault();
    setvalue(e.target.value);
  };

  const submiteed = (e) => {
    e.preventDefault();
    if (editing !== null) {
      console.log('clicked');
      // Editing an existing task
      const updatedTodo = [...Todo];
      updatedTodo[editing] = values;
      Todfun(updatedTodo);
      setEditing(null);
    } else {
      // Adding a new task
      Todolist(values);
    }
    setvalue("");
  };

  const deleteitem = (id) => {
    Todfun(Todo.filter((data, index) => index !== id));
  };

  const edititem = (id) => {
    setEditing(id);
    console.log(Todo[id]);
    setvalue("");
  };

  return (
    <div className="cont-1">
      <div className="cont-2">
        <div className="cont-3">
          <h2>Todo App</h2>
        </div>
        <div className="box">
          <div className="box-1">
            <div className="text-box">
              <form action="" onSubmit={submiteed}>
                <input
                  type="text"
                  placeholder={
                    editing !== null ? "Enter To Edit The Task" : "Enter a task"
                  }
                  value={values}
                  onChange={clicked}
                />

                <button>{editing !== null ? "Edit Task" : "Add Task"}</button>
              </form>
              {Todo.map((val, id) => (
                <div className="todowrap" key={id}>
                  <div className="value" key={id}>
                    <p key={id}>{val}</p>
                    <div className="side-box">
                      <div className="edit">
                        <FaEdit
                          className="trash"
                          onClick={() => edititem(id)}
                        />
                      </div>
                      <div className="trash-box">
                        <MdDelete
                          className="delete"
                          onClick={() => deleteitem(id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todocreate;
