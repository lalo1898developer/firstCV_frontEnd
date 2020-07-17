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
        </Row>
        <Row className="academica mt-6">
          <h2>Formación academica</h2>
          <table>
            <ul>
              <li>Nombre de Escuela</li>
              <li>Año de ingreso</li>
              <li>Año de Egreso</li>
              <li>Carrera</li>
            </ul>
          </table>
        </Row>
      </Container>
    </React.Fragment>
  );
}
 
export default ViewCV;