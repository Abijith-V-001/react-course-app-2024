import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const AddCourse = () => {const[data,changeData]=useState([
    {
        "title": "",
        "description": "",
        "startdate":"",
        "duration": "",
        "venue": "",
        "trainer": ""
    } ])
     const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
     }
     const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8083/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("successfully added")
                } else {
                    alert("could not add data")
                }
            }
        ).catch().finally
     }
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Ttitle</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler}/>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
    
                                <label htmlFor="" className="form-label">Description</label>
                                <textarea name="description" id="" className="form-control" value={data.description} onChange={inputHandler}></textarea>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
    
                                <label htmlFor="" className="form-label">Start date</label>
                                <input type="text" className="form-control" name='startdate' value={data.startdate} onChange={inputHandler}/>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
    
                                <label htmlFor="" className="form-label">Duration</label>
                                <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler}/>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
    
                                <label htmlFor="" className="form-label">Venue</label>
                                <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler}/>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
    
                                <label htmlFor="" className="form-label">Trainer</label>
                                <input type="text" className="form-control" name='trainer' value={data.trainer} onChange={inputHandler}/>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
    
    
                            <button className="btn btn-success" onClick={readValue}>Add Course</button></div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default AddCourse