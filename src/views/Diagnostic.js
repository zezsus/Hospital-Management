import React from "react";
import "../style/Diagnostic.scss";
import icons from "../util/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const { IoMdArrowRoundBack } = icons;

const Diagnostic = () => {
  const [listDiagnostic, setListDiagnostic] = useState([
    {
      id: "DI1",
      name: "Hoàng Thị Thúy Ngân",
      symptom: "đau bụng",
      diagnostic: "đau dạ dày",
      medicine: "thuốc dạ dày",
    },
  ]);
  const [idDiagnostic, setIdDiagnostic] = useState("");
  const [nameDiagnostic, setNameDiagnostic] = useState("");
  const [symptomsDiagnostic, setSymptomsDiagnostic] = useState("");
  const [diagnostic, setDiagnostics] = useState("");
  const [medicinesDiagnostic, setMedicinesDiagnostic] = useState("");

  const [editingDiagnostic, setEditingDiagnostic] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  const handleAdd = () => {
    if (
      !idDiagnostic ||
      !nameDiagnostic ||
      !diagnostic ||
      !symptomsDiagnostic ||
      !medicinesDiagnostic
    ) {
      console.log("KO ĐC ĐỂ TRỐNG");
    } else {
      let newDiagnostic = {
        id: idDiagnostic,
        name: nameDiagnostic,
        symptom: symptomsDiagnostic,
        diagnostic: diagnostic,
        medicine: medicinesDiagnostic,
      };

      setListDiagnostic([...listDiagnostic, newDiagnostic]);
      handleClear();
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    if (selectedRow) {
      let selectDiagnostic = listDiagnostic.find(
        (diagnostic) => diagnostic.id === selectedRow.id
      );
      setEditingDiagnostic(selectDiagnostic);
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    let upadteData = listDiagnostic.map((diagnostic) =>
      diagnostic.id === editingDiagnostic.id ? editingDiagnostic : diagnostic
    );
    setListDiagnostic(upadteData);
    handleClear();
    setEditingDiagnostic(null);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (selectedRow) {
      let updateDiagnostic = listDiagnostic.filter(
        (diagnostic) => diagnostic.id !== selectedRow.id
      );
      setListDiagnostic(updateDiagnostic);
      setSelectedRow(null);
    }
  };

  const handleClear = () => {
    setIdDiagnostic("");
    setNameDiagnostic("");
    setSymptomsDiagnostic("");
    setDiagnostics("");
    setMedicinesDiagnostic("");
    setSelectedRow(null);
  };

  const handleCancel = () => {
    handleClear();
    setIsEditing(false);
  };

  return (
    <div className="doctor">
      <div className="header">
        <button type="button" className="btn-back">
          <IoMdArrowRoundBack size={26} onClick={handleBack} />
        </button>
        <span className="text">DIAGNOSIS</span>
      </div>

      <div className="container">
        <div className="fs-4 fw-bold pb-3">Enter diagnostics</div>
        <div className="inputData">
          <div className="inputDataLeft">
            <div className="id">
              <span>Id</span>
              <input
                type="text"
                placeholder="Enter id"
                value={isEditing ? editingDiagnostic.id : idDiagnostic}
                onChange={(e) => {
                  setIdDiagnostic(e.target.value);
                }}
              />
            </div>
            <div className="name">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter name"
                value={isEditing ? editingDiagnostic.name : nameDiagnostic}
                onChange={(e) => {
                  if (isEditing) {
                    setEditingDiagnostic((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }));
                    console.log(nameDiagnostic);
                  } else {
                    setNameDiagnostic(e.target.value);
                  }
                }}
              />
            </div>
          </div>
          <div className="inputDataRight">
            <div className="symptoms">
              <span>Symptom</span>
              <input
                type="text"
                placeholder="Enter symptoms"
                value={
                  isEditing ? editingDiagnostic.symptom : symptomsDiagnostic
                }
                onChange={(e) => {
                  if (isEditing) {
                    setEditingDiagnostic((prev) => ({
                      ...prev,
                      symptom: e.target.value,
                    }));
                  } else {
                    setSymptomsDiagnostic(e.target.value);
                  }
                }}
              />
            </div>
            <div className="diagnosis">
              <span>Diagnosi</span>
              <input
                type="text"
                placeholder="Enter diagnosis"
                value={isEditing ? editingDiagnostic.diagnostic : diagnostic}
                onChange={(e) => {
                  if (isEditing) {
                    setEditingDiagnostic((prev) => ({
                      ...prev,
                      diagnostic: e.target.value,
                    }));
                  } else {
                    setDiagnostics(e.target.value);
                  }
                }}
              />
            </div>
            <div className="medicines">
              <span>Medicine</span>
              <input
                type="text"
                placeholder="Enter medicines"
                value={
                  isEditing ? editingDiagnostic.medicine : medicinesDiagnostic
                }
                onChange={(e) => {
                  if (isEditing) {
                    setEditingDiagnostic((prev) => ({
                      ...prev,
                      medicine: e.target.value,
                    }));
                  } else {
                    setMedicinesDiagnostic(e.target.value);
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="button">
          {!isEditing ? (
            <>
              <button onClick={handleAdd}>Add</button>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
              <button
                onClick={() => {
                  handleClear();
                }}>
                Clear
              </button>
            </>
          ) : (
            <>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          )}
        </div>

        <div className="listDoctor">
          <div className="fs-4 fw-bold pb-3">Diagnostic information</div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Symptoms</th>
                <th scope="col">Diagnosis</th>
                <th scope="col">Medicines</th>
              </tr>
            </thead>
            <tbody>
              {listDiagnostic.map((items) => {
                return (
                  <tr
                    key={items.id}
                    onClick={() => {
                      setSelectedRow(items);
                    }}>
                    <th
                      scope="row"
                      className={selectedRow === items ? "selected" : ""}>
                      {items.id}
                    </th>
                    <td className={selectedRow === items ? "selected" : ""}>
                      {items.name}
                    </td>
                    <td className={selectedRow === items ? "selected" : ""}>
                      {items.symptom}
                    </td>
                    <td className={selectedRow === items ? "selected" : ""}>
                      {items.diagnostic}
                    </td>
                    <td className={selectedRow === items ? "selected" : ""}>
                      {items.medicine}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Link to="/diagnostic"></Link>
    </div>
  );
};

export default Diagnostic;
