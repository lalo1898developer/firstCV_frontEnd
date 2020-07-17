import React,{ useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import DivAcademic from './DivAcademic'


const NewForm = () => {
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

const [academicState, setAcademicState] = useState(0);

// Handle
const handlePhone = (event)=>{
    setPhone(event.target.value)
}
const handlePostalCode = (event)=>{
    setPostalCode(event.target.value)
}
const handleCountry = (event)=>{
    setCountry(event.target.value)
}
const handleCity = (event)=>{
    setCity(event.target.value)
}
const handleState = (event)=>{
    setState(event.target.value)
}
const handleProfile = (event)=>{
    setProfile(event.target.value)
}

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

const handleWorkName = (event)=>{
    setWorkName(event.target.value)
}
const handleWorkEntryYear = (event)=>{
    setWorkEntryYear(event.target.value)
}
const handleWorkEndYear = (event)=>{
    setWorkEndYear(event.target.value)
}
const handlePosition = (event)=>{
    setPosition(event.target.value)
}
const handleWorkDescription = (event)=>{
    setWorkDescription(event.target.value)
}

const createCV = () => {
    const academicData = {
        schoolName, entryYear, endYear, bachelorName
    }
    const workData = {
        workName, workEntryYear, workEndYear, position
    }
    const body = {
        phone, postalCode, country, city, state, profile, academicData, workData, workDescription
    }
    console.log(body);
}



    return(
        <>
        <Row className="py-3">
            <Col sm="12" md="8" className="mx-auto bg-secondary rounded">
                <h2>Datos Personales:</h2>
                <Form>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="phone">Telefono</Label>
                            <Input type="tel"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={handlePhone}
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
                            onChange={handlePostalCode}
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
                            onChange={handleCountry}
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
                            onChange={handleCity}
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
                            onChange={handleState}
                            id="state"/>
                        </FormGroup>  
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>

        <Row className="py-3">
            <Col sm="12" md="8" className="mx-auto bg-secondary rounded">
                <h2>Biografia:</h2>
                <Form>
                    
                    <Row form>
                        <Col md={12}>
                            <FormGroup>
                                <Input
                                type="textarea"
                                name="profile"
                                value={profile}
                                onChange={handleProfile}
                                id="profile" />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>

        <Row className="py-3">
            <Col sm="12" md="8" className="mx-auto bg-secondary rounded">
                <h2>Formación académica:</h2>
                <Form>
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
                    { Array(academicState).fill(<DivAcademic />) }
                    <div className="mx-auto p-2">
                        <button
                        type="button"
                        className="btn btn-primary ml-2 mx-auto d-block"
                        onClick={() => setAcademicState(academicState + 1)}>
                            +
                        </button>
                    </div>
                </Form>
            </Col>
        </Row>

    <Row className="py-3">
        <Col sm="12" md="8" className="mx-auto bg-secondary rounded">
                <h2>Experiencia laboral:</h2>
            <Form>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="workName">Nombre de empresa</Label>
                            <Input
                            type="text"
                            name="workName"
                            value={workName}
                            onChange={handleWorkName}
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
                            onChange={handleWorkEntryYear}
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
                            onChange={handleWorkEndYear}
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
                            onChange={handlePosition}
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
                            onChange={handleWorkDescription}
                            placeholder="Breve posición de actividades"/>
                        </FormGroup>
                    </Col>
                </Row>    
            </Form>
        </Col>
    </Row>

    <Row className="py-3">
            <Col sm="12" md="8" className="mx-auto bg-secondary rounded">
                <h2>Habilidades:</h2>
                <Form>
                    
                    <Row form>
                        <Col md={12}>
                            <FormGroup>
                                <Label for="knowledge">Habilidades</Label>
                                <Input type="tel" name="knowledge" id="knowledge" placeholder="" />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
        </Col>
    </Row>

    <Row className="py-3">
        <Col sm="12" md="8" className="mx-auto rounded">
            <button type="button" className="btn btn-primary ml-2" onClick={()=>{createCV()}}> Crear Curriculum</button>
        </Col>
    </Row>
            
        </>
    )
}

export default NewForm;