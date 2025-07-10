import DataGrid from "@/components/DataGrid/DataGrid";

function Task2() {
  const productsList = Array.from({ length: 50000 }, (_, i) => ({
    id: i,
    name: `Product ${i + 1}`,
  }));

  return (
    <div>
      <DataGrid products={productsList} />
    </div>
  );
}

export default Task2;
