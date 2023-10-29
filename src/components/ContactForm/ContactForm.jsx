import { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, Error, StyledInput, StyledLabel, AddContactButton } from "./ContactForm.styled"
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too short!')
        .matches(
            /^[a-zA-Z-а-яА-Я]+([' -][a-zA-Z-а-яА-Я])?[a-zA-Z-а-яА-Я]*$/, 
    "Name may contain only letters, apostrophe, dash and spaces."
      )
        .required('This is a required field'),
    number: Yup.string()
        .matches(
            /^\+?\d{1,4}?[ .\-s]?(\(\d{1,3}?\))?([ .\-s]?\d{1,4}){1,4}$/,
    "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        )
        .required('This is a requared field')
        .min(9, 'Please enter at least 9 characters'),

});

export class ContactForm extends Component {
    render() {
        return  <Formik initialValues={{ name: '', number: '' }}
            onSubmit={(values, actions) => {
                this.props.onUpdateContactList(values);
                actions.resetForm();
            }}
        
        validationSchema={ContactSchema}
        >
            
            <StyledForm>
                <StyledLabel>Name
                
                <BsFillPersonFill size='20px' />
                    <StyledInput name='name' type='text' />
                    <Error name='name' component='span' />
                </StyledLabel>
                                        
                
            <StyledLabel>Number
                
                    <BsFillTelephoneFill size='20px' />
                    <StyledInput name='number' type='tel' />
                    <Error name='number' component='span' />
                     </StyledLabel>
                
                <AddContactButton type='sumit'>Add contact</AddContactButton>
                
            </StyledForm>
    </Formik>
        
    }
}
