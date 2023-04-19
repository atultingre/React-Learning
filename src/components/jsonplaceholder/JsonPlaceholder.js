import React, { useEffect, useState } from 'react'
import Form from './Form';
import "./JsonPlaceholder.css"
// import List from './List';
import Table from './Table';

const JsonPlaceholder = () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/';
    const [reqType, setReqType] = useState('users');
    const [items, setItems]= useState([]);

    useEffect(()=>{
        const fetchItem = async () => {
            try {
                const response = await fetch(`${API_URL}${reqType}`)
                const data = await response.json();
                console.log(data)
                setItems(data);
            } catch (err) {
                console.log(err.massage)
            }
        };

        fetchItem();
    },[reqType])


  return (
    <div>
        <Form reqType={reqType} setReqType={setReqType}/>
        {/* <List items={items}/> */}
        <Table items={items}/>
    </div>
  )
}

export default JsonPlaceholder