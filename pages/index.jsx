import React from 'react';
import "../app/globals.css";
import '../styles/fonts.css';
import Layout from './layout';
import { Home } from '@/components';

const MyApp = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default MyApp