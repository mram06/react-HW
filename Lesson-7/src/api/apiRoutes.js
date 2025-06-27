export default {
  apiBase: "https://easy-buy-ytcc.onrender.com/uploads/",
  categoriesList: "https://easy-buy-ytcc.onrender.com/api/v1/subcategories",
  getProductsByCategory: (id) =>
    `https://easy-buy-ytcc.onrender.com/api/v1/products/ua/subcategory/${id}`,
};
