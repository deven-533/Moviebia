import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import MoviePage from './components/MoviePage/MoviePage';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Bookmovie from './components/BookMovie/Bookmovie';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <>
      <Toaster
          position='top-center'
          toastOptions={
            {
              success: {
                theme: {
                  primary: 'green',
                }
              }
            }
          }
        >
        </Toaster></>
   
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/movies" element={<MoviePage/>} />
          <Route path="/movies/:id" element={<MovieDetails/>} />
          <Route path="/book/:id" element={<Bookmovie/>} />


        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
