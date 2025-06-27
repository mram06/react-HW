export default {
  pages: {
    home: "/",
    shop: { index: "/shop", products: ":id" },
    payment: "/payment",
    contacts: "/contacts",
  },
  navigate: {
    home: "/",
    products: {
      getProductsList: (id) => `/shop/${id}`,
    },
  },
};
