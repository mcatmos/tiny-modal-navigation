import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Modal from './components/Modal/Modal';
import ModalWithNavigation from './components/Modal/ModalWithNavigation';
import modalNavConfig from './components/Modal/Config/ModalNavConfig';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh'
      }}
    >
      {ModalWithNavigation(Modal, modalNavConfig)}
    </div>
  );
};

export default hot(App);
