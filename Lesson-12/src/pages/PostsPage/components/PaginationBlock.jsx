function PaginationBlock({
  currentPageNumber,
  totalPagesNumber,
  onPageChange,
}) {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {totalPagesNumber > 1 ? (
        <button
          disabled={currentPageNumber === 1}
          onClick={() => onPageChange(currentPageNumber - 1)}
          className={`px-3 py-1 rounded border text-sm font-medium transition-colors
            ${
              currentPageNumber === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-300'
            }
          `}
        >
          Попередня
        </button>
      ) : null}
      {Array.from({ length: totalPagesNumber }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-3 py-1 rounded border text-sm font-medium transition-colors
            ${
              index + 1 === currentPageNumber
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-300'
            }
          `}
        >
          {index + 1}
        </button>
      ))}
      {totalPagesNumber > 1 ? (
        <button
          disabled={currentPageNumber === totalPagesNumber}
          onClick={() => onPageChange(currentPageNumber + 1)}
          className={`px-3 py-1 rounded border text-sm font-medium transition-colors
            ${
              currentPageNumber === totalPagesNumber
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-300'
            }
          `}
        >
          Наступна
        </button>
      ) : null}
    </div>
  )
}

export default PaginationBlock
