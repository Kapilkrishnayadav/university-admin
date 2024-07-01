import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
const EditResultModal = ({setEditResultModalForm,marksheetData}) => {
    // const [addVendorModalForm, setAddVendorModalForm] = useState(false)
    const [noOfSubjects, setnoOfSubjects] = useState(marksheetData.result.length);
    const [submitEditData, setSubmitEditData] = useState(marksheetData);
    const handleSubmit=async(e)=>{
        e.preventDefault();
    // console.log(submitEditData);
    const {studentId,semester,percentage,totalMarksInWord,finalResult,result} =submitEditData;
    console.log(submitEditData)
    if(!studentId || !semester || !percentage || !totalMarksInWord || !finalResult || !result)
    {
      alert("Fill all the fields");
      return;
    }
    //   return
    try {
      // Make POST request to backend API
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/result`, {
        method: "PUT",
        headers: {
          
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitEditData),
      });

      // Check if request was successful
      if (response.ok) {
        const data = await response.json();
        console.log("result entry created successfully:", data);
        setEditResultModalForm(false);
        // Handle success, e.g., show success message
        window.location.reload()
      } else {
        // Handle error, e.g., show error message
        const data = await response.json();
        alert(data.error);
        console.error("Failed to update result", response.statusText);
      }
    } catch (error) {
      console.error("Error update result", error);
      // Handle error, e.g., show error message
    }

    }
  
  return (
    <div>
         <div className="Modal_container z-10 flex items-start h-[90vh]  overflow-y-scroll py-8  fixed top-10 w-[100vw] justify-center ">
          <section className="flex justify-center items-center   p-6 mx-auto bg-gray-700 rounded-md shadow-md">
            <div>
              <p className="border-b-2 w-[18rem] border-[#10b981]  mb-8 text-center  text-xl font-bold text-gray-300 capitalize ">
                Edit Result 
              </p>

              <div className="flex flex-wrap">
                

                <div className="Title__ my-1 mr-8 ">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Semester
                  </label>
                  <input
                  value={submitEditData.semester}
                    onChange={(e) =>
                      setSubmitEditData(
                        (prev) => (prev = { ...prev, semester: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block max-w-72 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>


                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Total Marks In Word
                  </label>
                  <input
                  value={submitEditData.totalMarksInWord}
                    onChange={(e) =>
                      setSubmitEditData(
                        (prev) => (prev = { ...prev, grade: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block max-w-72 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap">
                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Percentage
                  </label>
                  <input
                  value={submitEditData.percentage}
                    onChange={(e) =>
                      setSubmitEditData(
                        (prev) => (prev = { ...prev, percentage: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block max-w-72 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>

                






              </div>
             {
                submitEditData.result.map((d,index)=>(
                    
            <div>

              <div className="flex flex-wrap">
                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    subject code
                  </label>
                  <input
                  value={d.subjectCode}
                    onChange={(e) =>{

                        const updatedResult = [...submitEditData.result];
                        updatedResult[index].subjectCode=e.target.value;
                        setSubmitEditData(
                            (prev) => (prev = { ...prev, result: updatedResult })
                        )
                        // console.log(submitData.result[index]);
                    }
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block max-w-72 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>
                

                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    subject
                  </label>
                  <input
                  value={d.subject}
                    onChange={(e) =>{

                        const updatedResult = [...submitEditData.result];
                        updatedResult[index].subject=e.target.value;
                        setSubmitEditData(
                            (prev) => (prev = { ...prev, result: updatedResult })
                        )
                        // console.log(marksheetData.result[index]);
                    }
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block max-w-72 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                    />
                </div>
                
                
              </div>                    






                <div className="flex flex-wrap">
                    

                <div className="Title__ my-1  mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    total marks
                  </label>
                  <input
                  value={d.totalMarks}
                    onChange={(e) =>{
                     
                        const updatedResult = [...submitEditData.result];
                        updatedResult[index].totalMarks=e.target.value;
                        setSubmitEditData(
                            (prev) => (prev = { ...prev, result: updatedResult })
                            )
                        
                    }
                }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block max-w-72 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>


                <div className="Title__ my-1 ">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    obtained marks
                  </label>
                  <div className='flex'> 

                  <input
                    value={d.obtainedMarks}
                    onChange={(e) =>{
                        const updatedResult = [...submitEditData.result];
                        updatedResult[index].obtainedMarks=e.target.value;
                        setSubmitEditData(
                            (prev) => (prev = { ...prev, result: updatedResult })
                        )
                        // console.log(marksheetData.result[index])
                        }
                        
                        }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block max-w-72 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                    />
                    
                    </div>
                </div>


              </div>

              <div className='flex flex-wrap'>

              <div className="Title__ my-1 ">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Marks In word
                  </label>
                  <div className='flex'> 

                  <input
                  value={d.marksInWord}
                    onChange={(e) =>{
                        
                        const updatedResult = [...submitEditData.result];
                        updatedResult[index].marksInWord=e.target.value;
                        setSubmitEditData(
                            (prev) => (prev = { ...prev, result: updatedResult })
                        )
                        // console.log(submitData.result[index])
                    }
                    
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block max-w-72 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                    />
                  {
                       index+1<noOfSubjects?<span 
                       onClick={()=>{
                           setnoOfSubjects(noOfSubjects-1)
                           const updatedResult = [...submitEditData.result];
                        updatedResult.pop();
                        setSubmitEditData((prevState) => ({ ...prevState, result: updatedResult }));
                        // console.log(marksheetData);

                    }}
                       className='bg-[#10b981] text-white text-4xl rounded-md ml-2 px-3 mt-2 '>-</span>: <span 
                       onClick={()=>{
                        setnoOfSubjects(noOfSubjects+1);
                        const updatedResult = [...submitEditData.result]; 
                        updatedResult.push({ subject:"",totalMarks:0,obtainedMarks:0})
                        setSubmitEditData((prevState) => ({ ...prevState, result: updatedResult }));
                        // console.log(marksheetData);
                    }}
                       className='bg-[#10b981] text-white text-4xl rounded-md ml-2 px-3 mt-2 '>+</span>
                    }
                    </div>
                </div>
              </div>
            </div>    
                ))
                }


            
             

                <div className="flex justify-between">
                <div className="product__button flex justify-end mt-6">
                  <button
                    onClick={(e) => handleSubmit(e)}
                    type="submit"
                    className="px-6 py-2 leading-5 text-gray-300 hover:text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-[#10b981] border-2 border-[#10b981]"
                    >
                    Save
                  </button>
                </div>
                <div className="product__button flex justify-end mt-6">
                  <button
                    onClick={() => setEditResultModalForm(false)}
                    type="submit"
                    className="px-6 py-2 leading-5 text-gray-300 hover:text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-[#10b981] border-2 border-[#10b981]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      
    </div>
  )
}

export default EditResultModal