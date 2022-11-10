import { useMemo } from "react";

const range = (start, end) => {
  let length = end - start + 1;
}

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
}) => {
  const paginationRange = useMemo(() => {

    const totalPageCount = Math.ceil(totalCount / pageSize)

  }, [totalCount, pageSize, siblingCount, currentPage]);
  
  return paginationRange;
};