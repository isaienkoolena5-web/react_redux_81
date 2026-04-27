

export interface UserData {
  name: string;
  surname: string;
  age: number;
  job?: string;

}

export interface EmployeeContextType {
    employees: UserData[];
    addEmployee: (data: UserData) => void
}
   


