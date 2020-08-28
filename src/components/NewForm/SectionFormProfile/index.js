import React, {useContext} from 'react';
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { FormContext } from '../../../contexts/FormContext'
import '../index.css';

const SectionFormProfile = () => {

    const {profile, setProfile} = useContext(FormContext);

    return ( 
        <React.Fragment>
            <Row className="bg-info seccionSubForm">
                <Col>
                <FormGroup>
                    <Label for="idProfile" className="text-light">Breve resúmen de tu perfil</Label>
                    <Input 
                    value={profile}
                    onChange={(e) => {setProfile(e.target.value)}}
                    type="textarea" 
                    name="inputProfile" 
                    id="idProfile" 
                    placeholder="..." />
                </FormGroup>
                </Col>
            </Row>
        </React.Fragment>
     );
}

export default SectionFormProfile;