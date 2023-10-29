import { FiSearch } from 'react-icons/fi';
import { Container, SearchField } from "./Filter.styled"



export const Filter = ({ onSearchContact, filterName }) =>{
    return <Container>
        <label htmlFor="filter-input">Find contacts by name</label>
        <SearchField value={filterName} type="text" onChange={(e) => onSearchContact(e.target.value)} id="filter-input"></SearchField>
        <FiSearch /> 
        
    </Container>
}