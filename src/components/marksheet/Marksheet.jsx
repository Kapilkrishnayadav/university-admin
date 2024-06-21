import React from 'react'
import './Marksheet.css'

const Marksheet = ({marksheetData}) => {
  // console.log(marksheetData);
  return (
    <div>
<div className="marksheet py-3 px-3 mb-28 mx-32">
  <div className="container">
    <div className='flex flex-col  justify-center items-center my-11'>
      <h1>MAHATAMA GANDHI </h1>
      <div className='text-[1.2rem] text-[#d64744]'>INSTITUTE OF MANAGEMENT SCIENCE AND TECHNOLOGY</div>
    </div>

    
    <table className="details">
      <tbody><tr>
          <td className='border1'><strong>NAME OF THE STUDENT:</strong> {marksheetData.studentId.name}</td>
          <td className='border1'><strong>DATE OF BIRTH:</strong> {marksheetData.studentId.dob}</td>
        </tr>
        <tr>
          <td className='border1'><strong>FATHER'S NAME:</strong> {marksheetData.studentId.fatherName}</td>
          <td className='border1'><strong>BATCH:</strong> {marksheetData.studentId.batch}</td>
        </tr>
        <tr>
          <td className='border1'><strong>SEMESTER:</strong> {marksheetData.semester} </td>
          <td className='border1'><strong>ROLL NO:</strong> {marksheetData.studentId.rollNo}</td>
        </tr>
        <tr>
          <td className='border1'><strong>CLASS:</strong>{marksheetData.studentId.class_}</td>
          <td className='border1'><strong>BRANCH:</strong>{marksheetData.studentId.branch}</td>
        </tr>
      </tbody></table>
    <table className="marks my-20">
      <tbody><tr>
          <th className='text-[#3aa0df]'>SUBJECT CODE</th>
          <th className='text-[#3aa0df]'>SUBJECT</th>
          <th className='text-[#3aa0df]'>TOTAL MARKS</th>
          <th className='text-[#3aa0df]'>OBTAINED MARKS</th>
          <th className='text-[#3aa0df]'>MARKS IN WORDS</th>
        </tr>
        {
          marksheetData.result.map((d,index)=>(
        <tr key={index}>
          <td>{d.subjectCode}</td>
          <td>{d.subject}</td>
          <td>{d.totalMarks}</td>
          <td>{d.obtainedMarks}</td>
          <td>{d.marksInWord}</td>
        </tr>

          ))
        }
      </tbody></table>
        <div className='text-center text-[1.7rem] font-medium text-[#3aa0df]'>RESULT</div>
    <table className="result">
      <tbody>
        <tr>
          <td><strong>TOTAL MARKS IN WORD:</strong> {marksheetData.totalMarksInWord}</td>
        </tr>
        <tr>
          <td><strong>PERCENTAGE:</strong> {marksheetData.percentage}</td>
        </tr>
         <tr>
          <td><strong>FINAL RESULT:</strong> Pass</td>
          </tr> 
          
      </tbody></table>
    <p className="signature text-[#3aa0df]">SIGNATURE OF THE PRINCIPAL</p>
  </div>
  <div className="print-button">
    {/* <button onClick={window.print()}>Print</button> */}
  </div>
</div>

        
    </div>
  )
}

export default Marksheet