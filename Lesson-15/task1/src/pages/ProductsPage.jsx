// === src/pages/ProductsPage/ui.jsx ===
import { useState, useEffect } from "react";
import { useGetProductsQuery } from "@/entities/product"; // Шлях до productApi в entities

// Імпортуємо наш віджет ProductList
import ProductList from "@/widgets/ProductListWidget";

// Імпортуємо нову кнопку з фічі add-product
import { AddProductButton } from "@/features/product/add-product/ui/AddProductButton";
import useDebounce from "@/shared/hooks/useDebounce";

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const [cursors, setCursors] = useState([]);
  const perPage = 6;
  const [searchTerm, setSearchTerm] = useState("");
  const { delayedValue } = useDebounce(searchTerm);

  const { data, isLoading } = useGetProductsQuery({
    page,
    perPage,
    cursors,
    searchTerm: delayedValue,
  });
  const products = data?.data || [];
  const hasMore = data?.hasMore;

  useEffect(() => {
    if (data?.cursor && cursors.length < page) {
      setCursors((prev) => [...prev, data.cursor]);
    }
    if (data?.data.length === 0 && page > 1) {
      setPage((p) => p - 1);
    }
  }, [data, cursors?.length, page]);

  useEffect(() => {
    setPage(1);
    setCursors([]);
  }, [delayedValue]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Products List</h2>
        {/* Використовуємо кнопку з фічі */}
        <AddProductButton />
      </div>
      <div className="mb-6">
        <label className="block text-white font-medium mb-2">
          Пошук за назвою
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Введіть назву продукту..."
          />
        </label>
      </div>

      <ProductList
        products={products}
        page={page}
        setPage={setPage}
        hasMore={hasMore}
        isLoading={isLoading}
      />
    </div>
  );
}
