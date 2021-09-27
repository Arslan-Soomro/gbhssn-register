import React, { useState } from 'react';
import Row from "./components/Row";
import Modal from './components/Modal';

function App() {

  const [displayModal, setDisplayModal] = useState(true);

  function addClickHandler () {
    if(displayModal){
      setDisplayModal(false);
    }else{
      setDisplayModal(true);
    }
  }


  return (
    <div className="App h-full">
      {displayModal ? <Modal toggleModal={addClickHandler} /> : null}

      {/* Nav */}
      <div className=" border-black flex items-center justify-between px-8 py-3 bg-white border-b border-indigo-600">
        <div className="text-center font-poppins text-indigo-500">
          <p className="font-bold">GBHSS</p>
          <p className="font-bold">Naudero</p>
        </div>
        <button className="rounded-full text-gray-800 px-3 py-1 font-poppins bg-indigo-100 hover:bg-indigo-200">Add</button>
      </div>

      {/* Records */}
      <div className="border border-indigo-600 mx-auto w-max h-64">
        <div>
          <Row name="Name" fname="Father's Name" cast="Cast" grade="Grade" />
        </div>
        <button className="block font-bold my-4 mx-auto border border-indigo-600 px-3 py-1 rounded-md text-indigo-600 hover:bg-indigo-600 hover:text-white" onClick={addClickHandler}>Add</button>
      </div>
    </div>
  )
}

export default App;