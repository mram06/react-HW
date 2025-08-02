import { WishCard } from "@/entities/wish";
import DeleteWishButton from "@/features/wish/delete-wish";
import { EditWishButton } from "@/features/wish/edit-wish";

function WishesList({ wishes, isLoading }) {
  return (
    <div>
      {isLoading && <div>Loading ...</div>}
      <div className="flex flex-col gap-2">
        {!isLoading
          ? wishes?.map((wish) => (
              <WishCard key={wish.id} wish={wish}>
                <EditWishButton wishId={wish.id} />
                <DeleteWishButton wishId={wish.id} />
              </WishCard>
            ))
          : null}
      </div>
    </div>
  );
}

export default WishesList;
