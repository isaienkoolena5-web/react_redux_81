import { useFormik } from "formik";
import * as Yup from "yup";

import {
  ContactForm,
  ContentWrapper,
  CreateButton,
  EmployeeSection,
  FieldContainer,
  Page,
  Title,
  FieldError,
  Label,
  Input,
} from "./styles";

const employeeSchema = Yup.object().shape({
  name: Yup.string()
    .required("Field name is required")
    .typeError("Field name is required")
    .min(2, "Min 2 symbols")
    .max(50, "Max 50 symbols"),
  surname: Yup.string()
    .required("Field surname is required")
    .max(15, "Max 15 symbols"),
  age: Yup.number()
    .typeError("Must be a number")
    .required("Field age is required")
    .min(18, "Min age 18")
    .max(80, "Max age 80"),
  job: Yup.string().max(30, "Max 30 symbols"),
});
const CreateEmployeePage = () => {
//   const { addEmployee } = useContext(EmployeeContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      job: "",
    },
    validationSchema: employeeSchema,
    validateOnChange: false, // Ошибки появятся только при нажатии
     onSubmit: (values) => {
        //   setSubmittedData(values as EmployeeData);
          console.log("Form Submitted:", values);
        },
    // onSubmit: (values) => {
    //   addEmployee(values);
    //   alert("Create Employee");
    // },
  });

  return (
    <Page>
      <EmployeeSection>
        <Title>Create Employee</Title>

        <ContentWrapper>
          <ContactForm onSubmit={formik.handleSubmit}>
            <FieldContainer>
              <Label htmlFor="name">Name*</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter employee Name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
             
              <FieldError>{formik.errors.name}</FieldError>
            </FieldContainer>

            <FieldContainer>
              <label htmlFor="surname">Surname*</label>
              <Input
                id="surname"
                name="surname"
                type="text"
                placeholder="Enter employee Surame"
                value={formik.values.surname}
                onChange={formik.handleChange}
              />
              <FieldError>{formik.errors.surname}</FieldError>
            </FieldContainer>

            <FieldContainer>
              <Label htmlFor="age">Age*</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter employee Age"
                value={formik.values.age}
                onChange={formik.handleChange}
              />
              <FieldError>{formik.errors.age}</FieldError>
            </FieldContainer>

            <FieldContainer>
              <Label htmlFor="job">Job Position</Label>
              <Input
                id="job"
                type="text"
                placeholder="Enter employee Position"
                value={formik.values.job}
                onChange={formik.handleChange}
              />
            </FieldContainer>

            <CreateButton type="submit">Create</CreateButton>
          </ContactForm>
        </ContentWrapper>
      </EmployeeSection>
    </Page>
  );
};

export default CreateEmployeePage;


