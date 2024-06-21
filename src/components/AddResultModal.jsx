import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
const AddResultModal = ({setAddResultModalForm,handleSubmit,setSubmitData,submitData}) => {
    // const [addVendorModalForm, setAddVendorModalForm] = useState(false)
    const [noOfSubjects, setnoOfSubjects] = useState(1);
   
  
  return (
    <div>
         <div className="Modal_container z-10 flex items-start h-[90vh] mt-20 overflow-y-scroll py-8  fixed top-10 left-[25vw]">
          <section className="flex justify-center items-center   p-6 mx-auto bg-gray-700 rounded-md shadow-md">
            <div>
              <p className="border-b-2 w-[18rem] border-[#10b981]  mb-8 text-center  text-xl font-bold text-gray-300 capitalize ">
                Add Result 
              </p>

              <div className="flex">
                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    student Id
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, studentId: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>

                <div className="Title__ my-1 ">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Semester
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, semester: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>
              </div>

              <div className="flex">
                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Percentage
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, percentage: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-60 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>

                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Total Marks in Word
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, totalMarksInWord: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-60 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>



                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Final result
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, finalResult: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-60 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>



              </div>
             {
                Array(noOfSubjects).fill(null).map((_,index)=>(

                    
                  <div>

                <div className="flex">
                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    subject code
                  </label>
                  <input
                    onChange={(e) =>{

                        const updatedResult = [...submitData.result];
                        updatedResult[index].subjectCode=e.target.value;
                        setSubmitData(
                            (prev) => (prev = { ...prev, result: updatedResult })
                        )
                        // console.log(submitData.result[index]);
                    }
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-72 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>

                
                <div className="Title__ my-1 ">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Marks In word
                  </label>
                  <div className='flex'> 

                  <input
                    onChange={(e) =>{
                        const updatedResult = [...submitData.result];
                        updatedResult[index].marksInWord=e.target.value;
                        setSubmitData(
                            (prev) => (prev = { ...prev, result: updatedResult })
                        )
                        // console.log(submitData.result[index])
                    }
                    
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-72 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                    />
                  
                    </div>
                </div>
              </div>                    












                     
              <div className="flex">
                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    subject
                  </label>
                  <input
                    onChange={(e) =>{

                        const updatedResult = [...submitData.result];
                        updatedResult[index].subject=e.target.value;
                        setSubmitData(
                            (prev) => (prev = { ...prev, result: updatedResult })
                        )
                        // console.log(submitData.result[index]);
                    }
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-72 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>

                <div className="Title__ my-1  mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    total marks
                  </label>
                  <input
                    onChange={(e) =>{
                     
                        const updatedResult = [...submitData.result];
                        updatedResult[index].totalMarks=e.target.value;
                        setSubmitData(
                            (prev) => (prev = { ...prev, result: updatedResult })
                        )
                        // console.log(submitData.result[index])
                    }
                }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-40 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>


                <div className="Title__ my-1 ">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    obtained marks
                  </label>
                  <div className='flex'> 

                  <input
                    onChange={(e) =>{
                        const updatedResult = [...submitData.result];
                        updatedResult[index].obtainedMarks=e.target.value;
                        setSubmitData(
                            (prev) => (prev = { ...prev, result: updatedResult })
                        )
                        // console.log(submitData.result[index])
                    }
                    
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="text"
                    className="block w-40 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                    />
                    {
                       index+1<noOfSubjects?<span 
                       onClick={()=>{
                        setnoOfSubjects(noOfSubjects-1)
                        const updatedResult = [...submitData.result];
                        updatedResult.pop();
                        setSubmitData((prevState) => ({ ...prevState, result: updatedResult }));
                        // console.log(submitData);

                    }}
                       className='bg-[#10b981] text-white text-4xl rounded-md ml-2 px-3 mt-2 '>-</span>: <span 
                       onClick={()=>{
                        setnoOfSubjects(noOfSubjects+1);
                        const updatedResult = [...submitData.result]; 
                        updatedResult.push({ subject:"",totalMarks:0,obtainedMarks:0})
                        setSubmitData((prevState) => ({ ...prevState, result: updatedResult }));
                        // console.log(submitData);
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
                    onClick={() => setAddResultModalForm(false)}
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

export default AddResultModal