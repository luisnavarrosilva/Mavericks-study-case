import React from 'react';
import NavBar from './navBar';
import "./dashboard.css";
import Card from 'react-bootstrap/Card';
import { getuser } from '../functions/Register';
import { useState ,useEffect} from 'react';
import "./userinfo.css"

const UserInfo= () =>  {
  const [users, setUsers] = useState(null)
    useEffect(()=> {
      getuser(setUsers)
    },[])
  return (
    <body>
    <div className='container-p'>
    <NavBar/>
    {users!=null?(
      <Card>
      <Card.Img variant="top" src="https://thecatapi.com/api/images/get?"/>
      <Card.Body>
        <Card.Title>Hello dear {users.data.userName}</Card.Title>
        <Card.Text>
          email: {users.data.email} 
        </Card.Text>
        <Card.Text>
        phone number: {users.data.phoneNumber}
        </Card.Text>
        <Card.Text>
        Adrress: {users.data.adress}
        </Card.Text>

      </Card.Body>
      <Card.Footer>
        <a href='#'> modify your address</a>
      </Card.Footer>
    </Card>
      ):console.log("no users")}
    </div>
    </body>
  )
}

export default UserInfo