import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Form(props) {
  // Lấy props từ cha
  // Cách 1
  const handleCloseForm = props.handleCloseForm;
  const listStudent = props.listStudent;
  const loadData = props.loadData;
  // Cách 2
  // const { handleCloseForm } = props;

  // Hàm đóng form
  const handleClose = () => {
    handleCloseForm();
  };

  // Khai báo state
  const [student, setStudent] = useState({
    studentName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  // Hàm lắng nghr và lấy dữ liệu từ các ô input
  const handleChange = (e) => {
    // Lấy value và name của từng ô input khi nhập
    // Cách 1:
    const name = e.target.name;
    const value = e.target.value;
    // Cách 2:
    // const { name, value } = e.target;
    // set state cho student
    setStudent({ ...student, [name]: value });
  };

  // Hàm submit
  const handleSubmit = (e) => {
    //B1. Ngặn chặn sự kiện mặc định của form
    e.preventDefault();
    //B2. Tạo đối tượng student mới
    const newStudent = { ...student, studentId: uuid() };
    // Bảo lưu các giá trị trong mảng cũ và thêm student mới vào
    const newListStudent = [...listStudent, newStudent];

    //B3. Đẩy dữ liệu lên local
    localStorage.setItem("students", JSON.stringify(newListStudent));
    // B4. Đóng form
    handleClose();
    // B5. Tải lại dữ liệu bằng cách truyền props ngược từ con lên cha
    loadData(newListStudent);
  };

  return (
    <>
      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Thêm mới sinh viên</h4>
                <button type="button" className="close" onClick={handleClose}>
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Tên sinh viên</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    name="studentName"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label>Địa chỉ</label>
                  <textarea
                    className="form-control"
                    required=""
                    onChange={handleChange}
                    name="address"
                  />
                </div>
                <div className="form-group">
                  <label>Số điện thoại</label>
                  <input
                    onChange={handleChange}
                    name="phoneNumber"
                    type="text"
                    className="form-control"
                    required=""
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={handleClose}
                  type="button"
                  className="btn btn-default"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
