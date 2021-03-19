import React, { useState } from "react";
import styles from "./Paginator.module.css";
// import cn from "classnames";
let Paginator = ({
  totalItemsCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize = 9,
}) => {
  let pages = [];
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionsCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          className={styles.paginator__btn + " " + styles.paginator__btn_prev}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          Prev
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => (
          <span
            // className={cn(
            //   { [styles.currentPage]: currentPage === p },
            //   styles.pageNumber
            // )}
            className={
              styles.paginator__num +
              " " +
              (currentPage === p ? styles.paginator__num_selected : undefined)
            }
            onClick={() => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      {portionNumber < portionsCount && (
        <button
          className={styles.paginator__btn + " " + styles.paginator__btn_next}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          next
        </button>
      )}
    </div>
  );

  // let pages = [];
  // let pagesCount = Math.ceil(totalItemsCount / pageSize);
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }
  // let [portionNumber, setPortionNumber] = useState(1);
  // let portionCount = Math.ceil(pagesCount / portionSize);
  // let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  // let rightPortionPageNumber = portionNumber * portionSize;
  // return (
  //   <div>
  //     {portionNumber > 1 && (
  //       <button
  //         onClick={() => {
  //           setPortionNumber(portionNumber - 1);
  //         }}
  //       >
  //         Prev
  //       </button>
  //     )}
  //     {pages
  //       .filter(
  //         (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
  //       )
  //       .map((p) => (
  //         <span
  //           onClick={(e) => {
  //             onPageChanged(p);
  //           }}
  //           className={currentPage === p ? styles.currentPage : undefined}
  //           key={p}
  //         >
  //           {p}
  //         </span>
  //       ))}
  //     {portionCount > portionNumber && (
  //       <button
  //         onClick={() => {
  //           setPortionNumber(portionNumber + 1);
  //         }}
  //       >
  //         Next
  //       </button>
  //     )}
  //   </div>
  // );
};

export default Paginator;
