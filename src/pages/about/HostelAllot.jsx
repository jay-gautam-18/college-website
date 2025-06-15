import React from 'react'
import Nav from '../../Components/Nav'
import LnctFooter from '../../Components/LnctFooter'
import Home1 from '../../Components/HomeComponets/Home1'

const HostelAllot = () => {
  return (
    <>
    <Nav/>
    <Home1
    heading={"Hostel Allotment | LNCT Group of Colleges"}
    description={"Excel and succeed in all your endeavours with LNCT Group of Colleges!"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/05/select1.png"}
    />
     <div className="p-6 max-w-4xl mx-auto">
      {/* Title Section */}
      <h1 className="text-2xl font-semibold text-center mb-4">
        Hostel Allotment | LNCT Group of Colleges
      </h1>

      <div className="flex items-center justify-center mb-6">
        <span className="flex-1 border-t-2 mr-2 border-gray-400"></span>
        <span className="text-gray-500 font-semibold">
          Hostel Allotment List 2024-25
        </span>
        <span className="flex-1 border-t-2 ml-2 border-gray-400"></span>
      </div>

      {/* Table Section */}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border p-2 font-semibold text-gray-700">
              Hostel Name
            </th>
            <th className="border p-2 font-semibold text-gray-700">
              Allotment List
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            "Kalakunj Girls Hostel",
            "Mahismati Hostel",
            "New Boys' Hostel",
            "Ratanpur Boys' Hostel",
            "Tripuri Hostel",
            "Shrikunj Hostel",
          ].map((hostel, idx) => (
            <tr key={idx}>
              <td className="border p-2">{hostel}</td>
              <td className="border p-2 text-blue-500">
                <a
                   href="#"
                   onClick={(e) => e.preventDefault()}
                   className="hover:underline"
                 >
                   Click here to view list
                 </a>
              </td>
            </tr>)
          )}

        </tbody>
      </table>

      {/* Notice Section */}
      <div className="mt-6 p-4 border rounded-md shadow-md">
        <div className="flex items-center mb-2">
          <span aria-hidden="true" role="img">
            📢
          </span>
          <h2 className="font-semibold ml-2">
            Notice for Hostel Reporting Time
          </h2>
        </div>

        <p className="mb-2">
          Please be advised that the reporting time for the hostel is
          between 9:00 AM and 10:00 PM. Kindly ensure you adhere to this
          time frame for a smooth and organized check-in process.
        </p>

        <p>Thank you for your cooperation!</p>
      </div>
    </div>
    <LnctFooter/>
    </>
)
}

export default HostelAllot