import React, { useState } from "react";
import "../style/Doctor.scss";
import icons from "../util/icons";
import { Link, useNavigate } from "react-router-dom";

const { IoMdArrowRoundBack } = icons;

const Doctor = () => {
  const navigate = useNavigate();

  const [listDoctors, setListDoctors] = useState([
    {
      id: 1234,
      name: "Philippe Macaire",
      password: "123456",
      exp: 3,
    },
    {
      id: 412471,
      name: "Sergii Bukhtii",
      password: "123456",
      exp: 4,
    },
  ]);

  const [ids, setIds] = useState("");
  const [names, setNames] = useState("");
  const [passwords, setPasswords] = useState("");
  const [exps, setExps] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState(null);

  const handelBack = () => {
    navigate("/home");
  };

  const handelAdd = () => {
    if (!ids || !names || !passwords || !exps) {
      console.log("Please fill in all the fields.");
      return; // Ngừng thực hiện logic thêm nếu có trường rỗng
    } else {
      let newDoctor = {
        id: ids,
        name: names,
        password: passwords,
        exp: exps,
      };

      setListDoctors([...listDoctors, newDoctor]);
      setIds("");
      setNames("");
      setPasswords("");
      setExps("");
    }
  };
  const handelEdit = () => {
    if (selectedRow) {
      let doctorToEditing = listDoctors.find(
        (doctor) => doctor.id === selectedRow.id
      );
      setEditingDoctor(doctorToEditing);
      setIsEditing(true);
      console.log(doctorToEditing);
    }
  };
  const handelSave = () => {
    let updateDoctor = listDoctors.map((doctor) =>
      doctor.id === editingDoctor.id ? editingDoctor : doctor
    );
    setListDoctors(updateDoctor);
    setEditingDoctor(null);
    handleClear();
    setIsEditing(false);
  };

  const handelCancel = () => {
    setIsEditing(false);
    handleClear();
  };

  const handelDelete = () => {
    if (selectedRow) {
      let updateListDoctor = listDoctors.filter(
        (doctor) => doctor.id !== selectedRow.id
      );
      setListDoctors(updateListDoctor);
      setSelectedRow(null);
    }
  };

  const handleClear = () => {
    setIds("");
    setNames("");
    setPasswords("");
    setExps("");
    setSelectedRow(null);
  };

  return (
    <div className="doctor">
      <div className="header">
        <button type="button" className="btn-back">
          <IoMdArrowRoundBack size={26} onClick={() => handelBack()} />
        </button>
        <span className="text">DOCTOR MANAGEMENT</span>
      </div>

      <div className="container">
        <div className="fs-4 fw-bold pb-3">Enter doctor information</div>
        <div className="inputData">
          <div className="id">
            <span>Id</span>
            <input
              type="text"
              placeholder="Enter id"
              value={isEditing ? editingDoctor.id : ids}
              onChange={(e) => {
                setIds(e.target.value);
              }}
            />
          </div>
          <div className="name">
            <span>Name</span>
            <input
              type="text"
              placeholder="Enter name"
              value={isEditing ? editingDoctor.name : names}
              onChange={(e) => {
                if (isEditing) {
                  setEditingDoctor((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                } else {
                  setNames(e.target.value);
                }
              }}
            />
          </div>
          <div className="password">
            <span>Password</span>
            <input
              type="text"
              placeholder="Enter password"
              value={isEditing ? editingDoctor.password : passwords}
              onChange={(e) => {
                if (isEditing) {
                  setEditingDoctor((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                } else {
                  setPasswords(e.target.value);
                }
              }}
            />
          </div>
          <div className="exp">
            <span>Experience</span>
            <input
              type="text"
              placeholder="Enter experience"
              value={isEditing ? editingDoctor.exp : exps}
              onChange={(e) => {
                if (isEditing) {
                  setEditingDoctor((prev) => ({
                    ...prev,
                    exp: e.target.value,
                  }));
                } else {
                  setExps(e.target.value);
                }
              }}
            />
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
          <div className="fs-4 fw-bold pb-3">Doctor information</div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Password</th>
                <th scope="col">Experience</th>
              </tr>
            </thead>
            <tbody>
              {listDoctors.map((items) => {
                return (
                  <tr
                    key={items.id}
                    onClick={() => {
                      setSelectedRow(items);
                      console.log(items);
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
                      {items.password}
                    </td>
                    <td className={selectedRow === items ? "selected" : ""}>
                      {items.exp}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Link to="/doctor"></Link>
    </div>
  );
};

export default Doctor;
