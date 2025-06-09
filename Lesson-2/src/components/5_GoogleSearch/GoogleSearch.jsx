import SiteComponent from "./SiteComponent";
import sites from "./sites";

function GoogleSearch() {
  return (
    <div>
      <p>
        Задача 5. Самостійно сформуйте масив даних та виведіть фрагмент на
        зразок поданого (дані не обов’язково повинні співпадати)
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {sites.map((site) => (
          <SiteComponent key={site.id} data={site} />
        ))}
      </div>
    </div>
  );
}

export default GoogleSearch;
