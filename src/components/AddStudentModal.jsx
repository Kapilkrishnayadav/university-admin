import React,{ useState } from 'react'
const AddStudentModal = ({setAddStudentModalForm,handleSubmit,setSubmitData}) => {
    // const [addVendorModalForm, setAddVendorModalForm] = useState(false)
  
  return (
    <div>
         <div className="Modal_container flex items-center h-[46vh]  py-8  fixed top-10 left-[25vw]">
          <section className="flex justify-center items-center mt-72  p-6 mx-auto bg-gray-700 rounded-md shadow-md">
            <div>
              <p className="border-b-2 w-[18rem] border-[#10b981]  mb-8 text-center  text-xl font-bold text-gray-300 capitalize ">
                Add Student 
              </p>

              <div className="flex">
                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Name*
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, name: e.target.value })
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
                    DOB
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, dob: e.target.value })
                      )
                    }
                    id="title"
                    placeholder="Enter Title"
                    type="string"
                    className="block w-96 px-4 py-2 mt-2 text-gray-800 bg-white border border-[#10b981] rounded-md   focus:outline-none focus:ring"
                    required
                  />
                </div>
              </div>

              <div className="flex">
                <div className="Title__ my-1 mr-8">
                  <label className="text-lg text-gray-300 " htmlFor="title">
                    Father Name
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, fatherName: e.target.value })
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
                    Batch
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, batch: e.target.value })
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
                    Class
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, class_: e.target.value })
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
                    Roll no
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) =>
                          (prev = { ...prev, rollNo: e.target.value })
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
                  Branch
                  </label>
                  <input
                    onChange={(e) =>
                      setSubmitData(
                        (prev) => (prev = { ...prev, branch: e.target.value })
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
                    onClick={() => setAddStudentModalForm(false)}
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

export default AddStudentModal