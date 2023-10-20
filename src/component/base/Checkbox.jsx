import React, { useState } from "react";

export default function Checkbox() {
  const listJob = [
    {
      id: 0,
      job: "Java backend developer",
    },
    {
      id: 1,
      job: "Javascript backend developer",
    },
    {
      id: 2,
      job: "C# backend developer",
    },
    {
      id: 3,
      job: "Python backend developer",
    },
  ];

  // Mảng chưa danh sách công việc được chọn
  const [selectedJob, setSelectedJob] = useState([]);
  console.log("selectedJob", selectedJob);

  // Hàm xử lý checkbox
  const handleCheck = (id) => {
    // Kiểm tra xem id đã tồn tại trong mảng chưa?
    if (selectedJob.includes(id)) {
      // Nếu như id đã tồn tại trong mảng thì lọc ra những giá trị khác với id được check
      setSelectedJob(selectedJob.filter((job) => job !== id));
    } else {
      // Nếu không tồn tại thì push vào trong mảng
      setSelectedJob([...selectedJob, id]);
    }
  };

  return (
    <div style={{ margin: 100 }}>
      {listJob.map((j) => (
        <>
          <div>
            <input
              type="checkbox"
              onChange={() => handleCheck(j.id)}
              checked={selectedJob.includes(j.id)}
            />
            {j.job}
          </div>
        </>
      ))}
    </div>
  );
}
