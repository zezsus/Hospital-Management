import React, { useState } from "react";
import "../style/Patient.scss";
import icons from "../util/icons";
import { Link, useNavigate } from "react-router-dom";
import DropdownList from "react-widgets/DropdownList";

const { IoMdArrowRoundBack } = icons;
const listBloodGroup = ["A", "B", "O", "AB"];
const listGender = ["Male", "FeMale", "Other"];

const Patient = () => {
  const [listPatient, setListPatient] = useState([
    {
      id: "BN1",
      name: "Hoàng Thị Thúy Ngân",
      address: "Diễn Châu, Nghệ An",
      phoneNumber: "0123456789",
      age: 34,
      gender: listGender[1],
      bloodGroup: listBloodGroup[3],
      pathologie: "Đau dạ dày",
    },
    {
      id: "BN2",
      name: "Trần Trung Hiếu",
      address: "Long Biên, Hà Nội",
      phoneNumber: "01938128283",
      age: 28,
      gender: listGender[0],
      bloodGroup: listBloodGroup[1],
      pathologie: "Viêm loét dạ dày, Viêm dạ dị ứng",
    },
  ]);
  const [idPatient, setIdPatient] = useState("");
  const [namePatient, setNamePatient] = useState("");
  const [addressPatient, setAddressPatient] = useState("");
  const [phonePatient, setPhonePatient] = useState("");
  const [agePatient, setAgePatient] = useState("");
  const [genderPatient, setGenderPatient] = useState("");
  const [bloodGroupPatient, setBloodGroupPatient] = useState("");
  const [pathologiePatient, setPathologiePatient] = useState("");

  const [selectedRow, setSelectedRow] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPatient, setEditingPatient] = useState(null);

  const navigate = useNavigate();

  const handelBack = () => {
    navigate("/home");
  };

  const handelAdd = () => {
    if (
      !idPatient ||
      !namePatient ||
      !addressPatient ||
      !phonePatient ||
      !agePatient ||
      !genderPatient ||
      !bloodGroupPatient ||
      !pathologiePatient
    ) {
      console.log("Không đc để ô nào trống");
      return;
    } else {
      let newPatient = {
        id: idPatient,
        name: namePatient,
        address: addressPatient,
        phoneNumber: phonePatient,
        age: agePatient,
        gender: genderPatient,
        bloodGroup: bloodGroupPatient,
        pathologie: pathologiePatient,
      };

      setListPatient([...listPatient, newPatient]);
      console.log(genderPatient);

      handleClear();
      setIsEditing(false);
    }
  };

  const handelEdit = () => {
    if (selectedRow) {
      let patientToEditing = listPatient.find(
        (patient) => patient.id === selectedRow.id
      );
      setEditingPatient(patientToEditing);
      console.log("check data edit", patientToEditing);
      setIsEditing(true);
    }
  };

  const handelSave = () => {
    let updatePatient = listPatient.map((patient) =>
      patient.id === editingPatient.id ? editingPatient : patient
    );
    setListPatient(updatePatient);
    handleClear();
    setEditingPatient(null);
    setIsEditing(false);
  };

  const handelCancel = () => {
    setIsEditing(false);
    handleClear();
  };

  const handelDelete = () => {
    if (selectedRow) {
      let updatePatient = listPatient.filter(
        (patient) => patient.id !== selectedRow.id
      );

      setListPatient(updatePatient);
      setSelectedRow(null);
    }
  };

  const handleClear = () => {
    setIdPatient("");
    setNamePatient("");
    setAddressPatient("");
    setPhonePatient("");
    setAgePatient("");
    setGenderPatient("");
    setBloodGroupPatient("");
    setPathologiePatient("");
  };

  const handleClearSelected = () => {
    setSelectedRow(null);
    handleClear();
  };

  return (
    <div className="doctor">
      <div className="header">
        <button type="button" className="btn-back">
          <IoMdArrowRoundBack size={26} onClick={handelBack} />
        </button>
        <span className="text">PATIENT MANAGEMENT</span>
      </div>
      <div className="container">
        <div className="fs-4 fw-bold pb-3">Enter patient information</div>
        <div className="inputData d-flex">
          <div className="inputDataLeft">
            <div className="id">
              <span>Id</span>
              <input
                type="text"
                placeholder="Enter id"
                value={isEditing ? editingPatient.id : idPatient}
                onChange={(e) => {
                  setIdPatient(e.target.value);
                }}
              />
            </div>
            <div className="name">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter name"
                value={isEditing ? editingPatient.name : namePatient}
                onChange={(e) => {
                  if (isEditing) {
                    setEditingPatient((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }));
                  } else {
                    setNamePatient(e.target.value);
                  }
                }}
              />
            </div>
            <div className="address">
              <span>Address</span>
              <input
                type="text"
                placeholder="Enter address"
                value={isEditing ? editingPatient.address : addressPatient}
                onChange={(e) => {
                  if (isEditing) {
                    setEditingPatient((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }));
                  } else {
                    setAddressPatient(e.target.value);
                  }
                }}
              />
            </div>
            <div className="phone">
              <span>Phone</span>
              <input
                type="text"
                placeholder="Enter phone number"
                value={isEditing ? editingPatient.phoneNumber : phonePatient}
                onChange={(e) => {
                  if (isEditing) {
                    setEditingPatient((prev) => ({
                      ...prev,
                      phoneNumber: e.target.value,
                    }));
                  } else {
                    setPhonePatient(e.target.value);
                  }
                }}
              />
            </div>
          </div>

          <div className="inputDataRight">
            <div className="age">
              <span>Age</span>
              <input
                type="text"
                placeholder="Enter age"
                value={isEditing ? editingPatient.age : agePatient}
                onChange={(e) => {
                  if (isEditing) {
                    setEditingPatient((prev) => ({
                      ...prev,
                      age: e.target.value,
                    }));
                  } else {
                    setAgePatient(e.target.value);
                  }
                }}
              />
            </div>
            <div className="gender">
              <span>Gender</span>
              <DropdownList
                data={listGender}
                defaultValue={isEditing ? editingPatient.gender : ""}
                onChange={(value) => {
                  if (isEditing) {
                    setEditingPatient((prev) => ({
                      ...prev,
                      gender: value,
                    }));
                  } else {
                    setGenderPatient(value);
                  }
                }}
                className="cbb"
              />
            </div>
            <div className="bloodGroup">
              <span>Blood Group</span>
              <DropdownList
                data={listBloodGroup}
                defaultValue={isEditing ? editingPatient.bloodGroup : ""}
                onChange={(value) => {
                  if (isEditing) {
                    setEditingPatient((prev) => ({
                      ...prev,
                      bloodGroup: value,
                    }));
                  } else {
                    setBloodGroupPatient(value);
                  }
                }}
                className="cbb"
              />
            </div>
            <div className="pathologie">
              <span>Pathologie</span>
              <input
                type="text"
                placeholder="Enter pathologie"
                value={
                  isEditing ? editingPatient.pathologie : pathologiePatient
                }
                onChange={(e) => {
                  if (isEditing) {
                    setEditingPatient((prev) => ({
                      ...prev,
                      pathologie: e.target.value,
                    }));
                  } else {
                    setPathologiePatient(e.target.value);
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="button">
          {!isEditing ? (
            <>
              <button onClick={handelAdd}>Add</button>
              <button onClick={handelEdit}>Edit</button>
              <button onClick={handelDelete}>Delete</button>
              <button
                onClick={() => {
                  handleClear();
                  handleClearSelected();
                }}>
                Clear
              </button>
            </>
          ) : (
            <>
              <button onClick={handelSave}>Save</button>
              <button onClick={handelCancel}>Cancel</button>
            </>
          )}
        </div>

        <div className="listDoctor">
          <div className="fs-4 fw-bold pb-3">Patient information</div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Blood Group</th>
                <th scope="col">Pathologie</th>
              </tr>
            </thead>
            <tbody>
              {listPatient.map((patients) => {
                return (
                  <tr
                    key={patients.id}
                    onClick={() => {
                      setSelectedRow(patients);
                      console.log("check select row", patients);
                    }}>
                    <th
                      scope="row"
                      className={selectedRow === patients ? "selected" : ""}>
                      {patients.id}
                    </th>
                    <td className={selectedRow === patients ? "selected" : ""}>
                      {patients.name}
                    </td>
                    <td className={selectedRow === patients ? "selected" : ""}>
                      {patients.address}
                    </td>
                    <td className={selectedRow === patients ? "selected" : ""}>
                      {patients.phoneNumber}
                    </td>
                    <td className={selectedRow === patients ? "selected" : ""}>
                      {patients.age}
                    </td>
                    <td className={selectedRow === patients ? "selected" : ""}>
                      {patients.gender}
                    </td>
                    <td className={selectedRow === patients ? "selected" : ""}>
                      {patients.bloodGroup}
                    </td>
                    <td className={selectedRow === patients ? "selected" : ""}>
                      {patients.pathologie}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Link to="/patient"></Link>
    </div>
  );
};

export default Patient;
