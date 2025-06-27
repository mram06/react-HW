import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import apiRoutes from "../api/apiRoutes";
import { Link } from "react-router";
import frontRoutes from "../routes/frontRoutes";
import Spinner from "../components/Spinner/Spinner";

function Shop() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(apiRoutes.categoriesList);
        const data = await res.json();

        setCategoriesList(data.result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <p>
        Список категорій{" "}
        <FontAwesomeIcon
          icon="fa-solid fa-layer-group"
          style={{ color: "#61dafb" }}
        />
      </p>
      <ul>
        {categoriesList.map((category) => (
          <li key={category.id}>
            <Link
              to={frontRoutes.navigate.products.getProductsList(category.id)}
            >
              {category.title_ua}
            </Link>
          </li>
        ))}
      </ul>
      {isLoading ? <Spinner /> : ""}
    </>
  );
}

export default Shop;
