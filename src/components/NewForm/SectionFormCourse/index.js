import React, {useContext} from 'react';
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { FormContext } from '../../../contexts/FormContext'
import '../index.css';

const SectionFormCourse = () => {

    const {academyNameCourses, setAcademyNameCourses} = useContext(FormContext);
    const {realizationDateCourses, setRealizationDateCourses} = useContext(FormContext);
    const {courseNameCourses, setCourseNameCourses} = useContext(FormContext);

    return (
        <React.Fragment>
            <Row className="bg-info seccionSubForm">
                <Col md="3">
                    <FormGroup>
                        <Label for="idAcademyNameCourses" className="text-light">Nombre de la Academia</Label>
                        <Input 
                        value={academyNameCourses}
                        onChange={(e) => {setAcademyNameCourses(e.target.value)}}
                        type="text" 
                        name="inputAcademyNameCourses" 
                        id="idAcademyNameCourses" 
                        placeholder="..." />
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Label for="idRealizationDateCourses" className="text-light">Fecha de realización</Label>
                        <Input 
                        value={realizationDateCourses}
                        onChange={(e) => {setRealizationDateCourses(e.target.value)}}
                        type="date" 
                        name="inputRealizationDateCourses" 
                        id="idRealizationDateCourses" />
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Label for="idCourseNameCourses" className="text-light">Nombre del curso</Label>
                        <Input 
                        value={courseNameCourses}
                        onChange={(e) => {setCourseNameCourses(e.target.value)}}
                        type="text" 
                        name="inputCourseNameCourses" 
                        id="idCourseNameCourses" 
                        placeholder="..." />
                    </FormGroup>
                </Col>
            </Row>
        </React.Fragment>
     );
}

export default SectionFormCourse;