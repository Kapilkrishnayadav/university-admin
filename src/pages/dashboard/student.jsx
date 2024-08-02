// vendors
import { useEffect,useState } from "react";
import DataTable from "react-data-table-component"
import AddStudentModal from "@/components/AddStudentModal";
import EditStudentModal from "@/components/EditStudentModal";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


const customStyles = {
  headRow: {
    style: {
      backgroundColor: 'blue',
      color: 'white',
      fontWeight: 'bold',
    },
  },
  headCells: {
    style: {
      fontSize: '14px',
      width:'250px',
      textTransform: 'uppercase',
      // minWidth: '50%'
    },
  },
  cells: {
    style: {
      fontSize: '14px',
      // width: '300px',
      padding: '8px 16px', // Adjust padding for cell content
      // minWidth: '50%'
    },
  }
}


export function Student() {
  const [records, setRecords] = useState([])
   const [filterRecords, setFilterRecords] = useState([])
   const [filterBy, setFilterBy] = useState("_id");
  const [deleteData, setDeleteData] = useState([])
   const [submitData, setSubmitData] = useState({
  
     name: "",
     dob: "",
     fatherName: "",
     batch: "",
     class_: "",
     rollNo: "",
     branch: "",
  
  });
  const [submitEditData, setSubmitEditData] = useState({
  
    name: "",
    dob: "",
    fatherName: "",
    batch: "",
    class_: "",
    rollNo: "",
    branch: "",
 
  });
  // const [addVendorModal, setaddVendorModal] = useState(false)
   const [addStudentModalForm, setAddStudentModalForm] = useState(false)
   const [editStudentModalForm, setEditStudentModalForm] = useState(false)
  useEffect(() => {
     const fetchData = async () => {

       try {
         const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/student`
         );
         if (!response.ok) {
           throw new Error("Failed to fetch data");
         }
         const jsonData = await response.json();
         setRecords(jsonData);
         setFilterRecords(jsonData);
        //  console.log(jsonData)
       } catch (error) {
         console.log(error.message);
       }
     };
  
     fetchData();
   }, []);

   const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(submitData);
    const {name,dob,fatherName,batch,class_,rollNo,branch} =submitData;
    console.log(submitData)
    if(!name || !dob|| !fatherName || !batch || !class_ || !rollNo || !branch)
    {
      alert("Fill all the fields");
      return;
    }
      // return;
    try {
      // Make POST request to backend API
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/student`, {
        method: "POST",
        headers: {
          
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      // Check if request was successful
      if (response.ok) {
        const data = await response.json();
        console.log("Parking entry created successfully:", data);
        setAddStudentModalForm(false);
        // Handle success, e.g., show success message
        window.location.reload()
      } else {
        // Handle error, e.g., show error message
        const data = await response.json();
        alert(data.error);
        console.error("Failed to create vendor:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating vendor:", error);
      // Handle error, e.g., show error message
    }
  };
  
  function extractToken(cookieString) {
    const cookies = cookieString.split(';'); // Split into individual cookies
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('='); 
        // Split each cookie into name-value pair
        if (name === 'token') { // Check if the name matches the token cookie
            return value;
        }
    }
    return null; // If token cookie not found, return null
}
  
  const openEditForm=((row)=>{
    // console.log(row);
    setSubmitEditData({...submitEditData,...row});
    setEditStudentModalForm(true)
    
  })
  const handleSubmitEdit = async(e) => {
    e.preventDefault();
    console.log(submitEditData);
    const {name,dob,fatherName,batch,class_,rollNo,branch} =submitEditData;
    
    if(!name || !dob|| !fatherName || !batch || !class_ || !rollNo || !branch)
    {
      alert("Fill all the fields");
      return;
    }

      const token = extractToken(document.cookie);
      console.log(token);
      const authHeader = `Bearer ${token}`;
      
    try {
      // Make POST request to backend API
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/student`, {
        method: "PUT",
        headers: {
          'Authorization': authHeader,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitEditData),
      });

      // Check if request was successful
      if (response.ok) {
        const data = await response.json();
        console.log("Parking entry updated successfully:", data);
        setEditStudentModalForm(false);
        // Handle success, e.g., show success message
        window.location.reload()
      } else {
        // Handle error, e.g., show error message
        const data = await response.json();
        alert(data.error);
        console.error("Failed to create vendor:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating vendor:", error);
      // Handle error, e.g., show error message
    }
  };

   const handleDelete=(async()=>{
    console.log(deleteData)
     try {
       const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/student`, {
         method: 'DELETE',
         headers: {
           'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ids:deleteData}),
        });
        
        const data = await response.json();
        console.log(deleteData)
        window.location.reload()
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
   })

  //  const handleFilter=((e)=>{
  //   const newData=filterRecords.filter((row)=>row[filterBy].toLowerCase().includes(event.target.value.toLowerCase())) 
  //   setRecords(newData)
  // })

  // const handleFilter = ((e) => {
  //   const newData = filterRecords.filter((row) => {
  //     let value = row[filterBy];
  //     if (typeof value === 'number') {
  //       value = value.toString();
  //     }
  //     return value.toLowerCase().includes(e.target.value.toLowerCase());
  //   });
  //   setRecords(newData);
  // });

  const handleFilter = ((e) => {
    const searchValue = e.target.value.toLowerCase();
    const newData = filterRecords.filter((row) => {
        let value = row[filterBy];
        if (typeof value === 'number') {
            value = value.toString();
        } else if (typeof value === 'string') {
            value = value.toLowerCase();
        }
        return value.includes(searchValue);
    });
    setRecords(newData);
});



   const column=[
     {
       name:"Edit",
       width:"100px",
       cell: (row) => (
     <div  >
      <PencilIcon onClick={()=>openEditForm(row)} className="h-4 w-4 text-blue-500"/>
     </div>
   ),
  
  },
    {
      name:"Student ID",
      selector: row => row._id,
      width:"300px"
    },
    {
      name:"Name",
       selector: row => row.name,
       width:"200px",
       sortable:true
     },
     {
       name:"Roll no",
       selector: row => row.rollNo,
       width:"125px",
       sortable:true
     },
     {
       name:"Father Name",
       selector: row => row.fatherName,
       width:"200px",
       sortable:true
     },
     {
       name:"dateOfBirth",
       selector: row => row.dob,
       width:"200px",
       sortable:true
     },
     {
       name:"Batch",
       selector: row => row.batch,
       width:"155px",
       sortable:true
     },
     {
       name:"Class",
       selector: row => row.class_,
       width:"155px",
       sortable:true
       
      },
     {
       name:"Branch",
       selector: row => row.branch,
       width:"155px",
       sortable:true
     },
     {
      name:"Result",
      width:"100px",
      cell: (row) => (
    <div >
      <Link to={"/dashboard/result/"+row._id}>
      view result
      </Link>
     {/* <PencilIcon onClick={()=>openEditForm(row)} className="h-4 w-4 text-blue-500"/> */}
    </div>
  ),
 
 },

   ]

  return (
    <>
    <div className="mt-12 mb-8 flex flex-col " >

    <div className="flex sm:flex-row flex-col justify-between mb-2 ">
        <div>

        <button
        onClick={setAddStudentModalForm}
        className="py-2 rounded-xl bg-[#0000ff] text-white px-3 border-2 border-solid border-gray-300">Add Student</button>
        <button
        onClick={handleDelete}
        className="py-2 rounded-xl bg-[#0000ff] text-white px-3 border-2 border-solid border-gray-300">Delete Student</button>
       
        </div>
        <div>

       <select className="block w-40 px-4 py-2 my-2 text-gray-800 bg-white border border-gray-300 rounded-md   focus:outline-none focus:ring" id="gender" name="gender"
                  onChange={(e) =>
                    setFilterBy( e.target.value )
                  }
                  >
                      <option value=""  disabled selected hidden>Search on</option>
                      <option value="name">Name</option>
                      <option value="rollNo">Roll NO</option>
                      <option value="fatherName">Father Name</option>
                      <option value="batch">Batch</option>
                      <option value="class_">Class</option>
                    
                      
        </select>

        <input onChange={handleFilter} className="py-2 px-3 border-2 border-solid border-gray-300" type="text" placeholder="search..." />
          </div>
      </div>
      <DataTable columns={column} data={records}
      customStyles={customStyles}
      pagination
      selectableRows
      // expandableRows={true}
      onSelectedRowsChange={(e)=> setDeleteData(e.selectedRows) }
      ></DataTable>
      {
        addStudentModalForm?<AddStudentModal setAddStudentModalForm={setAddStudentModalForm} handleSubmit={handleSubmit} setSubmitData={setSubmitData} />:null
      }
      {
        editStudentModalForm?<EditStudentModal setEditStudentModalForm={setEditStudentModalForm} handleSubmitEdit={handleSubmitEdit} setSubmitEditData={setSubmitEditData} submitEditData={submitEditData} />:null
      }
      </div>
    </>
  );
}

export default Student;
