import React from 'react';
import './Portfolio'
import {Col, Container, Row} from "react-bootstrap";

export default function Portfolio (){
    return(
    <div id={'portfolio'} >
        <Container className={'my-5'}>
            <Row>
                <Col>
                    <img alt={''} src={'/img/about.png'}/>
                </Col>
                <Col>
                    <img alt={''} src={'/img/about_pc.png'}/>
                </Col>
                <Col>
                    <img alt={''} src={'img/hao_comment.png'} />
                </Col>
                <Col>
                    <img alt={''} src={'/img/about_pc.png'}/>
                </Col>
               <Col>
                    <img alt={''} src={'/img/about.png'}/>
                </Col>
               <Col>
                    <img alt={''} src={'/img/hao_comment.png'}/>
                </Col>
            </Row>
        </Container>  
    </div>    
)

}
