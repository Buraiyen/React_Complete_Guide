// App.js
import { Route } from 'react-router-dom';

import Welcome from './views/Welcome';
import Products from './views/Products';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <Route path='/welcome'>
        <Welcome />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
    </div>
  );
}

export default App;
