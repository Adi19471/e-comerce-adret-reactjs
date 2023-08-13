import React from "react";

import registrationForm from "../forms/registrationForm";

import { Form, FormGroup, Label, Input, Button, } from "reactstrap";

const Registationpage = () => {
  return (
    <>
      <Form>

      <h2 >Registratioon Aplication...</h2>
        <FormGroup>
          {registrationForm &&
            registrationForm.map((item, index) => {
              return ( 
                <>
                  <Label htmlFor="">{item.name}</Label>
                  <Input label={item.label} type={item.type} />
                </>
              );
            })}

     
            <Button color="primary" size="sm">
            Submit
          </Button>
          <Button color="info" size="sm">cancel</Button>

     
        </FormGroup>
      </Form>
    </>
  );
};

export default Registationpage;
