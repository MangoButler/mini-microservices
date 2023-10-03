import React, { useState } from 'react';
import axios from 'axios';

export default function PostCreate() {
  const [title, setTitle] = useState('');

  const inputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:4000/posts', {
      title,
    });
    setTitle('');
  };

  return (
    <div className='container'>
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label>Title</label>
          <input
            className='form-control mt-2'
            onChange={inputChangeHandler}
            value={title}
          />
        </div>
        <button className='btn btn-primary mt-2'>Submit</button>
      </form>
    </div>
  );
}
