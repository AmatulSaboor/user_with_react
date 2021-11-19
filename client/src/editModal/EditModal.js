import { useState } from "react";
function EditModal({user, setData}){
    console.log(user);
    const [_id, set_id] = useState(user._id);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [address, setAddress] = useState(user.address);
    const [phone, setPhone] = useState(user.phone);

    return(
        <div id="editUserModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={(e)=>{
                            e.preventDefault();
                            console.log(`inisde edit`);
                            fetch("http://localhost:3000/edit",
                            {
                                mode: 'cors',
                                method: 'POST',
                                headers: { 'Content-Type':'application/json' },
                                body: JSON.stringify({ _id, name, email, phone, address}),
                            })
                            .then((response)=> response.json())
                            .then(response =>{setData(response);})
                            .catch(err => console.log(err));
                        }}>
                        <div className="modal-header">						
                            <h2 className="modal-title">Edit User</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">	
                            <div className="form-group">
                                <label>Name</label>
                                <input id="nameEdit" value={name} name="name" type="text" className="form-control" required onChange={
                                    e => {
                                        setName(e.target.value);
                                    }
                                }></input>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input id="emailEdit" value={email} name="email" type="email" className="form-control" required onChange={
                                    e => {
                                        setEmail(e.target.value);
                                    }
                                }></input>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <textarea id="addressEdit" value={address} name="address" className="form-control" required onChange={
                                    e => {
                                        setAddress(e.target.value);
                                    }
                                }></textarea>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input id="phoneEdit" value={phone} name="phone" type="text" className="form-control" required onChange={
                                    e => {
                                        setPhone(e.target.value);
                                    }
                                }></input>
                            </div>					
                        </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"></input>
                            <button className="btn btn-success" value="Save">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditModal;