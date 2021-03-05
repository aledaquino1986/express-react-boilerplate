import React, { useState, useEffect } from "react";
import "./customers.css";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/customers")
      .then(res => res.json())
      .then(customers => {
        setCustomers(customers);
      });
  }, []);
  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map(customer => {
          const { name, lastName, id } = customer;

          return (
            <li key={id}>
              {name} {lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Customers;
