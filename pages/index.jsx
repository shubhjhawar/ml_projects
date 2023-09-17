import React, {useState} from 'react';
import "../app/globals.css";
import '../styles/fonts.css';
import Layout from './layout';
import { Home } from '@/components';
import { Context } from './index';

// export const Context = React.createContext();

const MyApp = () => {
  const [isNight, setIsNight] = useState(false);
  
  return (
    // <Context.Provider value={[isNight, setIsNight]}>
      <Layout>
      <Home />
      </Layout>
    // </Context.Provider>
  )
}

export default MyApp