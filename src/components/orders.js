import React, { useState } from 'react';
import axios from 'axios';

function Orders() {
  let [Dishes, setDishes] = useState([]);
  let [Input, setInput] = useState("");
  let [Output, setOutput] = useState("");

  const API = 'https://localhost:44327/api/dish?_choices=';

  const fetchData = async (event) => {
    const response = await axios.get(API + Input);
    setOutput(response.data[0].output)
    setDishes(Dishes => [response.data[0], ...Dishes])

  };


  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Input: *</label>
                <input type="text"
                  name="inputText"
                  value={Input}
                  onChange={e => setInput(e.target.value)}
                  className="form-control" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Output: *</label>
                <input type="text"
                  name="Output"
                  value={Output}
                  onChange={e => setOutput(e.target.value)}
                  className="form-control" 
                  readOnly/>
              </div>
            </div>
          </div>

          <div>
            <button className="btn btn-primary" onClick={fetchData}>
              Order
        </button>
          </div>


          <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
              <tr>
                <th>Input</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              {Dishes && Dishes.map((dish, index) => {
                return (
                  <tr key={index}>
                    <td>{dish.input}</td>
                    <td>{dish.output}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default Orders;
