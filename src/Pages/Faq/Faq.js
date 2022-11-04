import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {
    return (
        <div>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is authentication and authorization in rest api?</Accordion.Header>
        <Accordion.Body>
        A REST request can have a special header called Authorization Header, this header can contain the credentials (username and password) in some form. Once a request with Authorization Header is received, the server can validate the credentials and can let you access the private resources.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does the private route work?</Accordion.Header>
        <Accordion.Body>
         The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>what is node? how does node work?</Accordion.Header>
        <Accordion.Body>
        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is NodeJS used for?</Accordion.Header>
        <Accordion.Body>
        Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>  
        </div>
    );
};

export default Faq;