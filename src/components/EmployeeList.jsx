import { EmployeeItem } from './EmployeeItem';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getListEmployees } from './../service/localstorage';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        setEmployees(getListEmployees());
    }, []);

    const navigate = useNavigate();

    return (
        <div>
            <h1 className="my-5 text-center">Manage Entries</h1>

            {
                employees.length > 0 ? (
                    <div className="card bg-secondary p-3">
                        <table className="table table-hover" id="entry-table">
                            <thead>
                                <tr>
                                    <th scope="col">Inward No.</th>
                                    <th scope="col">Courier</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Received From</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">District</th>
                                    <th scope="col">Sent To</th>
                                    <th scope="col">Received Date</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map(employee => <EmployeeItem employee={employee} key={employee.id} setEmployees={setEmployees} />)
                                }
                            </tbody>
                        </table>
                        <ReactHTMLTableToExcel
                        className="btn btn-success"
                        table="entry-table"
                        fileName="Inward Entry File"
                        sheet="Sheet"
                        buttonText="Export to Excel" 
                        />
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate("/create-employee")}
                        >
                            Create Entry
                        </button>
                    </div>
                ) : (
                    <h3 className="text-center">No Entries</h3>
                )
            }

        </div>
    )
}

export default EmployeeList