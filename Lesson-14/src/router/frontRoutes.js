export const frontRoutes = {
  pages: {
    home: "/",
    patients: {
      base: "patients",
      medicalCard: "medical-card/:id",
      edit: "edit/:id?",
    },
    doctors: {
      base: "doctors",
      edit: "edit/:id?",
    },
    appointments: {
      base: "appointments",
      edit: "edit/:id?",
    },
  },
  navigate: {
    patients: {
      base: "/patients",
      medicalCard: (id) => `medical-card/${id}`,
      add: "edit",
      edit: (id) => `edit/${id}`,
    },
    doctors: {
      base: "/doctors",
      add: "edit",
      edit: (id) => `edit/${id}`,
    },
    appointments: {
      base: "/appointments",
      add: "edit",
      edit: (id) => `edit/${id}`,
    },
  },
};
