import React from 'react';
import { Row, Col, Input, Button, Container, Image } from 'reactstrap';
import './viewCV.css'

const ViewCV = () => {


  return (
    <React.Fragment>
      <Container>
        <Row className="py-3" className="header" >
          <h2 className="title col-12 text-center">Nombre Completo</h2>
          <div className="coverPhoto">
            <img src="http://shorturl.at/zACNS" />
          </div>
          <div className="profile p-4 text-center">
            <p className="col-8 m-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            
          </div>
        </Row>
        <Row className="academica mt-4">
          <h2 className="col-12">Formación academica</h2>
          <table className="col-12">
            <ul className="academic-ul">
              <li className="li-xl">Nombre de Escuela</li>
              <li>Año de ingreso</li>
              <li>Año de Egreso</li>
              <li className="li-xl">Carrera</li>
            </ul>
          </table>
        </Row>
      </Container>
    </React.Fragment>
  );
}
 
export default ViewCV;