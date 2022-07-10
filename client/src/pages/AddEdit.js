import React,{useState,useEffect} from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from "axios";
import "./AddEdit.css";
import { toast } from 'react-toastify';


const initialState = {
  name:"",
  email:"",
  contact:"",
};


const AddEdit = () => {
  
  

let navigate = useNavigate();
 const [state,setState] = useState(initialState);
 const {name, email,contact} = state;



 const addUser = async(data) =>{
  const response = await axios.post("http://localhost:5000/user",data);
  if(response.status === 200){
    toast.success(response.data)
  }
}

const updateUser = async(data,id) =>{
  const response = await axios.post(`http://localhost:5000/user/${id}`,data);
  if(response.status === 200){
    toast.success(response.data)
  }
}

const handleSubmit = (e) => {
  e.preventDefault();
  if(!name || !email || !contact){
    toast.error("Please provide value into each input field");
  }else{
    if(!id){
  addUser(state);
    }else{
      updateUser(state,id)
  }
  setTimeout(() => navigate("/"),5000);  

}
}


const {id} = useParams();

useEffect(() =>{
  if(id){
    getSingleUser(id);
  }
},[id])


const handleInputChange = (e) =>{
  let {name,value} = e.target;
  setState({...state,[name]:value});
}

const getSingleUser = async(id) =>{
  const response = await axios.get(`http://localhost:5000/user/${id}`);
  if (response.status === 200) {
    setState({...response.data[0]})
  }

}
  return (
    <div style={{marginTop:"100px"}}>
     
      <form
       style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"}}
       onSubmit={handleSubmit}
       >
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" name="name" placeholder="Enter name ..." value={name || ""} onChange={handleInputChange}/>
       
        <label htmlFor='email'>Email</label>
        <input type="email" id="email" name="email" placeholder="Enter email ..."  value={email} onChange={handleInputChange}  />
        
        <label htmlFor='contact'>contact</label>
        <input type="text" id="contact" name="contact" placeholder="Enter contact ..."  value={contact} onChange={handleInputChange} />
        
        <input type="submit" value={id ? "Update" : "Add"}/>
      
       </form>
    </div>
  )
}

export default AddEdit;