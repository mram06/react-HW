import { useNavigate } from "react-router";

function AddWishButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/wishes/edit");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
    >
      <span className="text-lg">➕</span>
      Додати мрію
    </button>
  );
}

export default AddWishButton;
