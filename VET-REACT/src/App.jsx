import { useState,useEffect } from "react";
function App() {
  const [name,setName]=useState("");
  const [name,setEmail]=useState("");
  const [name,setDepartment]=useState("");
  const [name,setAge]=useState("");

  const [students,setStudent]=useState([]);

  const [editIndex,setEditIndex]=useState(null);
  useEffect(() => {
    const savedStudents= JSON.parse(
      localStorage.getItem("student")
    )
  }
  ,
      
    [] )
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    }}
    >
      <H1
        style={{
          textAlign: "center"
        }}
        >
        Hello, World!
      </H1>
      <input
      type="text"
      placeholder="Type something..."
      value={name}
      onChange={(e) => //change the data whenever we give data  
        setName(e.target.value)
      }
      style={inputStyle}
      />
      <input 
      type="text"
      placeholder="enter Email"
      value={name}
      onChange={(e) => 
        setName(e.target.value)
      }
      style={inputStyle}
      />
      <input
      type="text"
      placeholder="Enter Department"
      value={name}
      onChange={(e) => 
        setName(e.target.value)
      }
      style={inputStyle}
      />
      <input
      type="text"
      placeholder="Enter Age"
      value={name}
      onChange={(e) => 
        setName(e.target.value)
      }
      style={inputStyle}
      />
      <button>
        onclick={handleSubmit}
        style={buttonStyle}
        {
          editIndex !== null
          ?
          "update student"
          :
          "add student"
        }
        <h2>
          Student list
        </h2>
      </button>
      <table
        border="1"
        cellPadding="10"
        style={{

          width:"100%",
          borderCollapse:"collapse"
        }}
        >
          <thead>
            <tr>
              <th>name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map(
                (student,index) => (
                  <tr key={index}>
                    <td>
                      {student.name}
                    </td>
                    <td>
                      {student.Email}
                    </td>
                    <td>
                      {student.Department}
                    </td>
                    <td>
                      {student.Age}
                    </td>
                    <td>
                      <button
                        onclick={() =>
                        handleEdit(index)
                        }
                        >
                        Edit
                      </button>
                      <button
                        onClick={() =>
                          handleDelete(index)
                        }
                        style={{
                          marginLeft:"10px"
                        }}
                        >
                          Delete
                      </button>
                    </td>
                    </tr>

                )
              )
            }
          </tbody>
      </table>
    </div>
  );
}