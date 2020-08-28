/* eslint-disable no-unused-vars */
import React, {useState, useContext, useEffect, useLayoutEffect} from 'react';
import { AuthContext } from '../../contexts/AuthContext'
import { FormContext } from '../../contexts/FormContext'
import SectionFormTitle from './SectionFormTitle';
import SectionFormPersonalData from './SectionFormPersonalData';
import SectionFormProfile from './SectionFormProfile';
import SectionFormAcademicData from './SectionFormAcademicData';
import SectionFormWorkData from './SectionFormWorkData'; 
import SectionFormKnowledge from './SectionFormKnowledge';
import SectionFormCourse from './SectionFormCourse';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, Row, Col } from 'reactstrap';
import { BorderColor, AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import './index.css';

const NewForm = () => {
    const { isAuth, user } = useContext(AuthContext);

    const {title} = useContext(FormContext);
    const {phone} = useContext(FormContext);
    const {postalCode} = useContext(FormContext);
    const {profile} = useContext(FormContext);
    const {academicData} = useContext(FormContext);
    const {workData} = useContext(FormContext);
    const {knowledge} = useContext(FormContext);
    const {courses} = useContext(FormContext);

    const [sectionFormPersonalData, setSectionFormPersonalData] = useState(0);

    if(!isAuth) return <Redirect to="/login"/>

    const handleForm = async (e) => {
        e.preventDefault();
        
        const jsonSend = {
            title,
            phone,
            postalCode,
            profile,
            academicData,
            workData,
            knowledge,
            courses
        };

        console.log(jsonSend);

        // const CREATEONE_CURRICULUM_URI = `${process.env.REACT_APP_BACKEND_BASE_URL}/users/${user.id}/curriculums`
        // try {
        //   await axios.post(CREATEONE_CURRICULUM_URI, jsonSend, {
        //     headers: { Authorization: `Bearer ${localStorage.getItem('firstcv-app_token')}`}
        //   });
        //   alert('Successfull create curriculum!');
        // } catch (error) {
        //   alert('Error on create curriculum!');
        // }
    
      }

    return ( 
        <React.Fragment>
            <Form onSubmit={handleForm}>
                <div>
                    <Row className="text-right">
                        <Col md="12">
                            <h1 for="idTitle"><BorderColor color="secondary" fontSize="large"/> Creando Curriculum</h1>
                        </Col>
                    </Row>
                    <SectionFormTitle/>
                </div>

                <div className="bg-dark text-white seccionForm">
                    <h2>Datos Personales</h2>
                    <SectionFormPersonalData /> 
                    { 
                        Array(sectionFormPersonalData).fill(
                            <div className="seccionData">
                                <Button className="float-right no-button" href="#" onClick={() => setSectionFormPersonalData(sectionFormPersonalData - 1)}><RemoveCircleOutline color="secondary" fontSize="large" /></Button> 

                                <SectionFormPersonalData/>
                            </div>
                        ) 
                    }
                    <div className="text-center">
                        <Button className="no-button" href="#" onClick={() => setSectionFormPersonalData(sectionFormPersonalData + 1)}><AddCircleOutline color="secondary" fontSize="large"/></Button>
                    </div>
                </div>

                <div className="bg-dark text-white seccionForm">
                    <h2>Perfil Profesional</h2>
                    <SectionFormProfile/>
                </div>

                <div className="bg-dark text-white seccionForm">
                    <h2>Información Académica</h2>
                    <SectionFormAcademicData/>
                </div>
                
                <div className="bg-dark text-white seccionForm">
                    <h2>Información Laboral</h2>
                    <SectionFormWorkData/>
                </div>

                <div className="bg-dark text-white seccionForm">
                    <h2>Conocimientos</h2>
                    <Row className="bg-info seccionSubForm">
                        <SectionFormKnowledge/>
                    </Row>
                </div>
                
                <div className="bg-dark text-white seccionForm">
                    <h2>Cursos o Certificaciones</h2>
                    <SectionFormCourse/>
                </div>
                
                <Button className="btn-info btn-submit float-right">Crear</Button>
            </Form>
        </React.Fragment>
     );
}
 
export default NewForm;