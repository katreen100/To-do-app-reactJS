import { useState } from "react";

export default function ToDo() {
  const list=
   [ {
      id: 1,
      title: "study",
      finshed: true,
    },
    {
      id: 2,
      title: "GYM",
      finshed: true,
    },
    {
      id: 3,
      title: "WORK",
      finshed: false,
    },
  ]
  const [task, settask] = useState([...list]);
  const [showAddTask ,setshowAddTask]=useState(false)
  const[worningText,setworningText]=useState("")
 function showAddTaskfun(){
   setshowAddTask(!showAddTask)
 }
  function donefromlist(id) {
    let donetasks = task.map((task) =>
      task.id === id ? { ...task, finshed: true } : task
    ); 
    console.log(donetasks);
    settask([...donetasks]);
    console.log(donetasks);
  }
  function undofromlist(id) {
    let undotasks = task.map((task) =>
      task.id === id ? { ...task, finshed: false } : task
    );
    console.log(undotasks);
    settask([...undotasks]);

    console.log(undotasks);
  }
  function deletefromlist(id) {
    let temp = task.filter((task) => task.id !== id);
    console.log(temp);
    settask([...temp]);
    console.log(task);
  }
  function finished() {
    settask(task.filter((task) => task.finshed));
  }
  function unfinished() {
    settask(task.filter((task) => task.finshed === false));
  }
  function allTasks() {
    settask([...task]);
    console.log(task);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.task.value);
    if (typeof e.target.task.value ==="string"&&e.target.task.value!==""){
    let id = task.length + 1;
    let taskTitle = e.target.task.value;
    let newtask = {
      id: id,
      title: taskTitle,
      finshed: false,
    };
    settask([...task, newtask]);
    e.target.task.value=""
    setworningText("")
  }else{
    setworningText("please enter valid task")
  }}
  return (
    <div className="container p-2  w-50 bg-light ">
      <div className="d-flex justify-content-between my-3">
        <div>
          <i class="fas fa-tasks fs-3 pe-3"></i>
          <span className="fs-3">tasks</span>
        </div>
        <div>{worningText}</div>
        <button className="btn btn-dark" onClick={showAddTaskfun}>Add task</button>
      </div>
      {showAddTask?(
        <>
      <form className="p-4 text-center border shadow" onSubmit={handleSubmit}>
        <div class="mb-3 text-center">
          <label for="taskDetails" class="form-label">
            add your task
          </label>
          <input
            type="text"
            class="form-control"
            id="taskDetails"
            name="task"
          />
        </div>
        <div className="worningText">{worningText}</div>
        <button type="submit m-auto" class="btn btn-dark w-100">
          Add task
        </button>
      </form>
      </>) : " "}
      <div className="p-3">
        <ul className="text-center todoul">
          <li className="todoli" onClick={allTasks}>All task</li>
          <li className="todoli" onClick={unfinished}>To Do</li>
          <li className="todoli" onClick={finished}> finished</li>
        </ul>
      </div>
      {task.length > 0 ? (
        <div>
          {task.map((task, index) => (
            <div
              className="container p-2  border-bottom  text-dark d-flex justify-content-between"
              key={index}
            >
              <div
                className={task.finshed ? "text-decoration-line-through" : ""}
              >
                {task.title}{" "}
              </div>
              <div>
                {task.finshed ? (
                  <i
                    class="fas fa-undo-alt fs-3"
                    onClick={() => undofromlist(task.id)}
                  ></i>
                ) : (
                  <i
                    class="fas fa-highlighter fs-3"
                    onClick={() => donefromlist(task.id)}
                  />
                )}
                <i
                  class="fas fa-trash-alt fs-3 px-4"
                  onClick={({ $index }) => deletefromlist(task.id)}
                ></i>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center fs-2 ">no tasks </div>
      )}
    </div>
  );
}
