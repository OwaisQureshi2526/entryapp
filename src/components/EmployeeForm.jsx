import { useNavigate, useParams } from 'react-router-dom';
import { addEmployee, getEmployeeById } from '../service/localstorage';
import { useForm } from './../hooks/useForm';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { editEmployee } from './../service/localstorage';

export const EmployeeForm = () => {
    // const navigate = useNavigate();
    const { id } = useParams();
    const [showAlert, setshowAlert] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        inward: '',
        courier: '',
        date: '',
        recFrom: '',
        subject: '',
        district: '',
        sentTo: '',
        recDate: ''
    });

    useEffect(() => {
        if (id) {
            const employee = getEmployeeById(id);
            setForm(employee);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        id ? editEmployee(id, inputValues) : addEmployee({ id: uuid(), ...inputValues });
        resetForm();
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 2000);
    };

    return (
        // <div>

        //     <div className="d-flex my-5 justify-content-between">
        //         <button type="button" className="btn btn-outline-secondary" onClick={() => navigate("/")}>Back</button>
        //         <h1 className="text-center">{id ? "Edit" : "Add new"} Entry</h1>
        //         <div />
        //     </div>

            <div className="modal fade" id="staticBackdrop1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
    <div className="modal-dialog d-flex justify-content-center">
        <div className="modal-content w-75">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel1">{id ? "Edit" : "Add new"} Entry</h5>
                <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>



            <div className="modal-body p-4">
                <form onSubmit={handleSubmit}>
                    
                    <div className="form-outline mb-4">
                        <input 
                            name="inward"
                            type="number"
                            value={inputValues.inward}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid" />
                        <label className="form-label" htmlFor="inputValid">Inward No.</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input 
                            name="courier"
                            type="text"
                            value={inputValues.courier}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid" />
                        <label className="form-label" htmlFor="inputValid">Courier</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input 
                            name="date"
                            type="text"
                            value={inputValues.date}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid" />
                        <label className="form-label" htmlFor="inputValid">Date</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input 
                            name="recFrom"
                            type="text"
                            value={inputValues.recFrom}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid" />
                        <label className="form-label" htmlFor="inputValid">Received From</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input 
                            name="subject"
                            type="text"
                            value={inputValues.subject}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid" />
                        <label className="form-label" htmlFor="inputValid">Subject</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input 
                            name="district"
                            type="text"
                            value={inputValues.district}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid" />
                        <label className="form-label" htmlFor="inputValid">District</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input 
                            name="sentTo"
                            type="text"
                            value={inputValues.sentTo}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid" />
                        <label className="form-label" htmlFor="inputValid">Sent To</label>
                    </div>
                    <div class="form-outline mb-4">
                        <input 
                            name="recDate"
                            type="text"
                            value={inputValues.recDate}
                            onChange={handleInputChange}
                            className="form-control"
                            id="inputValid" />
                        <label className="form-label" htmlFor="inputValid">Received Date</label>
                    </div>

                    
                    <button type="submit" class="btn btn-primary btn-block">{id ? "Edit" : "Add"} Entry</button>
                </form>
            </div>
        </div>
    </div>
</div>
    //         // {/* <div className="card border-primary p-5 m-5">
    //             <form onSubmit={handleSubmit}>
    //                 <div className="form-group">
    //                     <label className="form-label mt-2" htmlFor="inputValid">Inward No.</label>
    //                     <input
    //                         name="inward"
    //                         type="number"
    //                         value={inputValues.inward}
    //                         onChange={handleInputChange}
    //                         className="form-control"
    //                         id="inputValid"
    //                     />
    //                 </div> */}




    //                 // <div className="form-group">
    //                 //     <label className="form-label mt-2" htmlFor="inputValid">Courier</label>
    //                 //     <input
    //                 //         name="courier"
    //                 //         type="text"
    //                 //         value={inputValues.courier}
    //                 //         onChange={handleInputChange}
    //                 //         className="form-control"
    //                 //         id="inputValid"
    //                 //     />
    //                 // </div>


    //                 // <div className="form-group">
    //                 //     <label className="form-label mt-2" htmlFor="inputValid">Date</label>
    //                 //     <input
    //                 //         type="text"
    //                 //         name="date"
    //                 //         value={inputValues.date}
    //                 //         onChange={handleInputChange}
    //                 //         className="form-control"
    //                 //         id="inputValid"
    //                 //     />
    //                 // </div>


    //                 // <div className="form-group">
    //                 //     <label className="form-label mt-2" htmlFor="inputValid">Received From</label>
    //                 //     <input
    //                 //         name="recFrom"
    //                 //         type="text"
    //                 //         value={inputValues.recFrom}
    //                 //         onChange={handleInputChange}
    //                 //         className="form-control"
    //                 //         id="inputValid"
    //                 //     />
    //                 // </div>

    //                 // <div className="form-group">
    //                 //     <label className="form-label mt-2" htmlFor="inputValid">Subject</label>
    //                 //     <input
    //                 //         name="subject"
    //                 //         type="text"
    //                 //         value={inputValues.subject}
    //                 //         onChange={handleInputChange}
    //                 //         className="form-control"
    //                 //         id="inputValid"
    //                 //     />
    //                 // </div>
                    
    //                 // <div className="form-group">
    //                 //     <label className="form-label mt-2" htmlFor="inputValid">District</label>
    //                 //     <input
    //                 //         name="district"
    //                 //         type="text"
    //                 //         value={inputValues.district}
    //                 //         onChange={handleInputChange}
    //                 //         className="form-control"
    //                 //         id="inputValid"
    //                 //     />
    //                 // </div>

    //                 // <div className="form-group">
    //                 //     <label className="form-label mt-2" htmlFor="inputValid">Sent To</label>
    //                 //     <input
    //                 //         name="sentTo"
    //                 //         type="text"
    //                 //         value={inputValues.sentTo}
    //                 //         onChange={handleInputChange}
    //                 //         className="form-control"
    //                 //         id="inputValid"
    //                 //     />
    //                 // </div>

    //                 // <div className="form-group">
    //                 //     <label className="form-label mt-2" htmlFor="inputValid">Received Date</label>
    //                 //     <input
    //                 //         name="recDate"
    //                 //         type="text"
    //                 //         value={inputValues.recDate}
    //                 //         onChange={handleInputChange}
    //                 //         className="form-control"
    //                 //         id="inputValid"
    //                 //     />
    //                 // </div>


    //                 // <div className="d-grid gap-2 mt-3">
    //                 //     <button type="submit" className="btn btn-outline-primary btn-block">{id ? "Edit" : "Add"} Entry</button>
    //                 // </div>
    //         //     </form>
    //         // </div>

    //         {
    //             showAlert && (
    //                 <div className="px-5">
    //                     <div className="alert alert-success">
    //                         <strong>Well done!</strong> {id ? "edit" : "added a new"} Entry.
    //                     </div>
    //                 </div>
    //             )
    //         }

    //     </div >
    )
}

export default EmployeeForm
