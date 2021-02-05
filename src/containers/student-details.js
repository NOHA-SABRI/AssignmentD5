import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getStudentDetails,clearStudentDetails } from '../actions'
import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
const url = "http://localhost:3002/students"
const StudentDetails = ({ getStudentDetails,clearStudentDetails, details, match }) => {
    const id = match.params.id
    console.log(id)
    useEffect(() => {
        console.log('as comp did mount')
        debugger;
        getStudentDetails(id)

        return ()=>{
            console.log('cleanup (unmount)')
            clearStudentDetails()
        }
    },[])

    const renderStudentDetails = (details) => {
        if (details && details.id) {
            return (
                <Row>
                <Col sm="4">
                  <Card body inverse style={{ backgroundColor: 'lightgray'}}>
                    <CardTitle tag="h2" className="mb-2 text-dark">Student Information</CardTitle>
                    <CardText tag="h6" className="mb-2 text-dark"> ID: {details.id}</CardText>
                    <CardText tag="h6" className="mb-2 text-dark"> Name: {details.name}</CardText>
                    <CardText tag="h6" className="mb-2 text-dark"> Age: {details.age}</CardText>
                    <CardText tag="h6" className="mb-2 text-dark"> Phone:{details.phone}</CardText>
                    <button className="btn btn-danger" onClick={()=>{
                        fetch(`${url}/${details.id}`,{method:'DELETE'})
                        .then(()=>{
                           alert("deleted")
                            window.location.replace("/")
                        })
                    }}>Delete</button>

                   

                  </Card>
                </Col>
               
              </Row>
    
                
            )
        }
        return ''
    }
    return (<div className="alert alert-light">
        
        {renderStudentDetails(details)}
    </div>)

}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        details: state.students.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudentDetails ,clearStudentDetails}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)
