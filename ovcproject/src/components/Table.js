import React from 'react';
import { Table } from 'reactstrap'


const Card = ({ name, email, city, company }) => {
  return (
    
<>
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{city}</td>
            <td>{company}</td>

          </tr>
        </tbody>
      </Table>
</>
  );
}

export default Card;