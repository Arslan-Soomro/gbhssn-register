import React, { useState } from "react";
import Row from "./components/Row";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [rowData, setRowData] = useState([
    {name: 'Arslan', fname:'Nizam-u-din', cast: 'soomro', grade:'12th'},
    {name: 'Asim', fname:'Nizam-u-din', cast: 'soomro', grade:'11th'}
  ]);

  function addClickHandler() {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }



  return (
    <div className="App h-full">
      {showModal ? <Modal toggleModal={addClickHandler} allRecords={rowData} addRecord={setRowData} /> : null}
      <div className="font-poppins border h-full flex flex-col items-center xs:px-4 py-4">
        <h1 className="text-center font-bold text-2xl my-6">GBHSS Naudero</h1>
        <div className="rounded-md container overflow-y-auto bg-white shadow-lg">
          <table className="w-full">
            <thead className="text-left text-white bg-black">
              <tr>
                <th className="px-3 py-2 text-xs xs:text-sm sm:text-lg">Name</th>
                <th className="px-3 py-2 text-xs xs:text-sm sm:text-lg">Father's Name</th>
                <th className="px-3 py-2 text-xs xs:text-sm sm:text-lg">Cast</th>
                <th className="px-3 py-2 text-xs xs:text-sm sm:text-lg">Grade</th>
              </tr>
            </thead>
            <tbody className="">
              {rowData.map((data, i) => <Row key={i} name={data.name} fname={data.fname} cast={data.cast} grade={data.grade} />)}
            </tbody>
          </table>
        </div>
        <button className="rounded-full mt-8 px-4 py-2 font-poppins font-bold text-white text-sm sm:text-base bg-black" onClick={addClickHandler}>
          Add Student
        </button>
      </div>
    </div>
  );
}

export default App;
