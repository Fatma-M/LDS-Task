import { createRouter, createWebHistory } from "vue-router";
import EmployeesList from "@/views/employees/EmployeesList";
import EmployeeView from "@/views/employees/EmployeeView";
import EditEmployee from "@/views/employees/EditEmployee";
import AddEmployee from "@/views/employees/AddEmployee";
import PatientsList from "@/views/patients/PatientsList";
import PatientView from "@/views/patients/PatientView";
import AddPatient from "@/views/patients/AddPatient";
import EditPatient from "@/views/patients/EditPatient";

const routes = [
  {
    path: "/employees",
    name: "employees",
    component: EmployeesList,
  },
  {
    path: "/employees/:id",
    name: "employee-details",
    props: true,
    component: EmployeeView,
  },
  {
    path: "/employees/:id/edit",
    name: "edit-employee",
    props: true,
    component: EditEmployee,
  },
  {
    path: "/employees/add",
    name: "add-employee",
    component: AddEmployee,
  },
  {
    path: "/patients",
    name: "patients",
    component: PatientsList,
  },
  {
    path: "/patients/:id",
    name: "patient-details",
    props: true,
    component: PatientView,
  },
  {
    path: "/patients/:id/edit",
    name: "edit-patient",
    props: true,
    component: EditPatient,
  },
  {
    path: "/patients/add",
    name: "add-patient",
    component: AddPatient,
  },
  {
    path: "/",
    redirect: "/employees",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
