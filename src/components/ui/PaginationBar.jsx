export default function PaginationBar({
  totalItems,
  page,
  setPage,
  pageSize,
  setPageSize,
}) {
  const totalPages = pageSize === "all" ? 1 : Math.ceil(totalItems / pageSize);

  const startIndex = pageSize === "all" ? 1 : (page - 1) * pageSize + 1;
  const endIndex =
    pageSize === "all" ? totalItems : Math.min(page * pageSize, totalItems);

  const handlePageSizeChange = (e) => {
    const value = e.target.value;
    setPageSize(value === "all" ? "all" : parseInt(value));
    setPage(1);
  };

  return (
    <div className="flex items-center justify-between mt-4 border-t pt-3">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">Entries Per Page::</span>
        <select
          value={pageSize}
          onChange={handlePageSizeChange}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="all">Все</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">
          {startIndex}-{endIndex} из {totalItems}
        </span>

        <div className="flex items-center space-x-1">
          <button
            onClick={() => setPage(1)}
            disabled={page === 1}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            {"<<"}
          </button>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            {"<"}
          </button>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            {">"}
          </button>
          <button
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
}
