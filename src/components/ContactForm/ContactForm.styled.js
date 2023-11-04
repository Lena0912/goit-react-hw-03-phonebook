import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};
  max-width: 50%;
`;

export const Error = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
  font-size: 14px;
`;


export const StyledInput = styled(Field)`
  font-size: 16px;
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(1)}
    ${p => p.theme.spacing(2)} ${p => p.theme.spacing(7)};
  border: 2px solid ${p => p.theme.colors.accent};
  outline: none;
  border-radius: ${p => p.theme.spacing(2)};
  transition: background-color 0.2s;

  &:focus,
  :hover {
    background-color: ${p => p.theme.colors.bgInput};
  }
`;

export const StyledLabel = styled.label`
  position: relative;
  max-width: 50%;
  
  svg {
    position: absolute;
    top: 30px;
    left: 15px;

    color: ${p => p.theme.colors.green};
  }
`;

export const AddContactButton = styled.button`
  text-decoration: none;
  display: inline-block;
  width: 150px;
  height: 40px;
  border-radius: ${p => p.theme.spacing(5)};
  font-family: inherit;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  border-color: ${p => p.theme.colors.accent};
  background: transparent;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.accent};
    box-shadow: 0 15px 20px rgba(0, 128, 128, 0.4);
    color: white;
    transform: translateY(-7px);
  }
`;
