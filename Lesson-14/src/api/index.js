import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiRoutes } from "./apiRoutes";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.0.181:3000/" }),
  endpoints: (builder) => ({
    // patients
    getPatients: builder.query({
      query: () => apiRoutes.patients.getAll,
      providesTags: ["Patients"],
    }),
    getPatientsByName: builder.query({
      query: (name) => apiRoutes.patients.filterByName(name),
      providesTags: ["Patients"],
    }),
    getPatientById: builder.query({
      query: (id) => apiRoutes.patients.getById(id),
      providesTags: ["Patient"],
    }),
    deletePatient: builder.mutation({
      query: (id) => ({
        url: apiRoutes.patients.delete(id),
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "Patients",
        {
          type: "Patients",
          id,
        },
      ],
    }),
    updatePatient: builder.mutation({
      query: (patientData) => ({
        url: apiRoutes.patients.update(patientData.id),
        body: patientData,
        method: "PUT",
      }),
      invalidatesTags: (result, error, id) => [
        "Patients",
        {
          type: "Patients",
          id,
        },
        "Patient",
      ],
    }),
    addPatient: builder.mutation({
      query: (patientData) => ({
        url: apiRoutes.patients.create,
        body: patientData,
        method: "POST",
      }),
      invalidatesTags: (result, error, id) => [
        "Patients",
        {
          type: "Patients",
          id,
        },
      ],
    }),

    // doctors
    getDoctors: builder.query({
      query: () => apiRoutes.doctors.getAll,
      providesTags: ["Doctors"],
    }),
    getDoctorById: builder.query({
      query: (id) => apiRoutes.doctors.getById(id),
      providesTags: ["Doctor"],
    }),
    addDoctor: builder.mutation({
      query: (doctorData) => ({
        url: apiRoutes.doctors.create,
        body: doctorData,
        method: "POST",
      }),
      invalidatesTags: (result, error, id) => [
        "Doctors",
        {
          type: "Doctors",
          id,
        },
      ],
    }),
    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: apiRoutes.doctors.delete(id),
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "Doctors",
        {
          type: "Doctors",
          id,
        },
      ],
    }),
    updateDoctor: builder.mutation({
      query: (doctorData) => ({
        url: apiRoutes.doctors.update(doctorData.id),
        body: doctorData,
        method: "PUT",
      }),
      invalidatesTags: (result, error, id) => [
        "Doctors",
        {
          type: "Doctors",
          id,
        },
        "Doctor",
      ],
    }),

    // appointments
    getAppointments: builder.query({
      query: () => apiRoutes.appointments.getAll,
      providesTags: ["Appointments"],
    }),
    getAppointmentsByPatientName: builder.query({
      query: (name) => apiRoutes.appointments.filterByPatientName(name),
      providesTags: ["Appointments"],
    }),
    getAppointmentById: builder.query({
      query: (id) => apiRoutes.appointments.getById(id),
      providesTags: ["Appointment"],
    }),
    addAppointment: builder.mutation({
      query: (appointmentData) => ({
        url: apiRoutes.appointments.create,
        body: appointmentData,
        method: "POST",
      }),
      invalidatesTags: (result, error, id) => [
        "Appointments",
        {
          type: "Appointments",
          id,
        },
      ],
    }),
    updateAppointment: builder.mutation({
      query: (appointmentData) => ({
        url: apiRoutes.appointments.update(appointmentData.id),
        body: appointmentData,
        method: "PUT",
      }),
      invalidatesTags: (result, error, id) => [
        "Appointments",
        {
          type: "Appointments",
          id,
        },
        "Appointment",
      ],
    }),
    deleteAppointment: builder.mutation({
      query: (id) => ({
        url: apiRoutes.appointments.delete(id),
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        "Appointments",
        {
          type: "Appointments",
          id,
        },
      ],
    }),
  }),
});

export const {
  // patients
  useGetPatientsQuery,
  useGetPatientsByNameQuery,
  useGetPatientByIdQuery,
  useDeletePatientMutation,
  useUpdatePatientMutation,
  useAddPatientMutation,
  // doctors
  useGetDoctorsQuery,
  useGetDoctorByIdQuery,
  useDeleteDoctorMutation,
  useAddDoctorMutation,
  useUpdateDoctorMutation,
  // appointments
  useGetAppointmentsQuery,
  useGetAppointmentsByPatientNameQuery,
  useGetAppointmentByIdQuery,
  useAddAppointmentMutation,
  useUpdateAppointmentMutation,
  useDeleteAppointmentMutation,
} = api;
