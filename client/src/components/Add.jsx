import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [book, setBooks] = useState({
        tittle:"",
        desc:"",
        price:"null",
        cover:"",
    });
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setBooks((prev)=> ({ ...prev, [e.target.name]:e.target.value}));
    };
    const handleClick = async (e)=>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/books", book)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }
    console.log(book)
  return (
    <div className='form'>
        <h1>Add New Book</h1>
        <input type="text" placeholder='tittle' onChange={handleChange} name='tittle'/>
        <input type="text" placeholder='desc' onChange={handleChange} name='desc'/>
        <input type="number" placeholder='price'onChange={handleChange} name='price'/>
        <input type="text" placeholder='cover'onChange={handleChange} name='cover'/>
        <button onClick={handleClick} className='formbtn'>Add</button>
    </div>
  );
};

export default Add