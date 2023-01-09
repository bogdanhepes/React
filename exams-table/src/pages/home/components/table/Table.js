import React from "react";
import "./Table.scss";

import { useTable, useSortBy } from "react-table";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";

const Table = () => {
  const subjects = [
    {
      id: 1,
      subject: "TS",
      labTestDate: "17.01.2023",
      labTestGrade: "0",
      mainExamDate: "26.01.2023",
      mainExamGrade: "0",
      credits: "2",
      finalGrade: "10",
    },
    {
      id: 2,
      subject: "SED",
      labTestDate: "19.01.2023",
      labTestGrade: "0",
      mainExamDate: "20.01.2023",
      mainExamGrade: "0",
      credits: "1",
      finalGrade: "5",
    },
    {
      id: 3,
      subject: "IRA",
      labTestDate: "11.01.2023",
      labTestGrade: "0",
      mainExamDate: "07.02.2023",
      mainExamGrade: "0",
      credits: "5",
      finalGrade: "8",
    },
    {
      id: 4,
      subject: "LE",
      labTestDate: "19.01.2023",
      labTestGrade: "0",
      mainExamDate: "03.02.2023",
      mainExamGrade: "0",
      credits: "4",
      finalGrade: "9",
    },
  ];

  const columns = React.useMemo(
    () => [
      {
        Header: "SUBJECT",
        accessor: "subject",
      },
      {
        Header: "LAB TEST DATE",

        accessor: "labTestDate",
      },
      {
        Header: "LAB TEST GRADE",
        accessor: "labTestGrade",
      },
      {
        Header: "MAIN EXAM DATE",
        accessor: "mainExamDate",
      },
      {
        Header: "MAIN EXAM GRADE",
        accessor: "mainExamGrade",
      },
      {
        Header: "CREDITS",
        accessor: "credits",
      },
      {
        Header: "FINAL GRADE",
        Footer: ({ rows }) => {
          let total = 0;
          let creditsTotal = 0;
          // eslint-disable-next-line
          rows?.map((row) => {
            total +=
              parseInt(row.values.finalGrade) * parseInt(row.values.credits);
            creditsTotal += parseInt(row.values.credits);
          });
          return (
            <>
              <strong>Total: {(total / creditsTotal).toPrecision(3)}</strong>
            </>
          );
        },
        accessor: "finalGrade",
      },
      {
        Header: "EDIT",
        disableSortBy: true,
        Cell: <i className="bi bi-pencil-fill"></i>,
      },
      {
        Header: "DELETE",
        disableSortBy: true,
        Cell: <i className="bi bi-trash3-fill"></i>,
      },
    ],
    []
  );

  const [records, setRecords] = React.useState(subjects);

  const getRowId = React.useCallback((row) => {
    return row.id;
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      data: records,
      columns,
      getRowId,
    },
    useSortBy
  );

  const moveRow = (dragIndex, hoverIndex) => {
    const dragRecord = records[dragIndex];
    setRecords(
      update(records, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragRecord],
        ],
      })
    );
  };
  const DND_ITEM_TYPE = "row";

  const Row = ({ row, index, moveRow }) => {
    const dropRef = React.useRef(null);
    const dragRef = React.useRef(null);

    const [, drop] = useDrop({
      accept: DND_ITEM_TYPE,
      hover(item, monitor) {
        if (!dropRef.current) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
          return;
        }
        // Determine rectangle on screen
        const hoverBoundingRect = dropRef.current.getBoundingClientRect();
        // Get vertical middle
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        // Determine mouse position
        const clientOffset = monitor.getClientOffset();
        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
        // Time to actually perform the action
        moveRow(dragIndex, hoverIndex);
        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex;
      },
    });

    const [{ isDragging }, drag, preview] = useDrag({
      type: DND_ITEM_TYPE,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const opacity = isDragging ? 0 : 1;

    preview(drop(dropRef));
    drag(dragRef);

    return (
      <tr ref={dropRef} style={{ opacity }}>
        <td ref={dragRef}>
          <i className="bi bi-arrows-move"></i>
        </td>
        {row.cells.map((cell) => {
          return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
        })}
      </tr>
    );
  };

  return (
    <>
      <div className="tableContainer">
        <div className="container pt-5">
          <div className="table-responsive">
            <DndProvider backend={HTML5Backend}>
              <table
                {...getTableProps()}
                className="table text-center table-bordered"
              >
                <thead className="table-dark ">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      <th></th>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          {column.render("Header")}
                          <span>
                            {column.canSort ? (
                              column.isSorted ? (
                                column.isSortedDesc ? (
                                  <i className="bi bi-caret-down-fill"></i>
                                ) : (
                                  <i className="bi bi-caret-up-fill"></i>
                                )
                              ) : (
                                <i className="bi bi-caret-right-fill"></i>
                              )
                            ) : (
                              ""
                            )}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map(
                    (row, index) =>
                      prepareRow(row) || (
                        <Row
                          index={index}
                          row={row}
                          moveRow={moveRow}
                          {...row.getRowProps()}
                        />
                      )
                  )}
                </tbody>
                <tfoot>
                  {footerGroups.map((group) => (
                    <tr {...group.getFooterGroupProps()}>
                      <td></td>
                      {group.headers.map((column) => (
                        <td {...column.getFooterProps()}>
                          {column.render("Footer")}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tfoot>
              </table>
            </DndProvider>
          </div>
        </div>
      </div>
    </>
  );
};
export default Table;
