const Pagination = ({
  page,
  setPage,
  per_page,
  sort,
  onClickPage,
  onClickPrevious,
  onClickNext,
  onClickLast,
  onClickFirst,
  searchParams,
  setSearchParams,
}) => {
  const total = 200;
  const totalPage = total / per_page;
  const pageArr = new Array(totalPage).fill().map((i, idx) => idx + 1);
  const max10 = new Array(10).fill().map((i, idx) => {
    if (page >= 11) return idx + 11;
    return idx + 1;
  });

  const onClickNumber = (num) => {
    setSearchParams({
      per_page,
      page: num,
      sort,
    });
    setPage(searchParams.get('page'));
  };

  console.log(page);
  return (
    <div className='flex justify-center my-20'>
      <button
        className='w-15 mx-2.5 border disabled:bg-neutral-300'
        disabled={page === 1}
        onClick={() => onClickFirst(1)}>
        맨처음
      </button>
      <button
        className='w-15 mx-2.5 border disabled:bg-neutral-300'
        disabled={page === 1}
        onClick={() => onClickPrevious(page - 1)}>
        이전
      </button>
      {(totalPage > 10 ? max10 : pageArr).map((i, idx) => (
        <button
          className='w-6 mx-2.5 border disabled:border-fuchsia-900'
          onClick={() => onClickNumber(idx + 1)}
          disabled={page === i}>
          {i}
        </button>
      ))}
      <button
        className='w-15 mx-2.5 border disabled:bg-neutral-300'
        onClick={() => onClickNext(page + 1)}
        disabled={page === pageArr.length}>
        다음
      </button>
      <button
        className='w-15 mx-2.5 border disabled:bg-neutral-300'
        onClick={() => onClickLast(pageArr.length)}
        disabled={page === pageArr.length}>
        맨끝
      </button>
    </div>
  );
};

export default Pagination;
