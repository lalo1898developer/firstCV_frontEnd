import React, {useContext} from 'react';
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { FormContext } from '../../../contexts/FormContext'
import '../index.css';

const SectionFormPersonalData = () => {

    const {phone, setPhone} = useContext(FormContext);
    const {postalCode, setPostalCode} = useContext(FormContext);

    return ( 
        <React.Fragment>
            <Row className="bg-info seccionSubForm">
                <Col md="3">
                    <FormGroup>
                        <Label for="idPhone" className="text-light">Número de Celular</Label>
                        <Input 
                        value={phone}
                        onChange={(e) => {setPhone(e.target.value)}}
                        type="text" 
                        name="inputPhone" 
                        id="idPhone" 
                        placeholder="## #### ####" />
                    </FormGroup>
                </Col>
                <Col md="3">
                    <FormGroup>
                        <Label for="idPostalCode" className="text-light">Código Postal</Label>
                        <Input 
                        value={postalCode}
                        onChange={(e) => {setPostalCode(e.target.value)}}
                        type="text" 
                        name="inputPostalCode" 
                        id="idPostalCode" 
                        placeholder="#####" />
                    </FormGroup>
                </Col>
            </Row>
        </React.Fragment>
     );
}

export default SectionFormPersonalData;