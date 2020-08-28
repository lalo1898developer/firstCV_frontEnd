import React, {useContext} from 'react';
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { FormContext } from '../../../contexts/FormContext'
import '../index.css';

const SectionFormTitle = () => {

    const {title, setTitle} = useContext(FormContext);

    return ( 
        <React.Fragment>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <h2 for="idTitle" className="text-info font-weight-bold">Nombre del CV</h2>
                        <Input 
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)}}
                        type="text" 
                        name="inputTitle" 
                        id="idTitle" 
                        placeholder="El bueno" />
                    </FormGroup>
                </Col>
            </Row>
        </React.Fragment>
     );
}

export default SectionFormTitle;