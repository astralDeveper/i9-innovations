import { useMemo, useState } from "react";
import { RiArrowRightDoubleLine } from "@remixicon/react";
import { Link, useOutletContext } from "react-router-dom";
import Pagination from "../Pagination";
import { paginateArray } from "../../utils/functions";

export default function ProfessionalsList() {
  const { professionalsList } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedUsers = useMemo(() => paginateArray(professionalsList, 10), [professionalsList]);

  return (
    <div className="bg-white rounded-lg p-8 max-lg:p-4">
      <h2 className="text-3xl font-semibold max-sm:text-xl">
        List of Healthcare professionals ({professionalsList.length})
      </h2>

      <div className="mt-10 w-full overflow-x-auto [scrollbar-width:thin]">
        {professionalsList.length === 0 ?
          <p>No users</p>
          :
          <table className="w-full [&_td]:text-center [&_tr]:border-b [&_td]:py-4 max-sm:text-sm">
            <thead>
              <tr className="text-[#0065C0] font-medium">
                <td>Name</td>
                <td>Email</td>
                <td>Mobile Number</td>
                <td>Specialty</td>
                <td>Details</td>
              </tr>
            </thead>

            <tbody>
              {paginatedUsers[currentPage - 1].map((user, i) => (
                <tr key={`${user.id}-${i}`}>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.primarySpecialty}</td>
                  <td>
                    <Link to={`/dashboard/healthcare-professionals/${user.id}`} state={{ user }} className="text-[#0065C0] underline hover:decoration-transparent transition-colors flex justify-center items-center group">
                      <span>View Details</span>
                      <RiArrowRightDoubleLine size={18} color="#0065C0" className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }

        <div className="mt-4">
          <Pagination page={currentPage} count={paginatedUsers.length} onChange={setCurrentPage} />
        </div>
      </div>
    </div>
  )
}