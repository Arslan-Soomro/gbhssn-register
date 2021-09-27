import React, { useState } from "react";
import Row from "./components/Row";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [rowData, setRowData] = useState([
    { grno: '12385', name: 'Kashif', fname:'Wahid', cast: 'Abro', grade:'Tenth'},
    { grno: '23485', name: 'Suhail', fname:'Kareem', cast: 'Dayo', grade:'Ninth'}
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
        <h1 className="text-center text-blue-700 font-bold text-2xl my-6">GBHSS Naudero</h1>
        <div className="rounded-md container overflow-y-auto bg-white shadow-md">
          <table className="w-full">
            <thead className="text-left text-white bg-blue-700">
              <tr>
                <th className="px-3 py-2 text-xs xs:text-sm sm:text-lg">GR No.</th>
                <th className="px-3 py-2 text-xs xs:text-sm sm:text-lg">Name</th>
                <th className="px-3 py-2 text-xs xs:text-sm sm:text-lg">Father's Name</th>
                <th className="px-3 py-2 text-xs xs:text-sm sm:text-lg">Cast</th>
                <th className="px-3 py-2 text-xs xs:text-sm sm:text-lg">Class</th>
              </tr>
            </thead>
            <tbody className="">
              {rowData.map((data, i) => <Row key={i} grno={data.grno} name={data.name} fname={data.fname} cast={data.cast} grade={data.grade} />)}
            </tbody>
          </table>
        </div>
        <button className="rounded-full mt-8 px-4 py-2 font-poppins font-bold text-white text-sm sm:text-base bg-blue-700" onClick={addClickHandler}>
          Add Student
        </button>
      </div>
    </div>
  );
}

export default App;
