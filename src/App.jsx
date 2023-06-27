import {Routes, Route} from 'react-router-dom'
import Navbar from './Pages/Navbar';

import Your from './Pages/Your';
import All from './Pages/All';
import Blocked from './Pages/Blocked';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/your' element={<Your />} />
        <Route path='/all' element={<All />} />
        <Route path='/blocked' element={<Blocked />} />
      </Routes>

    </>
  )
}

export default App;

