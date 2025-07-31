import AppointmentsList from "@/pages/Appointments";
import DoctorsList from "@/pages/Doctors";
import Home from "@/pages/Home";
import PatientsList from "@/pages/Patients";
import { frontRoutes } from "./frontRoutes";
import Layout from "@/layouts/Layout";
import PatientsForm from "@/pages/Patients/PatientForm";
import DoctorsForm from "@/pages/Doctors/DoctorForm";
import AppointmentForm from "@/pages/Appointments/AppointmentForm";
import NotFound from "@/pages/NotFound";
import MedicalCard from "@/pages/Patients/MedicalCard";

const routes = [
  {
    path: frontRoutes.pages.home,
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
        meta: {
          labelForMainMenu: "Головна",
        },
      },
      {
        path: frontRoutes.pages.patients.base,
        children: [
          {
            index: true,
            Component: PatientsList,
            meta: {
              labelForMainMenu: "Пацієнти",
            },
          },
          {
            path: frontRoutes.pages.patients.edit,
            Component: PatientsForm,
          },
          {
            path: frontRoutes.pages.patients.medicalCard,
            Component: MedicalCard,
          },
        ],
      },
      {
        path: frontRoutes.pages.doctors.base,
        children: [
          {
            index: true,
            Component: DoctorsList,
            meta: {
              labelForMainMenu: "Лікарі",
            },
          },
          {
            path: frontRoutes.pages.doctors.edit,
            Component: DoctorsForm,
          },
        ],
      },
      {
        path: frontRoutes.pages.appointments.base,
        children: [
          {
            index: true,
            Component: AppointmentsList,
            meta: {
              labelForMainMenu: "Записи",
            },
          },
          {
            path: frontRoutes.pages.appointments.edit,
            Component: AppointmentForm,
          },
        ],
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
];

export default routes;
