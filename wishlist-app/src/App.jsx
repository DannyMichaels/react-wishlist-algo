import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout.jsx';
import WishList from './screens/WishList';

function App() {
  return (
    <div className="App">
      <Layout>
        <WishList />
      </Layout>
    </div>
  );
}

export default App;
