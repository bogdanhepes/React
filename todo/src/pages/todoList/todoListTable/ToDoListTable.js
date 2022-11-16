import React, { Fragment } from "react";
import "./ToDoListTable.scss";
import { useTable, useExpanded, useSortBy, useFilters } from "react-table";
const ToDoListTable = () => {
  const data = React.useMemo(
    () => [
      {
        col1: "1",
        col2: "bbbb",
        status:"✅"
      },
      {
        col1: "2",
        col2: "aaaa",
        status:"b"
      },
      {
        col1: "3",
        col2: "cccca",
        status:"✅"
      },
    ],
    []
  );
  const DefaultColumnFilter = ({
    column: { filterValue, preFilteredRows, setFilter },
  }) => {
    return (
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
        placeholder={`Search 🔎`}
        className="mx-5"
      />
    );
  };
  function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    const options = React.useMemo(() => {
      const options = new Set();
      preFilteredRows.forEach((row) => {
        options.add(row.values[id]);
      });
      return [...options.values()];
    }, [id, preFilteredRows]);

    return (
      <select
        className="ms-3"
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const filterTypes = React.useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const columns = React.useMemo(
    () => [
      {
        id: "expander",
        Header: () => null,
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "⬇" : "➡️"}
          </span>
        ),
      },
      {
        Header: "INDEX",
        accessor: "col1",
        Filter: () => null,
      },
      {
        Header: "TODOS",
        accessor: "col2",
      },
      {
        Header: "STATUS",
        accessor: "status",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "ACTIONS",
        Cell: (cell) => (
          <div>
            <button className="btn btn-sm btn-danger">DELETE</button>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable(
    { columns, data, defaultColumn, filterTypes },
    useFilters,
    useSortBy,
    useExpanded
  );

  return (
    <>
      <div className="container p-5">
        <div className="table-responsive">
          <table
            {...getTableProps()}
            className="table table-dark table-striped table-bordered"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={column.id}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                      {column.canFilter ? column.render("Filter") : null}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} className="table-group-divider">
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <Fragment {...row.getRowProps()}>
                    <tr>
                      {row.cells.map((cell, index) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className={"column" + (index + 1)}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                    {row.isExpanded ? (
                      <tr>
                        <td colSpan={visibleColumns.length}>
                          <div>
                            sdhasdas<br></br>dsadasdasda
                          </div>
                        </td>
                      </tr>
                    ) : null}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ToDoListTable;
