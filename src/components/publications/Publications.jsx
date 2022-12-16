import Filter from "./Filter";
import Publication from "./Publication";
import Pagination from "./Pagination";
import "./Publications.css";

function Publications() {
  return (
    <>
      <section id="services" className="services">
        <div className="container-fluid" style={{ maxWidth: "1200px" }}>
          <div className="section-title">
            <h2>Publications</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          {/* filter */}
          <Filter />

          <div className="container researchesContainer">
            <Publication />
            <Publication />
            <Publication />
            <Publication />
            <Publication />
            <Publication />
          </div>

          {/* pagination */}
          <Pagination />
        </div>
      </section>
    </>
  );
}

export default Publications;
