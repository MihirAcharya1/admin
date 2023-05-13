import './pages.css'
import Gif from '../img/teamwork.gif'
import { useState } from "react"
import { db } from "../firebase"
import { doc, updateDoc, addDoc, collection, getDocs, setDoc } from 'firebase/firestore';
import { toast, Toaster } from 'react-hot-toast';



export default function Staffs() {

    const [sname, setSName] = useState("");
    const [suid, setSuid] = useState("");
    const [sdob, setSdob] = useState("");
    const [scontact, setSContact] = useState("");
    const [saddress, setSAddress] = useState("");

    const currentDate = new Date().toLocaleDateString();

    const myCollection = collection(db, "Staff_Database");



    function AddData() {
        if (sname && sdob && scontact && saddress) {
            const data = {
                Staff_Name: sname,
                Staff_DOB: sdob,
                Contact: scontact,
                Address: saddress,

            };
            addDoc(myCollection, data)
                .then(() => {
                    console.log("Data added successfully!");
                toast.success("Document successfully added!")

                    

                })
                .catch((error) => {
                    console.error("Error adding data: ", error);
                });
        }

        else {
            alert("fill all details")
        }

    }

    //Read data 
    const [read, setRead] = useState([]);
    function ReadData() {
        getDocs(myCollection)
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                console.log("Data retrieved successfully: ", data);
                setRead(data);
            })
            .catch((error) => {
                console.error("Error retrieving data: ", error);
            });
    }

    //take Staff Attendence
    const updateStaffAttendence = (collectionName, docId, data) => {
        setDoc(doc(db, collectionName, docId), data)
            .then(() => {
                console.log("Document successfully written!");
                toast.success("Attendence has taken..")

            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    };
    const updateStaffInformation = (collectionName, docId, data) => {
        updateDoc(doc(db, collectionName, docId), data)
            .then(() => {
                console.log("Document successfully update!");
                toast.success("Document successfully updated!")
                setSName("");
                setSAddress("");
                setSContact("");
                setSdob("");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
                alert(error)
            });
    };

    const updateAttendPre = async (id, attendence, name) => {
        const Data = {
            Staff_UID: id,
            Staff_Name: name,
            PresentStatus: attendence,
            Date: currentDate
        }
        updateStaffAttendence("Attendence", id, Data);

    };

    const updateStaffInfo = () => {
        const Data = {
            Staff_Name: sname,
            Staff_DOB: sdob,
            Contact: scontact,
            Address: saddress,
        }
        updateStaffInformation("Staff_Database", suid, Data)
    }
   


    return (
        <div style={{marginTop:"50px"}}>
            {/* <NavBar /> */}
            <Toaster toastOptions={{ duration: 6000 }} />
            <div className="Staff-db-content">

                <div className="data-operations">
                    <img src={Gif} className="img-fl" alt=""></img>
                    <div className="data-view1">
                        <h2 style={{ color: "blue", marginBottom: "10px" }}>Staff Details:</h2>
                        <label className="fetch-db-lb" style={{}}>Staff's UID:
                            <input className="fetch-db-in" onChange={(e) => { setSuid(e.target.value) }} placeholder="required for update"></input>
                        </label><br></br>
                        <label className="fetch-db-lb">Staff's Name:
                            <input className="fetch-db-in" onChange={(e) => { setSName(e.target.value) }} placeholder="staff name"></input>
                        </label><br></br>

                        <label className="fetch-db-lb" >Date-of-birth:
                            <input className="fetch-db-in" style={{ width: "fit-content" }} type="date" onChange={(e) => { setSdob(e.target.value) }} value={sdob} placeholder="date of birth"></input>
                        </label><br></br>


                        <label className="fetch-db-lb">ContactNo:
                            <input className="fetch-db-in" onChange={(e) => { setSContact(e.target.value) }} placeholder='contact number' type="number"></input>
                        </label><br></br>

                        <label className="fetch-db-lb">Address:
                            <input className="fetch-db-in" onChange={(e) => { setSAddress(e.target.value) }} placeholder='address'></input>
                        </label><br></br>



                    </div>
                    <div className="data-view2">
                        <h2 style={{ color: "blue" }}>Staff's Data:</h2>
                        <div className="scroll-view">
                            {read.map((staff) => (
                                <><table >
                                    <thead>
                                        <tr>
                                            <th className="t-head">Staff_Name</th>
                                            <th className="t-head">Staff_DOB</th>
                                            <th className="t-head">Staff_Contact</th>
                                            <th className="t-head">Staff_Address</th>
                                            <th className="t-head">Staff_UID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="tData">{staff.Staff_Name}</td>
                                        <td className="tData">{staff.Staff_DOB}</td>

                                        <td className="tData">{staff.Contact}</td>
                                        <td className="tData">{staff.Address}</td>
                                        <td className="tData">{staff.id}</td>
                                    </tr>
                                    </tbody>



                                  

                                </table>
                                    <button onClick={() => { updateAttendPre(staff.id, "Present", staff.Staff_Name) }} className="btn-att">Present</button>
                                    <button onClick={() => { updateAttendPre(staff.id, "Absent", staff.Staff_Name) }} className="btn-att">Absent</button><br></br></>


                            ))}
                        </div>
                    </div>

                </div>
                <div className="btn-div">
                    <button className="btn-operation" onClick={ReadData}>FETCH</button>
                    <button className="btn-operation" onClick={AddData}>ADD</button>
                    <button className="btn-operation" onClick={updateStaffInfo}>UPDATE</button>
                 

                </div>

            </div>
            <div className="bck"></div>

        </div>
    )
}