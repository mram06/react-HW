import AddWishFormWidget from "@/widgets/AddWishFormWidget";
import { useParams } from "react-router";

function EditWishPage() {
  const { id } = useParams();

  return <AddWishFormWidget wishId={id} />;
}

export default EditWishPage;
