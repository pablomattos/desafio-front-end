import React from 'react';
import FirstContent from './components/FirstContent'
import SecondContent from './components/SecondContent'
import ThirdContent from  './components/ThirdContent'
import FooterContent from './components/FooterContent';

function App() {
  return (
    <div id="app-content"> 
            <FirstContent/>
            <SecondContent/>
            <ThirdContent/>
            <FooterContent/>
        </div>
  );
}

export default App;
