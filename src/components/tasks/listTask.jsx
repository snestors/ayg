
import { useEffect } from "react";

import {  Button, Table } from "flowbite-react";
import { useAppContext } from "../../context/appContext";


function ListTask() {
const {task, getTask, deleteTask} = useAppContext();

function deleteT(id) {
  console.log(id)
  deleteTask(id)
}


useEffect(()=> {
    getTask()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  return (
    <>

    <div className="overflow-x-auto m-4 rounded" >
      <Table>
        <Table.Head className="">
          <Table.HeadCell >ID</Table.HeadCell>
          <Table.HeadCell>Tarea</Table.HeadCell>
          <Table.HeadCell>Estatus</Table.HeadCell>
          <Table.HeadCell>Creado</Table.HeadCell>
          <Table.HeadCell>Creado Por:</Table.HeadCell> 
          
          <Table.HeadCell>Actions</Table.HeadCell>  
        </Table.Head>
        <Table.Body className="divide-y">
          
          {task.map((task) => (
            <Table.Row key={task.id} className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-slate-200">
               
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{task.id}</Table.Cell>
              <Table.Cell>{task.taskname}</Table.Cell>
              <Table.Cell>{JSON.stringify(task.done)}</Table.Cell>
              <Table.Cell>{task.created_at}</Table.Cell>
              <Table.Cell>{task.user_id}</Table.Cell>
              <Table.Cell>
                <div>
                 <Button  onClick={()=>deleteT(task.id)} >Delete</Button>
                 <Button>Edit</Button>
                 
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
          
        </Table.Body>
      </Table>
    </div>
      
    </>
  );
}

export default ListTask;
