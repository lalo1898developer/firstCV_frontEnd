import React, { useContext } from 'react';
import { FormGroup, Label, Input, Col } from 'reactstrap';
import { FormContext } from '../../../contexts/FormContext'
import '../index.css';

const SectionFormKnowledge = () => {

    const {conceptKnowledge, setConceptKnowledge} = useContext(FormContext);

    return ( 
        <React.Fragment>
            <Col md="3">
                <FormGroup>
                    <Label for="idConceptKnowledge" className="text-light">Concepto</Label>
                    <Input 
                    value={conceptKnowledge}
                    onChange={(e) => {setConceptKnowledge(e.target.value)}}
                    type="text" 
                    name="inputConceptKnowledge" 
                    id="idConceptKnowledge" 
                    placeholder="..." />
                </FormGroup>
            </Col>
        </React.Fragment>
     );
}

export default SectionFormKnowledge;