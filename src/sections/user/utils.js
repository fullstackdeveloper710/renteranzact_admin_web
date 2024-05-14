export const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: "1px",
  height: "1px",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  clip: "rect(0 0 0 0)",
};

export function emptyRows(page, rowsPerPage, arrayLength) {
  return page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

function descendingComparator(a, b, orderBy) {
  if (a[orderBy] === null) {
    return 1;
  }
  if (b[orderBy] === null) {
    return -1;
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
export function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function applyFilter({ inputData, comparator, filterName }) {
  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    inputData = inputData.filter(
      (user) => user.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  return inputData;
}

export const propertyType = [
  {
    title: "Detached Duplexes",
  },
  {
    title: "Semi-detached Duplexes",
  },
  {
    title: "Detached Bungalows",
  },
  {
    title: "Semi-detached Bungalows",
  },
  {
    title: "Terraced Bungalows",
  },
  {
    title: "Terraced Duplexes",
  },
  {
    title: "Block of Flats",
  },
  {
    title: "Studio Apartment",
  },
  {
    title: "Mini Flat",
  },
  {
    title: "Office Space",
  },
  {
    title: "Shope",
  },
  {
    title: "Warehouse",
  },
  {
    title: "Open Space",
  },
  {
    title: "Complex",
  },
  {
    title: "Plaza",
  },
  {
    title: "Mall",
  },
];
export const listOfMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

