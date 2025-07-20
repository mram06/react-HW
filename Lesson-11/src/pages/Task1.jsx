import ProductsPanel from "@/components/Products/ProductsPanel";
import { setFilter, addNewProduct } from "@/redux/slices/productsSlice";
import { createSelector } from "@reduxjs/toolkit";
import { useDeferredValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uid } from "uid";

const filter = (state) => state.products.filter;
const products = (state) => state.products.productsList;
const selectProductList = createSelector(
  [products, filter],
  (products, filter) =>
    products.filter((product) =>
      product.title.toLowerCase().includes(filter.toLowerCase())
    )
);

function Task1() {
  const productsList = useSelector(selectProductList);
  const [searchVal, setSearchVal] = useState("");

  const deferredSearchValue = useDeferredValue(searchVal);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFilter(deferredSearchValue));
  }, [deferredSearchValue, dispatch]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  function onAdd() {
    dispatch(addNewProduct({ id: uid(), title, price }));
    setTitle("");
    setPrice("");
  }

  return (
    <div>
      <div>
        <p>Новий товар</p>
        <label>
          Назва:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Ціна:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button onClick={onAdd}>Додати</button>
      </div>
      <hr />

      <div>
        <label>
          Пошук за назвою:
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </label>
      </div>
      <hr />
      <ProductsPanel productsList={productsList} />
    </div>
  );
}

export default Task1;
