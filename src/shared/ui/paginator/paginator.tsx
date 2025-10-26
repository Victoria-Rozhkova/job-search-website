import React, { FC, useCallback, useEffect, useState } from "react";
import { pageClassName } from "@/shared/ui/paginator/paginator.style";

type PaginatorProps = {
  page: number;
  count: number;
  limit?: number;
  visiblePages?: number;
  onChange: (pageClicked: number) => void;
};

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

const Paginator: FC<PaginatorProps> = (props) => {
  const { page, count, limit = 10, visiblePages = 2, onChange } = props;
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [currentTotal, setCurrentTotal] = useState<number>(count);
  const [totalPages, setTotalPages] = useState(Math.ceil(currentTotal / limit));

  const buildPaginationArray = useCallback(() => {
    const totalNumbers = visiblePages * 2 + 2;
    const totalBlocs = totalNumbers + 2;
    if (totalPages > totalBlocs) {
      const startPage = Math.max(2, currentPage - visiblePages);
      const endPage = Math.min(totalPages - 1, currentPage + visiblePages);
      let pages: Array<"LEFT" | "RIGHT" | number> = range(startPage, endPage);
      const hasLeftSplit = startPage > 2;
      const hasRightSplit = totalPages - endPage > 1;
      const splitOffset = totalNumbers - (pages.length + 1);
      switch (true) {
        case hasLeftSplit && !hasRightSplit: {
          pages = [
            LEFT_PAGE,
            ...range(startPage - splitOffset, startPage - 1),
            ...pages,
          ];
          break;
        }
        case !hasLeftSplit && hasRightSplit: {
          pages = [
            ...pages,
            ...range(endPage + 1, endPage + splitOffset),
            RIGHT_PAGE,
          ];
          break;
        }
        case hasLeftSplit && hasRightSplit:
        default:
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
      }
      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  }, [currentPage, totalPages, visiblePages]);

  useEffect(() => {
    setCurrentTotal(count);
    setTotalPages(Math.ceil(count / limit));
    buildPaginationArray();
    setCurrentPage(page);
  }, [buildPaginationArray, count, limit, page]);

  function range(from: number, to: number, step = 1) {
    let i = from;
    const range: Array<number> = [];
    while (i <= to) {
      range.push(i);
      i += step;
    }
    return range;
  }

  function handleChangePage(pageClicked: string | number) {
    const currentPageAction =
      pageClicked === LEFT_PAGE
        ? currentPage - 5
        : pageClicked === RIGHT_PAGE
        ? currentPage + 5
        : (pageClicked as number);

    if (currentPageAction < 1) {
      setCurrentPage(1);
      onChange?.(1);
      return;
    }

    if (currentPageAction > totalPages) {
      setCurrentPage(Number(totalPages));
      onChange?.(Number(totalPages));
      return;
    }
    setCurrentPage(Number(currentPageAction));
    onChange?.(Number(currentPageAction));
  }

  const renderPages = buildPaginationArray().map((pageItem) => {
    return (
      <div key={pageItem}>
        <div
          onClick={handleChangePage.bind(null, pageItem)}
          className={pageClassName(String(pageItem) === String(currentPage))}
        >
          <div className="py-[8px]">
            {pageItem === "LEFT" || pageItem === "RIGHT" ? "..." : pageItem}
          </div>
        </div>
      </div>
    );
  });

  return count ? (
    <div className="mt-[40px] relative">
      <div className="w-full max-w-[100%] sticky bottom-0 h-[49px] bg-white justify-center flex rounded-full">
        {totalPages > 1 ? (
          <div className="bg-white inline-flex h-[40px] overflow-hidden shadow-medium font-[700] text-[14px] rounded-[10px]">
            <div className="inline-flex items-center">{renderPages}</div>
          </div>
        ) : (
          <div className="flex-1 h-[40px]" />
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Paginator;
