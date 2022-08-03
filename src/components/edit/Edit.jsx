import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./edit.css";

export default function Edit() {
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

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3003/users/${id}`)
        .then((res) => {
            setName(res.data.name);
            setUsername(res.data.username);
            setEmail(res.data.email);
            setStreet(res.data.address.street);
            setSuite(res.data.address.suite);
            setCity(res.data.address.city);
            setZipcode(res.data.zipcode);
            setPhone(res.data.phone);
            setWebsite(res.data.website);
            setCompanyName(res.data.company.companyName);
            setCatchPhrase(res.data.company.catchPhrase);
            setBs(res.data.company.bs);
        })
    }, [])

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

    function updateUser(e){
        e.preventDefault();

        axios.put(`http://localhost:3003/users/${id}`, data)
        .then(
            navigate("/")
        )
    }

  return (
    <div className='form'>
        <h1>Update User</h1>
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
            <button className='editBtn' onClick={updateUser}>Update</button>
        </form>
    </div>
  )
}
