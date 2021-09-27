import React, { useRef } from "react";

const Modal = (props) => {
  const nameRef = useRef();
  const fnameRef = useRef();
  const castRef = useRef();
  const gradeRef = useRef();
  const grnoRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    if (
      nameRef.current.value &&
      fnameRef.current.value &&
      castRef.current.value &&
      gradeRef.current.value  &&
      grnoRef.current.value
    ) {
      const newRecord = {
          name: nameRef.current.value,
          fname: fnameRef.current.value,
          cast: castRef.current.value,
          grade: gradeRef.current.value,
          grno: grnoRef.current.value
      }
      props.addRecord([...props.allRecords, newRecord ]);
      props.toggleModal();
    }
  }

  return (
    <div
      className="w-full h-full absolute bg-[#00000055] flex justify-center items-center"
      onSubmit={submitHandler}
    >
      <form className="flex flex-col gap-2 bg-gray-100 rounded overflow-hidden text-center font-poppins relative">
        <img
          src="images/close.svg"
          className="w-4 h-auto absolute right-5 top-4 cursor-pointer"
          onClick={props.toggleModal}
        />
        <h2 className="text-xl text-blue-700 font-bold border-b border-gray-300 py-3">Add Student</h2>
        <div className="w-max flex flex-col gap-4 px-6 py-4">
          <input
            type="text"
            className="py-2 px-3 sm:text-lg rounded border xs:w-72 border-gray-200"
            placeholder="GR No."
            ref={grnoRef}
          />
          <input
            type="text"
            className="py-2 px-3 sm:text-lg rounded border xs:w-72 border-gray-200"
            placeholder="Name"
            ref={nameRef}
          />
          <input
            type="text"
            className="py-2 px-3 sm:text-lg rounded border xs:w-72 border-gray-200"
            placeholder="Father's Name"
            ref={fnameRef}
          />
          <input
            type="text"
            className="py-2 px-3 sm:text-lg rounded border xs:w-72 border-gray-200"
            placeholder="Cast"
            ref={castRef}
          />
          <input
            type="text"
            className="py-2 px-3 sm:text-lg rounded border xs:w-72 border-gray-200"
            placeholder="Class"
            ref={gradeRef}
          />
        </div>
        <button
          type="submit"
          className="font-bold text-lg py-2 px-3 bg-blue-700 text-white hover:text-gray-300"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Modal;
