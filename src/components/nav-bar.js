
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
  Navbar,
  NavbarBrand,
  // Button
} from 'reactstrap';


const Example = (props) => {
  const {
    
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Navbar color="dark" light expand="md" className="d-flex justify-content-between">
        <NavbarBrand className="text-white" href="/">Home</NavbarBrand>
        {/* <Button outline color="success" className="" onClick="">add</Button> */}
        <Button color="success" onClick={toggle}>add</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Student Details</ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Add</Button>
          
        </ModalFooter>
      </Modal>
      </Navbar>
  
    </div>
  );
}

export default Example;