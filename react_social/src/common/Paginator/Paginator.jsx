import React from "react";
import s from "./Paginator.module.css";

let Paginator = ({
  currentPage,
  onPageChanged,
  totalUserCount,
  pageSize,
  inputPage,
  sendPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUserCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let newPageNumber = inputPage;
  let onSendPageChanged = (event) => {
    sendPageChanged(event.target.value);
  };

  return (
    <div>
      <div className={s.pageContainer}>
        <input
          className={s.input}
          type="number"
          min="1"
          max={pagesCount}
          onChange={onSendPageChanged}
          value={newPageNumber}
        />
        <button
          className={s.buttonInput}
          onClick={() => {
            if (newPageNumber <= pagesCount) {
              onPageChanged(newPageNumber);
            } else {
              return (newPageNumber = pagesCount);
            }
          }}
        >
          Выбрать страницу
        </button>
          {pages.map((p) => {
            let now = currentPage;
            if ((p < now + 3 && p > now - 3) || p === 1 || p === pages.length) {
              return (
                <div className={s.buttonPage} key={p}>
                  <button
                    className={currentPage === p && s.selectedPage}
                    onClick={() => {
                      onPageChanged(p);
                    }}
                  >
                    {p}
                  </button>
                </div>
              );
            }
          })}
        </div>
    </div>
  );
};

export default Paginator;
