import ProductCard from "./ProductItem";
import styles from "./ProductsPanel.module.css";

function ProductsPanel({ productsList }) {
  return (
    <div className={styles.container}>
      {productsList.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          price={product.price}
          title={product.title}
          imgSrc={product.imgSrc}
        />
      ))}
    </div>
  );
}

export default ProductsPanel;
