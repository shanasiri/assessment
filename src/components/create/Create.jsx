import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./create.css"

export default function Create() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [suite, setSuite] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");
    const [bs, setBs] = useState("");

    const navigate = useNavigate();

    const data = {
        name : name,
        username : username,
        email : email,
        address: {
            street : street,
            suite : suite,
            city : city,
            zipcode : zipcode,
        },
        phone : phone,
        website : website,
        company : {
            companyName : companyName,
            catchPhrase : catchPhrase,
            bs : bs
        }
    }

    function createUser(e){
        e.preventDefault();

        axios.post("http://localhost:3003/users", data)
        .then(
            navigate("/")
        )
    }

  return (
    <div className='form'>
        <h1>Create User</h1>
        <form className=''>
            <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter Name' className=''/>
            <br></br>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Enter Username' className=''/>
            <br></br>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Enter Email' className=''/>
            <br></br>
            <h4>Address</h4>
            <br></br>
            <div className='inputRow'>
                <input value={street} onChange={(e) => setStreet(e.target.value)} type='text' placeholder='Enter Street' className='rowEle'/>
                <br></br>
                <input value={suite} onChange={(e) => setSuite(e.target.value)} type='text' placeholder='Enter Suite' className='rowEle'/>
                <br></br>
                <input value={city} onChange={(e) => setCity(e.target.value)} type='text' placeholder='Enter City' className='rowEle'/>
                <br></br>
                <input value={zipcode} onChange={(e) => setZipcode(e.target.value)} type='text' placeholder='Enter Zipcode' className='rowEle'/>
                <br></br>
            </div>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type='text' placeholder='Enter Phone' className=''/>
            <br></br>
            <input value={website} onChange={(e) => setWebsite(e.target.value)} type='text' placeholder='Enter Website' className=''/>
            <br></br>
            <h4>Company</h4>
            <br></br>
            <div className='inputRow'>
                <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} type='text' placeholder='Enter Company Name' className='rowEle'/>
                <br></br>
                <input value={catchPhrase} onChange={(e) => setCatchPhrase(e.target.value)} type='text' placeholder='Enter Catch Pharse' className='rowEle'/>
                <br></br>
                <input value={bs} onChange={(e) => setBs(e.target.value)} type='text' placeholder='Enter bs' className='rowEle'/>
                <br></br>
            </div>
            
            <button className='createBtn' onClick={createUser}>Create</button>
        </form>
    </div>
  )
}
