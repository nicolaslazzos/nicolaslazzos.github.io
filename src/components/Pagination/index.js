import React from "react";

import "./styles.css";

const Pagination = ({page}) => {
  return (
    <div className="pagination-container rotation">
      <p className="pagination-text">{page}</p>
    </div>
  );
};

export default Pagination;
