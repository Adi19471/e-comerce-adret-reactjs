import React, { useState } from "react";

import registrationForm from "../forms/registrationForm";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Registationpage = () => {

const[regFormJson ,setRegForm] = useState(registrationForm)

const validate = (event) =>{
  if(event.target.value.length === 0){
    const formJson = regFormJson
    formJson.forEach((item) =>{
      if(event.target.name === item.name){
        item.isValid = false;
      }
    })

    setRegForm([...formJson])
  }
}


  return (
    <>
      <Form>
        <h2>Registratioon Aplication...</h2>
        <FormGroup>
          {registrationForm && registrationForm.length > 0 && 
            regFormJson.map((item, index) => {
              const {isValid} = item;
              return (
                <>
                  <div key={index}>
                    <Label htmlFor="">{item.name}</Label>
                    {
                      isValid && <Input  valid label={item.label}  name={item.name} type={item.type}  placeholder={item.placholder}  onBlur={validate}/>
                    }

                    {
                      !isValid && <Input invalid label={item.label}   name={item.name}   type={item.type}  placeholder={item.placholder}  onBlur={validate}/>
                    }
                    
                  </div>
                </>
              );
            })}

          <Button color="primary" size="sm">
            Submit
          </Button>
          <Button color="info" size="sm">
            cancel
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default Registationpage;
