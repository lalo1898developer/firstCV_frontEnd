import React, {useState, useContext} from 'react';
import { FormGroup, Label, Input, FormText, Row, Col, Button } from 'reactstrap';
import { FormContext } from '../../../contexts/FormContext';
import { RemoveCircleOutline } from '@material-ui/icons';
import '../index.css';

const SectionFormAcademicData = () => {

    const {schoolNameAcademicData, setSchoolNameAcademicData} = useContext(FormContext);
    const {entryDateAcademicData, setEntryDateAcademicData} = useContext(FormContext);
    const {endDateAcademicData, setEndDateAcademicData} = useContext(FormContext);
    const [isEndDateAcademicDataChecked, setIsEndDateAcademicDataChecked] = useState(false);
    const {bachelorNameAcademicData, setBachelorNameAcademicData} = useContext(FormContext);

    const handleClickAcademicData = () => {
        setIsEndDateAcademicDataChecked(!isEndDateAcademicDataChecked);
        setEndDateAcademicData(null);   
    }

    console.log(schoolNameAcademicData);

    return ( 
        <React.Fragment>
            <Row className="bg-info seccionSubForm">
                <Col md="3">
                    <FormGroup>
                        <Label for="idSchoolNameAcademicData" className="text-light">Nombre de tu Universidad</Label>
                        <Input 
                        value={schoolNameAcademicData}
                        onChange={(e) => {setSchoolNameAcademicData(e.target.value)}}
                        type="text" 
                        name="inputSchoolNameAcademicData" 
                        id="idSchoolNameAcademicData" 
                        placeholder="Patito" />
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Label for="idEntryDateAcademicData" className="text-light">Año de Ingreso</Label>
                        <Input 
                        value={entryDateAcademicData}
                        onChange={(e) => {setEntryDateAcademicData(e.target.value)}}
                        type="date"
                        name="inputEntryDateAcademicData" 
                        id="idEntryDateAcademicData" />
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Label for="idEndDateAcademicData" className="text-light">Año de Egreso</Label>
                        <Input 
                        value={endDateAcademicData}
                        onChange={(e) => {setEndDateAcademicData(e.target.value)}}
                        type="date" 
                        name="inputEndDateAcademicData" 
                        id="idEndDateAcademicData" 
                        placeholder="Año de Egreso"
                        disabled={isEndDateAcademicDataChecked} />
                            <div className="float-right">
                                <Input 
                                type="checkbox"
                                value={isEndDateAcademicDataChecked}
                                onClick={handleClickAcademicData}
                                />
                                <FormText color="dark">
                                    ¿Aún estudiando?
                                </FormText>
                            </div>
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Label for="idBachelorNameAcademicData" className="text-light">Nombre de tu Carrera</Label>
                        <Input 
                        value={bachelorNameAcademicData}
                        onChange={(e) => {setBachelorNameAcademicData(e.target.value)}}
                        type="text" 
                        name="inputBachelorNameAcademicData" 
                        id="idBachelorNameAcademicData" 
                        placeholder="El Inge" />
                    </FormGroup>
                    <Button className="float-right no-button" href="#"><RemoveCircleOutline color="disabled" fontSize="large" /></Button> 
                </Col>
            </Row>
        </React.Fragment>
     );
}

export default SectionFormAcademicData;