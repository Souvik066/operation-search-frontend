import Navbar from './components/Navbar';
import Search from './components/Search';
import Result from './components/Result';
import './App.css';
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const App = () => {
  const [results, setResults] = useState('');

  async function onSubmit(searchQuery) {
    MySwal.fire({
      title: 'loading...',
      allowOutsideClick: false,
      didOpen: () => {
        MySwal.showLoading();
      },
    });

    const response = await fetch('https://13.233.153.97/searchQna', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Question: searchQuery }),
    });
    const data = await response.json();

    // set the response
    console.log(data);
    setResults(data.data.answer);

    MySwal.close();
  }

  return (
    <>
      <Navbar />
      <Search onSubmit={onSubmit} />
      {/* {isLoading && <p>Loading.....</p>} */}
      <Result results={results} />
    </>
  );
};

export default App;
