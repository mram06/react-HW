export function FavoriteItem({ item, children }) {
  return (
    <div className="flex justify-between items-center gap-4 bg-cyan-950 rounded-lg shadow-md p-4 mb-4 max-w-2xl hover:shadow-lg transition-shadow">
      <div className="w-28 h-28 flex-shrink-0 rounded overflow-hidden bg-slate-100 flex items-center justify-center">
        <img
          src={item?.image}
          alt={item?.title}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="flex-1 px-4">
        <div className=" text-lg text-blue-500">{item?.title}</div>
        <div className="text-slate-500 mt-1">
          {item?.price} <span className="text-xs">UAH</span>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default FavoriteItem;
