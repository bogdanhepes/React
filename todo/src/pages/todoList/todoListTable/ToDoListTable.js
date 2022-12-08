import React, { Fragment, useState } from "react";

import "./ToDoListTable.scss";

import { useTable, useExpanded, useSortBy, useFilters } from "react-table";

import { useDispatch, useSelector } from "react-redux";
import { getTasks, deleteTask, getTask } from "../../../actions/tasks";
import EditTaskModal from "../editTask/EditTaskModal";

import { toast } from "react-toastify";

const ToDoListTable = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
  const [loading, setLoading] = useState(false);

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

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

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
            {option ? "completed" : "not completed"}
          </option>
        ))}
      </select>
    );
  }

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

  const handleGetTask = (id) => {
    dispatch(getTask(id)).catch(() => {
      toast.error("Failed to load task data!", {
        toastId: "errorDataLoad",
      });
    });
  };

  const handleDelete = (id) => {
    setLoading(true);
    dispatch(deleteTask(id))
      .then(() => {
        dispatch(getTasks()).then(() => {
          setLoading(false);
          toast.success("Task deleted successfully!", {
            toastId: "successDelete",
          });
        });
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to delete task!", {
          toastId: "errorDelete",
        });
      });
  };

  const columns = React.useMemo(
    () => [
      {
        id: "expander",
        Header: () => null,
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? (
              <i className="bi bi-arrows-collapse"></i>
            ) : (
              <i className="bi bi-arrows-expand"></i>
            )}
          </span>
        ),
      },
      {
        Header: "INDEX",
        accessor: "index",
        Filter: () => null,
        Cell: ({ row }) => <div className={row.index + 1}>{row.index + 1}</div>,
      },
      {
        Header: "TO DO LIST",
        accessor: "description",
      },
      {
        Header: "STATUS",
        accessor: "completed",
        Filter: SelectColumnFilter,
        Cell: (cell) =>
          cell.value ? (
            <i className="bi bi-check-lg"></i>
          ) : (
            <i className="bi bi-x-lg"></i>
          ),
      },
      {
        Header: "ACTIONS",
        Cell: ({ row }) => (
          <div className="text-center d-flex justify-content-center">
            <button
              className="btn btn-sm btn-info ms-2"
              onClick={() => handleGetTask(row.original._id)}
              data-bs-toggle="modal"
              data-bs-target="#EditTaskModal"
            >
              EDIT
            </button>

            <button
              className="btn btn-sm btn-danger ms-2"
              onClick={() => handleDelete(row.original._id)}
            >
              DELETE
            </button>
            <EditTaskModal />
          </div>
        ),
      },
    ],
    // eslint-disable-next-line
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
    {
      columns,
      data: tasks?.data || [],
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useSortBy,
    useExpanded
  );

  return (
    <>
      <div className="container p-5">
        {loading ? (
          <div className="pulse"></div>
        ) : (
          <div className="table-responsive">
            <table
              {...getTableProps()}
              className="table table-dark table-striped table-bordered"
            >
              <thead>
                {headerGroups.map((group) => (
                  <tr {...group.getHeaderGroupProps()}>
                    {group.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className={column.id}
                      >
                        {column.render("Header")}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <i className="bi bi-caret-down-fill"></i>
                            ) : (
                              <i className="bi bi-caret-up-fill"></i>
                            )
                          ) : (
                            ""
                          )}
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
                            <div className="container-sm">
                              <div className="row text-center d-flex justify-content-center">
                                <div className="col col-2">ID:</div>
                                <div className="col col-6">
                                  {tasks?.data[row.index]?._id}
                                </div>
                              </div>
                              <div className="row text-center d-flex justify-content-center">
                                <div className="col col-2">OWNER:</div>
                                <div className="col col-6">
                                  {tasks?.data[row.index]?.owner}
                                </div>
                              </div>
                              <div className="row text-center d-flex justify-content-center">
                                <div className="col col-2">CREATED AT:</div>
                                <div className="col col-6">
                                  {new Date(
                                    tasks?.data[row.index]?.createdAt
                                  ).toLocaleString()}
                                </div>
                              </div>
                              <div className="row text-center d-flex justify-content-center">
                                <div className="col col-2">UPDATED AT:</div>
                                <div className="col col-6">
                                  {new Date(
                                    tasks?.data[row.index]?.updatedAt
                                  ).toLocaleString()}
                                </div>
                              </div>
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
        )}
      </div>
    </>
  );
};

export default ToDoListTable;
