
import {
  Header,
  Main,
  NavLink,

} from "./styles";
import { createContext, useState} from "react";
import CreateEmployeePage from "../CreateEmployee/CreateEmployee";
import type { EmployeeContextType, UserData} from "./types";


export const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);

export const EmployeeLayout = () => {
    const [employees, setEmployees] = useState<UserData[]>([]);
    const [currentPage, setCurrentPage]= useState<'Create' | 'list'>('Create');
    const addEmployee = (newEmployee: UserData)=>{
  setEmployees((prev)=> [...prev, newEmployee]);
};
   


  return (
    <EmployeeContext.Provider value={{employees, addEmployee}}> 
      <Header >
        <NavLink onClick = {() => setCurrentPage('Create')}> Create Employee</NavLink>
        <NavLink onClick = {() => setCurrentPage('list')}> </NavLink>
      <Main>{currentPage === 'Create'}
        <CreateEmployeePage/>
        {/* <EmployeePage/> */}

     
      </Main>
      </Header>

    </EmployeeContext.Provider>
  );
};
