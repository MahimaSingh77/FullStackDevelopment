import React from "react";

const Filter = (props) => {
  let filterData = props.filterData;
  return (
    <div>
      {filterData.map((data) => {
        <button>{data.title} </button>
      })}
    </div>
  );
};

export default Filter;
