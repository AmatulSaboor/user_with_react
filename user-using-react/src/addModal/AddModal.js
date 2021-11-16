import './AddModal.css';
import { useState } from 'react';
function AddModal(props){
    const setData = props.setData;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    return (
        <div id="addUserModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* <form onSubmit={
                                (e) => {
                                    console.log(`inside add click` );
                                    console.log(`${name} | ${email} | ${address} | ${phone}`)
                                    const user = {name, email, address, phone};
                                    fetch(`http://localhost:4000/add`,
                                    {
                                        method:"POST",
                                        mode: 'cors',
                                        body:JSON.stringify(user),
                                       headers: { 'Content-Type':'application/json' }
                                    })
                                    .then(res => res.json())
                                    .then(jsonRes => setData(jsonRes))
                                    .catch(err => console.log(err));
                                }
                            }> */}
                    <form onSubmit={(e)=>{
                            e.preventDefault();
                            console.log(`inside add`);
                            fetch("http://localhost:3000/add",
                            {
                                mode: 'cors',
                                method: 'POST',
                                headers: { 'Content-Type':'application/json' },
                                body: JSON.stringify({ name, email, phone, address}),
                            })
                            .then((response)=> response.json())
                            .then(response =>{setData(response);})
                            .catch(err => console.log(err));
                        }}>
                        <div className="modal-header">						
                            <h2 className="modal-title">Add User</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" className="form-control" required onChange={e =>{
                                    setName(e.target.value);
                                }}/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" className="form-control" required onChange={e =>{
                                    setEmail(e.target.value);
                                }} />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <textarea className="form-control" name="address" required onChange={e =>{
                                    setAddress(e.target.value);
                                }}>
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="number" name="phone" className="form-control" required onChange={e =>{
                                    setPhone(e.target.value);
                                }}>
                                </input>
                            </div>					
                        </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"></input>
                            <button type ="submit" className="btn btn-success" value="Add">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddModal;