const Pagination = ({
  page,
  per_page,
  onClickPage,
  onClickPrevious,
  onClickNext,
  onClickLast,
  onClickFirst,
}) => {
  const total = 200;
  const totalPage = total / per_page;
  const pageArr = new Array(totalPage).fill(0);

  return (
    <div className='flex justify-center my-20'>
      <button
        className='w-15 mx-2.5 border disabled:bg-neutral-300'
        disabled={pageArr && page === 1}
        onClick={() => onClickFirst(1)}>
        맨처음
      </button>
      <button
        className='w-15 mx-2.5 border disabled:bg-neutral-300'
        disabled={pageArr && page === 1}
        onClick={() => onClickPrevious(page - 1)}>
        이전
      </button>
      {pageArr.map((i, idx) => (
        <button
          className='w-6 mx-2.5 border disabled:border-fuchsia-900'
          onClick={() => onClickPage(idx + 1)}
          disabled={page === idx + 1}>
          {idx + 1}
        </button>
      ))}
      <button
        className='w-15 mx-2.5 border disabled:bg-neutral-300'
        onClick={() => onClickNext(page + 1)}
        disabled={pageArr && page === pageArr.length}>
        다음
      </button>
      <button
        className='w-15 mx-2.5 border disabled:bg-neutral-300'
        onClick={() => onClickLast(pageArr.length)}
        disabled={pageArr && page === pageArr.length}>
        맨끝
      </button>
    </div>
  );
};

export default Pagination;
