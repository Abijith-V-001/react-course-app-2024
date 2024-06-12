import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewCourses = () => {
    const[data,changeData]=useState([ ])
    const fetchData=()=>{
        axios.get("http://localhost:8083/view").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-col-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    
                                    <th scope="col">Name</th>
                                    <th scope="col">Roll no</th>
                                    <th scope="col">Admission no</th>
                                    <th scope="col">College</th>
                                </tr>
                            </thead>
                            <tbody>
                               {data.map(
                                (value,index)=>{
                                    return  <tr>
                                    
                                    <td>{value.name}</td>
                                    <td>{value.rollNo}</td>
                                    <td>{value.admNo}</td>
                                    <td>{value.college}</td>
                                    
                                </tr>
                                }
                               )}
                               
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewCourses