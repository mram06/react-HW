import { useGetAllWishesQuery } from "@/entities/wish";
import AddWishButton from "@/features/wish/add-wish/ui/AddWishButton";
import WishesList from "@/widgets/WishesListWidget";

function WishesPage() {
  const { data: wishes, isLoading, error } = useGetAllWishesQuery();

  return (
    <div>
      <div className="flex justify-between items-center pb-6">
        <h1 className="text-3xl font-bold ">✨ Мрії</h1>
        <AddWishButton />
      </div>
      <WishesList wishes={wishes} isLoading={isLoading} />
    </div>
  );
}

export default WishesPage;
