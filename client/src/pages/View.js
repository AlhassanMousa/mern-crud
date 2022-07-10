import React,{useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import "./View.css";



const View = () => {
const [user,setUser] = useState(null);
const {id} = useParams();

useEffect(() =>{
  if(id){
    getSingleUser(id);
  }
},[id])
 
const getSingleUser = async(id) =>{
  const response = await axios.get(`http://localhost:5000/user/${id}`);
  if (response.status === 200) {
    setUser({ ...response.data[0] });
  }
};
 
  return (
    <div style={{marginTop:"150px"}}>
   <div className='card'>
    <div className='card-header'>
      <p>user contact details</p>
      </div>
      <div className='container'>
        <strong>ID: </strong>
        <strong>{id}</strong>
        <br />
        <br/>
        <strong>Name: </strong>
        <strong>{user && user.name}</strong>
        <br />
        <br/>
        <strong>Email: </strong>
        <strong>{user &&  user.email}</strong>
        <br />
        <br/>
        <strong>Contact: </strong>
        <strong>{user &&  user.contact}</strong>
        <br />
        <br/>
        <Link to="/">
          <button className='btn btn-edit'>Go baCK</button>
        </Link>
      
    </div>
   </div>
    </div>
  )
}

export default View;