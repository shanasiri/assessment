import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export default function Home() {
    const [users, setUsers] = useState([]);

    const [liked, setLiked] = useState(false);

    const loadUser = () => {
        axios.get("http://localhost:3003/users").
        then((res) => {
        setUsers(res.data.reverse());
        console.log(users)
        })
    } 

    useEffect(() => {
        loadUser();
    }, [])

    function Delete(id){
        axios.delete(`http://localhost:3003/users/${id}`)
        .then(
            loadUser()
        )
    }

    const handleLiked = (id) => {
        setLiked(true);
    }

  return (
    <>
    <div className='create-button'>
        <Link to="/create" className='createLink'>Create User</Link>
    </div>
    
    <div className="cards">
        {users ? (users.map((user) => (
            <div className="column">
                <div className="card">
                    <img className="card_img" src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} alt=""/>

                    <div className="card_body">
                        <h3 className="name">{user.name}</h3>
                        <div className="body_content">
                            <i className="fa-regular fa-envelope"></i>
                            <p className="email">{user.email}</p>
                        </div>
                        
                        <div className="body_content">
                            <i class="fa-solid fa-phone"></i>
                            <p className="phone">{user.phone}</p>
                        </div>

                        <div className="body_content">
                            <i class="fa-solid fa-globe"></i>
                            <p className="website">{user.website}</p>
                        </div>
                    </div>

                    <div className="card_footer">
                        
                        {liked ? (
                            <button className="footer_item">
                                <i class="fa-solid fa-heart"></i>
                            </button>
                        ) : (
                            <button className="footer_item" onClick={() => handleLiked(user.id)}>
                                <i class="fa-regular fa-heart"></i>
                            </button>
                        )}
                            
                        <Link to={`/edit/${user.id}`} className="footer_item">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </Link>

                        <button onClick={() => Delete(user.id)} className="footer_item" style={{border:"none"}}>
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        ))) : 
            <Spinner animation="border" />
        }
    </div>
    </>
  )
}