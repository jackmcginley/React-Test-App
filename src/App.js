import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  // Fetch the API data just once when app is first loaded, and pass down the data.  Previously data was fetched on the Home page but it makes another network call each time the Home page is rended when moving between pages.
  const url =
    'https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details';
  // Initial state is set to empty strings so that Carousel  will be rendered in place with plain background, even while the data is being fetched asynchronously from the API.
  const [apiData, setApiData] = useState([
    {
      Title: ' Lorem',
      Subtitle: '',
    },
  ]);

  const fetchData = async () => {
    try {
      const response = await axios(url, {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = response.data;
      setApiData(data.Details);
    } catch (error) {
      alert(
        `Network error.  Status code  ${error.response.status}  Please refresh browser.`
      );
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home slides={apiData} />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
