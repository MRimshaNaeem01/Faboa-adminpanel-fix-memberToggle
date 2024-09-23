import React from "react";
import { Table } from "react-bootstrap";
import propTypes from "prop-types";
import { ReactComponent as FilterC } from "../assets/mambers/FilterC.svg";
import { ReactComponent as ArrowDown } from "../assets/mambers/arrow-down.svg";
import Checkbox from "./Checkbox";
import PaginationComponent from "./Pagination";
import "../assets/css/table.css";
import avatar from "../../src/assets/mambers/Avatar.png"
import questionCircle from "../../src/assets/mambers/question-circle.svg"

const TableView = ({
  data,
  fields,
  pageChanged,
  hasPagination,
  isChecked,
  extraCells,
  isMemeber,
  extraHeads,
  navigate,
}) => {
  const colspanFields = () => {
    return Object.keys(fields).length + 1;
  };

  return (
    <>
      <div className="tblStyle w-full overflow-hidden sticky-table">
        <Table responsive className={`m-auto table table-responsive`}>
          <thead>
            <tr className="thdCls">
              <th className="fixed-left-col">
                <div className="d-flex align-items-center ">
                  <div>
                    <Checkbox
                      id={data?._id}
                      style={{ fontSize: "16px", marginLeft: "10px", marginRight: '15px' }}
                    />
                  </div>
                  <div>
                    <span>{fields[0]?.label}</span>
                    <ArrowDown className="filter-icon" />
                    {/* Assuming Bootstrap Icons */}
                  </div>
                </div>
              </th>

              {/* Scrollable Middle Columns */}
              {fields?.map(
                (field, fieldIndex) =>
                  field.label !== fields[0].label && (
                    <th key={fieldIndex} className="scrollable-col fixed-middle-col">
                      <div className="m-1">
                        <span>{field.label}</span>
                        {(field.label !== fields[1].label) && (field.label !== fields[2].label) && (field.label !== fields[6].label) && (field.label !== fields[7].label) &&
                          (field.label !== fields[9].label) && (field.label !== fields[10].label) && <FilterC className="filter-icon" />}
                        {(field.label === fields[7].label) && <img className="filter-icon" src={questionCircle} />}
                      </div>
                    </th>
                  )
              )}
              {/* Status Column */}
              {extraHeads()}
            </tr>
          </thead>
          <tbody className="p-3">
            {
              hasPagination && (
                <>
                  {data?.length > 0 &&
                    data?.map((item, itemIndex) => (
                      <tr key={itemIndex} className="tableRow">
                        <td className="fixed-left-col left">
                          <div className="d-flex align-items-center">
                            {/* Checkbox */}
                            <div>
                              <Checkbox
                                id={data?._id}
                                style={{ fontSize: "16px", marginLeft: "10px", marginRight: '15px' }}
                              />
                            </div>
                            <img src={avatar} alt="user-avatar" />
                            <div
                              className="d-flex me-2 flex-column text-start ms-3"
                            >
                              <span className="user-firstname">
                                {item.first_name ? item.first_name : ""}
                              </span>
                              <span className="user-firstname-email">
                                {item?.user_id?.email}
                              </span>
                            </div>
                          </div>
                        </td>
                        {/* Scrollable Middle Columns */}
                        {fields?.map(
                          (field, fieldIndex) =>
                            field.label !== "Full Name" && (
                              <td className="scrollable-col" key={fieldIndex}>
                                {field.format
                                  ? field.format(data[itemIndex][field.key])
                                  : data[itemIndex][field.key]}
                              </td>
                            )
                        )}
                        {extraCells(item)}
                      </tr>
                    ))}
                </>
              )
            }
          </tbody>
        </Table>
      </div>
      <div>
        <PaginationComponent
          page={data?.page}
          handlePage={pageChanged}
          totalPages={data?.totalPage}
        />
      </div>
    </>
  );
};

TableView.propTypes = {
  fields: propTypes.array,
  hasPagination: propTypes.bool,
  extraCells: propTypes.func,
  pageChanged: propTypes.func,
  extraHeads: propTypes.func,
};

TableView.defaultProps = {
  data: {},
  fields: [],
  hasPagination: true,
  extraCells: (item) => { },
  extraHeads: (item) => { },
  pageChanged: (item) => { },
};

export default TableView;
