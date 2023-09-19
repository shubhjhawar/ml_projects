"use client";
import React, { useState, useContext } from 'react';
import { Header, Footer } from '@/components';
import Providers from '@/app/providers';
import "../app/globals.css";
import ThemeSwitcher from '@/app/ThemeSwitcher';

const Layout = ({ children }) => {
  return (
    <Providers>
      <div className={`min-h-screen text-black md:px-20 lg:py-2 relative dark:bg-gradient-to-br dark:from-black dark:to-zinc-600`}>
        <div className="absolute top-0 right-0 md:px-20 py-5 lg:mr-10">
          <ThemeSwitcher />
        </div>
        <Header />

        {children}
        <Footer />
      </div>
    </Providers>
  );
}

export default Layout;
