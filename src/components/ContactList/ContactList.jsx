import { MdDeleteForever } from 'react-icons/md';
import { List, ContactItem, User, DeleteContact } from "./ContactList.styled";

export const ContactList = ({ users, onDeleteContact })=> {
    return <List>
            {users.map((user) => (
              <ContactItem key={user.id}>
                <User>{user.name}: {user.number}</User>
                <DeleteContact type="button" onClick={()=> {onDeleteContact(user.id)}}><MdDeleteForever size={"24px"} /></DeleteContact>
              </ContactItem>
            ))}
          </List>    
}