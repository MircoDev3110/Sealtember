import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.scss';
import Homepage from './pages/Homepage/Homepage';
import DetailPage from './pages/Detail/DetailPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

const App = () => {

  return (
    
    <HashRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/prompt/:id' element={<DetailPage />} />
        <Route path='/not-found' element={<NotFoundPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </HashRouter>

  );

}

export default App;
