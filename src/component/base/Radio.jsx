import React, { useState } from "react";

export default function Radio() {
  const listGender = [
    {
      id: 0,
      title: "Nam",
    },
    {
      id: 1,
      title: "Nữ",
    },
    {
      id: 2,
      title: "Khác",
    },
  ];
  const [value, setValue] = useState(0);

  const handleCheck = (id) => {
    // Cập nhật lại state để lấy value của checkbox
    setValue(id);
  };

  return (
    <div style={{ margin: 200 }}>
      {listGender.map((gender) => (
        <div>
          <label htmlFor="male">{gender.title}</label>
          <input
            checked={gender.id === value}
            type="radio"
            onChange={(e) => handleCheck(gender.id)}
          />
        </div>
      ))}
    </div>
  );
}
