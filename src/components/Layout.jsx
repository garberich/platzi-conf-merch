/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.css';

const Layout = ({ children }) => (
  <div className="Main">
    <Header />
    {children} // Hijo, permite embeber o enviar otro componente que va a hacer
    render
    <Footer />
  </div>
);

export default Layout;
