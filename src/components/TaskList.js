import React from "react";
import Task from "./Task"

function TaskList({tasks, onDelete}) {
  const theList= tasks.map((task,index)=>{
    return(
      <Task key={task.text} text={task.text} category={task.category} onDeleteTask={onDelete} id={index}/>
    )
  })
  return (
    <div className="tasks">
      {theList}
    </div>
  );
}

export default TaskList;
