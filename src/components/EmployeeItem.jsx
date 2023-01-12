import React from 'react'
import { removeEmployee } from '../service/localstorage';
import { getListEmployees } from '../service/localstorage';
import { useNavigate } from 'react-router-dom';

export const EmployeeItem = ({ employee, setEmployees }) => {
    const { id, inward, courier, date, recFrom, subject, district, sentTo,  recDate } = employee;
    const navigate = useNavigate();

    const deleteEmployee = () => {
        removeEmployee(id);
        setEmployees(getListEmployees());
    }

    return (
        <tr className="table-primary">
            <th>{inward}</th>
            <td>{courier}</td>
            <td>{date}</td>
            <td>{recFrom}</td>
            <td>{subject}</td>
            <td>{district}</td>
            <td>{sentTo}</td>
            <td>{recDate}</td>
            <td>
                <div className="d-flex gap-3">
                    <span type="button" className="badge bg-success" onClick={() => navigate(`/edit-employee/${id}`)}>Edit</span>
                    <span type="button" className="badge bg-danger" onClick={() => deleteEmployee()}>Delete</span>
                </div>
            </td>
        </tr>
    )
}
