import React from "react";

const Row = (props) => {
    return(
        <div className="border-b border-indigo-600 flex font-poppins bg-white">
            <p className="p-2 border-r text-center text-sm border-indigo-600 w-20 xs:text-base xs:w-28 sm:w-40">{props.name}</p>
            <p className="p-2 border-r text-center text-sm border-indigo-600 w-20 xs:text-base xs:w-28 sm:w-40 ">{props.fname}</p>
            <p className="p-2 border-r text-center text-sm border-indigo-600 w-20 xs:text-base xs:w-28 sm:w-40">{props.cast}</p>
            <p className="p-2 text-center text-sm xs:text-base w-20 xs:w-28 sm:w-40">{props.grade}</p>
        </div>
    )
}

export default Row;
