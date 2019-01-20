import PropTypes from "prop-types";
import Pagination from "react-js-pagination";

export const PaginationComponent = props => {
  const {
    activePage,
    itemsCountPerPage,
    totalItemsCount,
    pageRangeDisplayed,
    onChange
  } = props;

  return (
    <section>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={pageRangeDisplayed}
        onChange={onChange}
      />
    </section>
  );
};

PaginationComponent.propTypes = {
  activePage: PropTypes.number,
  itemsCountPerPage: PropTypes.number,
  totalItemsCount: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
  onChange: PropTypes.func
};
