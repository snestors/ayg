import { createContext, useContext, useState } from "react";
import { supabase } from "../lib/supabase";

export const AppContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export const AppContextProvider = ({ children }) => {
  const [task, setTaks] = useState([]);
  const [user, setUser] = useState(null);

  const userSet = async () =>{
    const user = await supabase.auth.getUser()
    const userData = await supabase.from('users').select('*').eq('id', user.data.user.id)    
    
    setUser(userData.data[0])
  }
  

  const getTask = async () => {
    const tasks = await supabase.from("task").select("*");
    setTaks(tasks.data);
  };

  const deleteTask = async (id) => {
    try {
      await supabase.from("task").delete().eq("id", id);
      getTask()
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    try {
      await supabase.from("task").insert({
        taskname: task,
      });
      getTask();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (task) =>{
    supabase.from('task').update().eq("id", task.id)
  } 

  return (
    <AppContext.Provider value={{userSet, user, task, getTask, deleteTask, createTask, updateTask }}>
      {children}
    </AppContext.Provider>
  );
};
