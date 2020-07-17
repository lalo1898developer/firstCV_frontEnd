import React,{ useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const DivAcademic = () => {
    const [schoolName, setSchoolName] = useState('');
    const [entryYear, setEntryYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const [bachelorName, setBachelorName] = useState('');

    const handleSchoolName = (event)=>{
        setSchoolName(event.target.value)
    }
    const handleEntryYear = (event)=>{
        setEntryYear(event.target.value)
    }
    const handleEndYear = (event)=>{
        setEndYear(event.target.value)
    }
    const handleBachelorName = (event)=>{
        setBachelorName(event.target.value)
    }

    return(
        <>
        <Row form>
            <Col md={4}>
                <FormGroup>
                    <Label for="schoolName">universidad</Label>
                    <Input
                    type="text"
                    name="schoolName"
                    value={schoolName}
                    onChange={handleSchoolName}
                    id="schoolName"/>
                </FormGroup>
            </Col>

            <Col md={2}>
                <FormGroup>
                    <Label for="entryYear">Año de ingreso</Label>
                    <Input
                    type="text"
                    name="entryYear"
                    value={entryYear}
                    onChange={handleEntryYear}
                    id="entryYear"/>
                </FormGroup>
            </Col>
                
            <Col md={2}>
                <FormGroup>
                    <Label for="endYear">Año de egreso</Label>
                    <Input
                    type="text"
                    name="endYear"
                    value={endYear}
                    onChange={handleEndYear}
                    id="endYear"/>
                </FormGroup>  
            </Col>
            <Col md={4}>
                <FormGroup>
                    <Label for="bachelorName">Carrera</Label>
                    <Input
                    type="text"
                    name="bachelorName"
                    value={bachelorName}
                    onChange={handleBachelorName}
                    id="bachelorName"/>
                </FormGroup>  
            </Col>
        </Row>
        </>
    )
}

export default DivAcademic;