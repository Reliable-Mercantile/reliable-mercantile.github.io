import { Button, FormControl, FormGroup, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mpzgznkq");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export const ContactUs = () => {
    const [state, handleSubmit] = useForm("mpzgznkq");
    return (
        <>
                <Typography variant="h4">Have a project you want our help with?</Typography>
                <Typography variant="h5">Contact us:</Typography>
                <FormGroup 
                onSubmit={handleSubmit}
                style={{display: "grid",
                        flexDirection: "column",
                        maxWidth: "100%",
                        gridTemplateAreas:
                            `"firstname lastname"
                            "email email"
                            "message message"
                            "button button"`,
                        gridTemplateColumns: "1fr 1fr",
                        gridTemplateRows: "min-content min-content min-content 1fr min-content",
                        gridGap: "10px"
                        
            }}>
                    <TextField style={{gridArea: "firstname"}} required variant="outlined" type="text" name="firstname" label="First Name"/>
                    <TextField style={{gridArea: "lastname"}} required variant="outlined" type="text" name="lastname" label="Last Name"/>
                    <TextField style={{gridArea: "email"}} required variant="outlined" type="email" name="email" label="Email Address" />
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    <TextField style={{gridArea: "message"}} rows={4} variant="outlined" multiline required name="message" label="Message"/>
                    <ValidationError prefix="Message" field="message" errors={state.errors}/>
                    <Button style={{backgroundColor: "#b0341a", width: "fit-content", maxWidth: "108px", minHeight: "32px"}} disabled={state.submitting} variant="contained" type="submit">Send</Button>
                </FormGroup>
        </>
    )
};