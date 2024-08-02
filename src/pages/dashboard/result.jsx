import React from 'react'
import { useState,useEffect } from 'react';
import AddResultModal from '@/components/AddResultModal'
import EditResultModal from '@/components/EditResultModal';
import Marksheet from '@/components/marksheet/Marksheet'

import PrintComponent from '@/components/PrintComponent';
export function Result() {
    const [addResultModalForm, setAddResultModalForm] = useState(false)
    const [editResultModalForm, setEditResultModalForm] = useState(false)
    const [editIndex, setEditIndex] = useState(-1)

    const getId=()=>{
      const url = window.location.pathname; // Get the path

  // Split the path into an array using '/' as the delimiter
        const urlParts = url.split('/');

  // Assuming the ID is the last segment, access it using urlParts.length - 1
        const id = urlParts[urlParts.length - 1];
        return id;
    }
    let x=getId();
    const [submitData, setSubmitData] = useState({
        
        studentId:x,
        semester: "",
        percentage:null,
        totalMarksInWord:"",
        finalResult:"",
        result:[
                 {
                    subjectCode:"",
                    subject:"mathematics",
                    totalMarks:0,
                    obtainedMarks:100,
                    marksInWord:""
                 },
                 
                ],
            });


            const [submitEditData, setSubmitEditData] = useState([])
            
            
            const [marksheetData, setMarksheetData] = useState([])
 useEffect(() => {
    const fetchData = async () => {
         console.log(submitData)
  //       const url = window.location.pathname; // Get the path

  // // Split the path into an array using '/' as the delimiter
  //       const urlParts = url.split('/');

  // // Assuming the ID is the last segment, access it using urlParts.length - 1
  //       const id = urlParts[urlParts.length - 1];
  const id = getId();
        
      try {
        const response = await fetch(
         `${import.meta.env.VITE_BACKEND_URL}/result?studentId=${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        // console.log(jsonData)
        // setSubmitEditData(jsonData);

        setMarksheetData(jsonData)
    
      
      } catch (error) {
        console.log(error.message);
      }
    };
 
    fetchData();
  }, []);



  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(submitData);
    const {studentId,semester,percentage,totalMarksInWord,finalResult,result} =submitData;
    // console.log(submitData)
    if(!studentId || !semester || !percentage || !totalMarksInWord || !result)
    {
      alert("Fill all the fields");
      return;
    }
      // return
    try {
      // Make POST request to backend API
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/result`, {
        method: "POST",
        headers: {
          
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      // Check if request was successful
      if (response.ok) {
        const data = await response.json();
        console.log("result entry created successfully:", data);
        setAddResultModalForm(false);
        // Handle success, e.g., show success message
        window.location.reload()
      } else {
        // Handle error, e.g., show error message
        const data = await response.json();
        alert(data.error);
        console.error("Failed to create result", response.statusText);
      }
    } catch (error) {
      console.error("Error creating result", error);
      // Handle error, e.g., show error message
    }
  };
  

  // const handleSubmitEdit = async(e) => {
  //   e.preventDefault();
  //   console.log(submitEditData);
  //   const {studentId,semester,percentage,grade,finalResult,result} =submitData;
  //   // console.log(submitData)
  //   if(!studentId || !semester || !percentage || !grade || !finalResult)
  //   {
  //     alert("Fill all the fields");
  //     return;
  //   }
  //     return
  //   try {
  //     // Make POST request to backend API
  //     const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/result`, {
  //       method: "POST",
  //       headers: {
          
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(submitData),
  //     });

  //     // Check if request was successful
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("result entry created successfully:", data);
  //       setAddResultModalForm(false);
  //       // Handle success, e.g., show success message
  //       window.location.reload()
  //     } else {
  //       // Handle error, e.g., show error message
  //       const data = await response.json();
  //       alert(data.error);
  //       console.error("Failed to create result", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error creating result", error);
  //     // Handle error, e.g., show error message
  //   }
  // };
  const  handleDelete=(async(id)=>{
    console.log(id);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/result`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
         },
         body: JSON.stringify({ _id:id}),
       });
       
       const data = await response.json();
       console.log(data)
       window.location.reload()
      //  console.log(data);
     } catch (error) {
       console.error('Error:', error);
     }
  })





  
     
  return (
    <div>
    
       {/* <input onChange={async(e)=>{
         const file=e.target.value;

       }} type="file" id="fileInput" name="excelFile" accept=".xlsx, .xls"></input> */}
      {/* <PrintComponent/> */}
         <button
        onClick={()=>setAddResultModalForm(true)}
        className="py-2 rounded-xl bg-[#0000ff] text-white px-3 border-2 border-solid border-gray-300">Add Result</button>

    
        {
            addResultModalForm?<AddResultModal setAddResultModalForm={setAddResultModalForm} handleSubmit={handleSubmit} setSubmitData={setSubmitData} submitData={submitData}/>:null
        }

        {
            editResultModalForm?<EditResultModal setEditResultModalForm={setEditResultModalForm}   marksheetData={marksheetData[editIndex]}/>:null
        }

        {
           marksheetData.map((d, index) => {
          if (d) {
           return (
           <div>
            <h5 className='text-3xl font-normal text-center mb-8' >Semester-{d.semester} Result</h5>
            <div className='flex justify-around mb-4'>
            <button
               onClick={()=>{
                setEditResultModalForm(true)
                setEditIndex(index);
              }}
               className="py-2 rounded-xl bg-[#0000ff] text-white px-3 border-2 border-solid border-gray-300">Edit button</button>
            <button
               onClick={()=>handleDelete(d._id)}
               className="py-2 rounded-xl bg-[#0000ff] text-white px-3 border-2 border-solid border-gray-300">Delete button</button>
            </div>
            <Marksheet marksheetData={d} key={index} />
            </div>);
         }
           return null;
  })
}
        
    </div>
  )
}
