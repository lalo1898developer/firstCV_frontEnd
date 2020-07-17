import React, {useEffect, useContext, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext'
import axios from 'axios';
import { Card, ButtonGroup, Button, CardTitle, Row, Col } from 'reactstrap';
import { AddBox } from '@material-ui/icons';

const HomeUser = () => {
  const [curriculums, setCurriculums] = useState([])
  const { isAuth, user } = useContext(AuthContext);

  if(!isAuth) return <Redirect to="/login"/>

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect( async () => {
    console.log(user);
    const READALL_CURRICULUMS_URI = `${process.env.REACT_APP_BACKEND_BASE_URL}/users/${user.id}/curriculums`;

    try {
      const resCurriculums = await axios
      .get(READALL_CURRICULUMS_URI, {
        headers: { Authorization: `Bearer ${localStorage.getItem('firstcv-app_token')}`}
      });
      console.log(resCurriculums);
      setCurriculums(resCurriculums.data);
    } catch (error) {
      alert('Error getting curriculums');
    }
  }, []);

  return (
    <React.Fragment>
      <Row>
  {curriculums.map((curriculum) =>  {
      return(
      <Col sm="3">
        <Card body className="text-center text-white bg-secondary">
          <CardTitle>{curriculum.title}</CardTitle>
          <ButtonGroup>
              <Button color="warning">Edit</Button>
              < Button color="danger">Delete</Button>
            </ButtonGroup>
          </Card>
        </Col>
      )
  })}

        <Col sm="3" className="text-center align-self-center">
          <Button tag={Link} to="/user/newform" color="link"><AddBox color="secondary" style={{ fontSize: 70 }} /></Button>
        </Col>
      </Row>
    </React.Fragment>
  );
}
 
export default HomeUser;