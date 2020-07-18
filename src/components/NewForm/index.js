/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useContext, useState} from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import DivAcademic from './DivAcademic'
import { Link, Redirect } from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext'
import axios from 'axios';


const NewForm = () => {
const { isAuth, user } = useContext(AuthContext);

// UseState Form
const [phone, setPhone] = useState('');
const [postalCode, setPostalCode] = useState('');
const [country, setCountry] = useState('');
const [city, setCity] = useState('');
const [state, setState] = useState('');
const [profile, setProfile] = useState('');

const [schoolName, setSchoolName] = useState('');
const [entryYear, setEntryYear] = useState('');
const [endYear, setEndYear] = useState('');
const [bachelorName, setBachelorName] = useState('');

const [workName, setWorkName] = useState('');
const [workEntryYear, setWorkEntryYear] = useState('');
const [workEndYear, setWorkEndYear] = useState('');
const [position, setPosition] = useState('');

const [workDescription, setWorkDescription] = useState('');

const [knowledge, setKnowledge] = useState('CSS');

const [academicState, setAcademicState] = useState(0);

const handleForm = async (e) => {

    e.preventDefault();
    const academicData = {
        schoolName, entryYear, endYear, bachelorName
    }
    const workData = {
        workName, workEntryYear, workEndYear, position
    }
    const jsonSend = {
        phone, postalCode, country, city, state, profile, academicData, workData, workDescription, knowledge
    }       
    console.log(jsonSend);  
    const POST_URI = `${process.env.REACT_APP_BACKEND_BASE_URL}/users/${user.id}/curriculums`

    try {
      await axios.post(POST_URI, jsonSend);
      alert('Successfull Create CV!');
    } catch (error) {
      alert('Error on Create CV!');
    }
  }

    return(
        <>
        <Form onSubmit={handleForm}>
        <Row className="py-3">
            <Col sm="12" md="8" className="mx-auto bg-secondary rounded">
                <h2>Datos Personales:</h2>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="phone">Telefono</Label>
                            <Input type="tel"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={(e) => {setPhone(e.target.value)}}
                            placeholder="Telefono" />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="postalCode">Código Postal</Label>
                            <Input type="text"
                            name="postalCode"
                            id="postalCode"
                            value={postalCode}
                            onChange={(e) => {setPostalCode(e.target.value)}}
                            placeholder="Código Postal" />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="country">País</Label>
                            <Input
                            type="text"
                            name="country"
                            value={country}
                            onChange={(e) => {setCountry(e.target.value)}}
                            id="country"/>
                        </FormGroup>
                    </Col>

                    <Col md={4}>
                        <FormGroup>
                            <Label for="city">Ciudad</Label>
                            <Input
                            type="text"
                            name="city"
                            value={city}
                            onChange={(e) => {setCity(e.target.value)}}
                            id="city"/>
                        </FormGroup>
                        </Col>
                        
                        <Col md={4}>
                        <FormGroup>
                            <Label for="state">Estado</Label>
                            <Input
                            type="text"
                            name="state"
                            value={state}
                            onChange={(e) => {setState(e.target.value)}}
                            id="state"/>
                        </FormGroup>  
                        </Col>
                    </Row>
            </Col>
        </Row>

        <Row className="py-3">
            <Col sm="12" md="8" className="mx-auto bg-secondary rounded">
                <h2>Biografia:</h2>
                    <Row form>
                        <Col md={12}>
                            <FormGroup>
                                <Input
                                type="textarea"
                                name="profile"
                                value={profile}
                                onChange={(e) => {setProfile(e.target.value)}}
                                id="profile" />
                            </FormGroup>
                        </Col>
                    </Row>
            </Col>
        </Row>

        <Row className="py-3">
            <Col sm="12" md="8" className="mx-auto bg-secondary rounded">
                <h2>Formación académica:</h2>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="schoolName">universidad</Label>
                                <Input
                                type="text"
                                name="schoolName"
                                value={schoolName}
                                onChange={(e) => {setSchoolName(e.target.value)}}
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
                                onChange={(e) => {setEntryYear(e.target.value)}}
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
                                onChange={(e) => {setEndYear(e.target.value)}}
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
                                onChange={(e) => {setBachelorName(e.target.value)}}
                                id="bachelorName"/>
                            </FormGroup>  
                        </Col>
                        
                    </Row>
                    { Array(academicState).fill(<DivAcademic />) }
                    <div className="mx-auto p-2">
                        <button
                        type="button"
                        className="btn btn-primary ml-2 mx-auto d-block"
                        onClick={() => setAcademicState(academicState + 1)}>
                            +
                        </button>
                    </div>
            </Col>
        </Row>

    <Row className="py-3">
        <Col sm="12" md="8" className="mx-auto bg-secondary rounded">
                <h2>Experiencia laboral:</h2>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="workName">Nombre de empresa</Label>
                            <Input
                            type="text"
                            name="workName"
                            value={workName}
                            onChange={(e) => {setWorkName(e.target.value)}}
                            id="workName"/>
                        </FormGroup>
                    </Col>

                    <Col md={2}>
                        <FormGroup>
                            <Label for="entryYear">Año de ingreso</Label>
                            <Input
                            type="text"
                            name="entryYear"
                            value={workEntryYear}
                            onChange={(e) => {setWorkEntryYear(e.target.value)}}
                            id="entryYear"/>
                        </FormGroup>
                    </Col>
                        
                    <Col md={2}>
                        <FormGroup>
                            <Label for="endYear">Año de egreso</Label>
                            <Input
                            type="text"
                            name="endYear"
                            value={workEndYear}
                            onChange={(e) => {setWorkEndYear(e.target.value)}}
                            id="endYear"/>
                        </FormGroup>  
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="position">Puesto de trabajo</Label>
                            <Input
                            type="text"
                            name="position"
                            value={position}
                            onChange={(e) => {setPosition(e.target.value)}}
                            id="position"/>
                        </FormGroup>  
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Input
                            type="textarea"
                            name="workDescription"
                            id="workDescription"
                            value={workDescription}
                            onChange={(e) => {setWorkDescription(e.target.value)}}
                            placeholder="Breve posición de actividades"/>
                        </FormGroup>
                    </Col>
                </Row>
        </Col>
    </Row>

        <Row className="py-3">
            <Col sm="12" md="8" className="mx-auto bg-secondary rounded">
                <h2>Habilidades:</h2>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="knowledge">Habilidades</Label>
                            <Input type="tel" name="knowledge" id="knowledge" placeholder="" />
                        </FormGroup>
                    </Col>
                </Row>
            </Col>
        </Row>

        <Row className="py-3">
            <Col sm="12" md="8" className="mx-auto rounded">
                <button type="submit" className="btn btn-primary ml-2"> Crear Curriculum</button>
            </Col>
        </Row>
    </Form>
            
    </>
    )
}

export default NewForm;