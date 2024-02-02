import { Button, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";

import { useTask } from "../../context/taskcontext";

function TaskForm() {

    const {createTask } = useTask()

  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(task ==="") return;
    setLoading(true)
    await createTask(task);
    setTask("")
    setLoading(false)
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <form action="" onSubmit={handleSubmit}>
          <TextInput
            value={task}
            type="text"
            name="taskName"
            placeholder="Escribe aca el nombre de la tarea"
            onChange={(e) => setTask(e.target.value)}
          />
      
      <div className="">
      <Button type="Submit" disabled={loading} className="w-full mt-2">
        {
            !loading ? "Guardar Tarea" : <Spinner></Spinner>
        }

       </Button>
      </div>
      
        </form>
      </div>
    </>
  );
}

export default TaskForm;
