import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import type { NextPage } from 'next';
import { ChakraProvider } from '@chakra-ui/react';
import { Home } from '../components/Home';

const Popup: NextPage = () => {
  const [storageValue, setStorageValue] = useState('');

  //ローカルストレージは常に監視して、変更があった時だけuseEffectを発火させる
  chrome.storage.local.get('selectionString', ({ selectionString }) => {
    setStorageValue(selectionString);
  });
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageValue]);

  return <Home />;
};

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Popup />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
