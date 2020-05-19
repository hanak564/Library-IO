import React, {useState} from 'react';
import { TextField, Button } from '@material-ui/core';
import Book from './Book'; 

export default function BookSearch(){
  const [books, setBooks] = useState(null);

  return (
    <div style = {{ display: 'flex' , flexDirection:'column', alignItems: 'center'}} >  
      <Form setBooks = {setBooks} /> 
      <a href='/library' class="Button" > Go to your library! </a>
      {books && books.map(book => <Book key={book.id} book={book} /> )}
    </div>
  );
}

function Form({ setBooks }) { 
  const [input, setInput] = useState(''); 

  const handleSearch = async e => { 
    e.preventDefault(); 

    if(!input) { 
      alert('Enter a search query before searching!')
      return; 
    }
  
  console.log({input})
  const data = await fetch('/api/books?title=' + input).then(res => 
    res.json()
    );
    console.log(data); 
    setBooks(data);
  }; 

  return (
    <form 
      onSubmit={handleSearch} 
      style= {{ display: 'flex' , flexDirection:'column', alignItems: 'center'}} > 
      <br />
      <div style = {{ display: 'flex', alignItems: 'center'}}> 
        <TextField
          value= {input}
          onChange={e => setInput(e.target.value)}
          variant='outlined' 
          placeholder="Book Title"
          style={{ marginRight: "lem" }}
        /> 
        <Button type="submit" color="primary" variant="contained"> Search for Book </Button>
      </div>
    </form>
  )
}
 
//export default App;
