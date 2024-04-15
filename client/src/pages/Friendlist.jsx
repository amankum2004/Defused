import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
// import { Link } from "react-router-dom";


export const FriendList = () => {
    const [user,setUser] = useState([]);
    const {authorizationToken,API} = useAuth();

    const getAllUsersData = async() => {
        try {
            const response = await fetch(`${API}/api/friend/friendlists`,{
                method:"GET",
                headers:{
                    Authorization: authorizationToken,
                }
            });
            const data = await response.json();
            console.log(`users ${data}`);
            setUser(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getAllUsersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return <>
    <section className="users-section">
        <div className="container">
            <h2>List of Users</h2>
        </div>
        <div className="container shoplist">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((curUser,index) => {
                        return <tr key={index}>
                            <td>{curUser.username}</td>
                            <td>{curUser.phone}</td>
                            <td>{curUser.email}</td>
                            <td>{curUser.state}</td>
                            {/* <td>
                                <Link to={`/nearbyShops/${curUser._id}/shopinfo`}>Select</Link> 
                            </td>  */}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </section>
    </>

};