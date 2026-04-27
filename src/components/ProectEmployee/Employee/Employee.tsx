// import { useContext } from "react";
// import {  ContentWrapper, EmployeeSection, Page, Title, InfoCard, InfoBlock, InfoValue, InfoLabel} from "./styles"
// import { EmployeeContext } from "../EmployeeLayout/EmployeeLayouе";

// const EmployeePage = () => {
//   const context = useContext(EmployeeContext);
//   const employees = context? context.employees: [];EmployeeData

//   return (
//       <Page>
//         <EmployeeSection>
//           <Title>Employee</Title>        
//           <ContentWrapper> {employees.map(emp:useData, index)     
//             <InfoCard  key={index} $isHidden={false}>
//               <InfoBlock>
//                 <InfoLabel>Name</InfoLabel>
//                 <InfoValue>{emp.name}</InfoValue>
//               </InfoBlock>
              
//               <InfoBlock>
//                 <InfoLabel>Surname</InfoLabel>
//                 <InfoValue>{emp.surname}</InfoValue>
//               </InfoBlock>
  
//               <InfoBlock>
//                 <InfoLabel>Age</InfoLabel>
//                 <InfoValue>{emp.age}</InfoValue>
//               </InfoBlock>
  
//               <InfoBlock>
//                 <InfoLabel>Job Position</InfoLabel>
//                 <InfoValue>{emp?.job || "-"}</InfoValue>
//               </InfoBlock>
//             </InfoCard>
// }
//           </ContentWrapper>   
//         </EmployeeSection>
//       </Page>
//     );
//   };
  
//   export default EmployeePage;


