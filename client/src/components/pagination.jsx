import Paginator from "react-js-paginator";

const Pagination = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom:"1rem" }}>
      <div style={{ width: "fit-content" }}>
        <Paginator
          pageSize={props.onePage}
          totalElements={props.totalData}
          onPageChangeCallback={(e) => {
            props.onPageChange(e);
          }}
          pageBoxStyle={{
            border: "1px solid #dee2e6",
            color: "#007bff",
            padding: 10,
            backgroundColor: "white",
          }}
          activePageBoxStyle={{
            fontWeight: "bolder",
            color: "#fff",
            backgroundColor: "#027df0",
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
