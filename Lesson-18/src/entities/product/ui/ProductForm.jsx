import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ProductForm({ product = {}, onSubmit }) {
  const { t } = useTranslation();
  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || 0);
  const [image, setImage] = useState(product?.image || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...product,
      name,
      price: Number(price),
      image,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 max-w-md mx-auto"
    >
      <input
        className="border rounded px-2 py-1"
        placeholder={t("productsEdit.name")}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border rounded px-2 py-1"
        placeholder="Ціна"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder={t("productsEdit.imageLink")}
        type="url"
        className="border rounded px-2 py-1"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 mt-2"
      >
        {t("productsEdit.saveBtn")}
      </button>
    </form>
  );
}
