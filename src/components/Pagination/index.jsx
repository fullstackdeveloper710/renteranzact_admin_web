import { Pagination, PaginationItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PaginationComponent = ({ page, count }) => {
  return (
    <Pagination
      page={1}
      size="large"
      count={10}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
};

export default PaginationComponent;
