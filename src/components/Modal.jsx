import React, { useRef } from "react";

const Modal = (props) => {

  const nameRef = useRef();
  const fnameRef = useRef();
  const castRef = useRef();
  const gradeRef = useRef();

  function submitHandler(e){
    e.preventDefault();

    if(nameRef.current.value && fnameRef.current.value && castRef.current.value && gradeRef.current.value){
        console.log('Eligible');
    }
    
  }

  return (
    <div className="w-full h-full absolute bg-[#00000055] flex justify-center items-center" onSubmit={submitHandler}>
      <form className="flex flex-col items-center p-8 bg-gray-100 rounded gap-4 text-center font-poppins relative">
        <img
          src="images/close.svg"
          className="w-4 h-auto absolute right-5 top-4 cursor-pointer"
          onClick={props.toggleModal}
        />
        <h2 className="text-xl font-bold">Add Student</h2>
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
          placeholder="Grade"
          ref={gradeRef}
        />
        <button type="submit" className="font-bold py-1 px-3 bg-black text-white rounded-full hover:bg-transparent hover:text-black border border-black active:text-gray-800">
          Add
        </button>
      </form>
    </div>
  );
};

export default Modal;
