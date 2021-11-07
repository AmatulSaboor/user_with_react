import './User.css';

function User(props){
    const users = props.users;
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                        {users.map((user) => 
                            <tr>
                                <td key={user._id}>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.phone}</td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default User;