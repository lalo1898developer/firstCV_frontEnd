import React, {useEffect, useContext, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext'
import axios from 'axios';
import { Card, ButtonGroup, Button, CardTitle, Row, Col,  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AddBox } from '@material-ui/icons';
import './index.css';

const HomeUser = () => {
  const [curriculums, setCurriculums] = useState([])
  const { isAuth, user } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [isCurriculums, setIsCurriculums] = useState(true);

  const toggle = () => setModal(!modal);

  if(!isAuth) return <Redirect to="/login"/>

  async function getCV(){
    const READALL_CURRICULUMS_URI = `${process.env.REACT_APP_BACKEND_BASE_URL}/users/${user.id}/curriculums`;

    try {
      const resCurriculums = await axios
      .get(READALL_CURRICULUMS_URI, {
        headers: { Authorization: `Bearer ${localStorage.getItem('firstcv-app_token')}`}
      });
      setCurriculums(resCurriculums.data);
      if(resCurriculums.data.length === 0) setIsCurriculums(false)

    } catch (error) {
      alert('Error getting curriculums');
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect( async () => {
    getCV();
  }, []);

  async function handleClick(id, e) {
    e.preventDefault();

    const DELETEONE_CURRICULUM_URI = `${process.env.REACT_APP_BACKEND_BASE_URL}/users/${user.id}/curriculums/${id}`;

    try{
      await axios
        .delete(DELETEONE_CURRICULUM_URI, {
          headers: { Authorization: `Bearer ${localStorage.getItem('firstcv-app_token')}`}
        });
        setModal(!modal);
        getCV();
    } catch (error) {
      alert('Error delete curriculums');
    }
  }

  const curriculumTrue = () => {
    return (<React.Fragment>
      <Row>
      {curriculums.map((curriculum) =>  {
      return(
        <React.Fragment>
          <Col sm="3">
            <Card body className="text-center text-white bg-secondary">
              <CardTitle>{curriculum.title}</CardTitle>
              <ButtonGroup>
                <Button color="warning" tag={Link} to="/user/editform">Edit</Button>
                <Button color="danger" onClick={(e) => handleClick(curriculum._id, e)}>Delete</Button>
              </ButtonGroup>
            </Card>
          </Col>
        </React.Fragment>
      )
  })}

        <Col sm="3" className="text-center align-self-center">
          <Button tag={Link} to="/user/newform" color="link"><AddBox color="secondary" style={{ fontSize: 70 }} /></Button>
        </Col>
      </Row>


      <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Atention</ModalHeader>
              <ModalBody>
                Successful delete curriculum
              </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>Aceptar</Button>
            </ModalFooter>
          </Modal>
    </React.Fragment>)
  }

  const curriculumFalse = () => {
    return (<React.Fragment>
        <div className="text-center align-self-center centrado" >
            <h2>Aún no tienes ningun CV registrado, selecciona el siguiente botón para crear uno</h2>
            <Button tag={Link} to="/user/newform" color="link"><AddBox color="secondary" style={{ fontSize: 90 }} /></Button>
        </div>
    </React.Fragment>)
  }


  return (
    <React.Fragment>
      { isCurriculums ? curriculumTrue() : curriculumFalse() }
    </React.Fragment>
  );
}
 
export default HomeUser;