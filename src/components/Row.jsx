import React from "react";

const Row = (props) => {
  return (
    <tr className="border-b border-gray-300 h-max">
      <td className="px-3 py-2 text-sm xs:text-base sm:text-lg border-r border-gray-300">
        {props.name}
      </td>
      <td className="px-3 py-2 text-sm xs:text-base sm:text-lg border-r border-gray-300">
        {props.fname}
      </td>
      <td className="px-3 py-2 text-sm xs:text-base sm:text-lg border-r border-gray-300">
        {props.cast}
      </td>
      <td className="px-3 py-2 text-sm xs:text-base sm:text-lg">
        {props.grade}
      </td>
    </tr>
  );
};

export default Row;
