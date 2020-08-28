import React, {useState, useContext} from 'react';
import { FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import { FormContext } from '../../../contexts/FormContext'
import '../index.css';

const SectionFormWorkData = () => {

    const {workNameWorkData, setWorkNameWorkData} = useContext(FormContext);
    const {entryDateWorkData, setEntryDateWorkData} = useContext(FormContext);
    const {endDateWorkData, setEndDateWorkData} = useContext(FormContext);
    const [isEndDateWorkDataChecked, setIsEndDateWorkDataChecked] = useState(false);
    const {positionWorkData, setPositionWorkData} = useContext(FormContext);
    const {workDescriptionWorkData, setWorkDescriptionWorkData} = useContext(FormContext);

    const handleClickWorkData = () => {
        setIsEndDateWorkDataChecked(!isEndDateWorkDataChecked);
        setEndDateWorkData(null);
    }

    return ( 
        <React.Fragment>
            <Row className="bg-info seccionSubForm">
                <Col md="3">
                    <FormGroup>
                        <Label for="idWorkNameWorkData" className="text-light">Nombre de la Empresa</Label>
                        <Input 
                        value={workNameWorkData}
                        onChange={(e) => {setWorkNameWorkData(e.target.value)}}
                        type="text" 
                        name="inputWorkNameWorkData" 
                        id="idWorkNameWorkData" 
                        placeholder="Google" />
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Label for="idEntryDateWorkData" className="text-light">Año de Entrada</Label>
                        <Input 
                        value={entryDateWorkData}
                        onChange={(e) => {setEntryDateWorkData(e.target.value)}}
                        type="date" 
                        name="inputEntryDateWorkData" 
                        id="idEntryDateWorkData" />
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Label for="idEndDateWorkData" className="text-light">Año de Salida</Label>
                        <Input 
                        value={endDateWorkData}
                        onChange={(e) => {setEndDateWorkData(e.target.value)}}
                        type="date" 
                        name="inputEndDateWorkData" 
                        id="idEndDateWorkData"
                        disabled={isEndDateWorkDataChecked} />
                        <div className="float-right">
                            <Input 
                            type="checkbox"
                            value={isEndDateWorkDataChecked}
                            onClick={handleClickWorkData}
                            />
                            <FormText color="dark">
                                ¿Aún trabajando?
                            </FormText>
                        </div>
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Label for="idPositionWorkData" className="text-light">Nombre de tu Posición</Label>
                        <Input 
                        value={positionWorkData}
                        onChange={(e) => {setPositionWorkData(e.target.value)}}
                        type="text" 
                        name="inputPositionWorkData" 
                        id="idPositionWorkData" 
                        placeholder="SCRUM Master" />
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                        <Label for="idWorkDescriptionWorkData" className="text-light">Breve descripción de tus responsabilidades</Label>
                        <Input 
                        value={workDescriptionWorkData}
                        onChange={(e) => {setWorkDescriptionWorkData(e.target.value)}}
                        type="textarea" 
                        name="inputWorkDescriptionWorkData" 
                        id="idWorkDescriptionWorkData" 
                        placeholder="..." />
                    </FormGroup>
                </Col>
            </Row>
        </React.Fragment>
     );
}

export default SectionFormWorkData;