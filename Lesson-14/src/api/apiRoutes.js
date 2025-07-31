export const apiRoutes = {
  patients: {
    getAll: "/patients",
    getById: (id) => `/patients/${id}`,
    create: "/patients",
    update: (id) => `/patients/${id}`,
    delete: (id) => `/patients/${id}`,
    filterByName: (name) => `/patients?name=${name}`,
  },
  appointments: {
    getAll: "/appointments",
    getById: (id) => `/appointments/${id}`,
    create: "/appointments",
    update: (id) => `/appointments/${id}`,
    delete: (id) => `/appointments/${id}`,
    filterByDate: (date) => `/appointments?date=${date}`,
    filterByPatientName: (patientName) =>
      `/appointments?patientName=${patientName}`,
  },
  doctors: {
    getAll: "/admin/doctors",
    getById: (id) => `/admin/doctors/${id}`,
    create: "/admin/doctors",
    update: (id) => `/admin/doctors/${id}`,
    delete: (id) => `/admin/doctors/${id}`,
  },
};
