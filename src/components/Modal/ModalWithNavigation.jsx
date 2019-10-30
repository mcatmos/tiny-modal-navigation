import React, { useState, useEffect } from 'react';

const ModalWithNavigation = (Modal, NavigationData) => {
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    console.log(navigation);
  });

  const nextScene = () => {
    setSceneIndex(sceneIndex + 1);
  };

  const previousScene = () => {
    setSceneIndex(sceneIndex - 1);
  };

  const close = () => {
    console.log('close!');
  };

  const navigation = NavigationData(nextScene, previousScene, close);
  const sceneKeys = Object.keys(navigation);

  const renderScene = () => {
    return navigation[sceneKeys[sceneIndex]].component;
  };

  const getButtonsConfig = () => {
    return navigation[sceneKeys[sceneIndex]].buttons;
  };

  return <Modal renderScene={renderScene} buttonsConfig={getButtonsConfig()} />;
};

export default ModalWithNavigation;
