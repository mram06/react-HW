import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import apiRoutes from "../api/apiRoutes";
import Spinner from "../components/Spinner/Spinner";
import ProductsPanel from "../components/Products/ProductsPanel";
import Button from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import frontRoutes from "../routes/frontRoutes";

function Products() {
  const { id } = useParams();

  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(apiRoutes.getProductsByCategory(id));
        const data = await res.json();

        setProductsList(data.productsList);
        setTotalCount(data.totalCount);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const navigate = useNavigate();
  function handleClick() {
    navigate(frontRoutes.navigate.home);
  }

  const content = (
    <>
      <p>Знайдено {totalCount} товарів</p>
      <ProductsPanel productsList={productsList} />
      <Button emitClick={handleClick}>
        <FontAwesomeIcon
          icon="fa-solid fa-right-from-bracket"
          rotation={180}
          style={{ color: "#646cff" }}
        />{" "}
        На головну
      </Button>
    </>
  );

  return (
    <>
      <h2>Товари</h2>
      {isLoading ? <Spinner /> : content}
    </>
  );
}

export default Products;
