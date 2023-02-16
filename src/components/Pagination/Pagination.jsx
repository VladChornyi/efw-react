export function Pagination({ totalPages, currentPage, onChangePage }) {
//   console.log('totalPages: ',totalPages, 'currentPage ',currentPage);
  return (
    <>
      <button
        disabled={currentPage === 1}
        onClick={() => onChangePage(currentPage - 1)}
      >
        {"<"}
      </button>
      <button
        disabled={currentPage === 1}
        onClick={() => onChangePage(1)}
      >
        1
      </button>
      {currentPage !== totalPages && currentPage !== 1 && (
        <button disabled>{currentPage}</button>
      )}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onChangePage(totalPages)}
      >
        {totalPages}
      </button>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onChangePage(currentPage + 1)}
      >
        {">"}
      </button>
    </>
  );
}
