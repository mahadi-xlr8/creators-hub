// JotaiWrapper.js
import React from 'react';
import { useAtom } from 'jotai';
import { loginInfo } from '../../globalState';

const JotaiWrapper = ({ children }) => {

  const [loginData] = useAtom(loginInfo);

  return children({ loginData });
};

export default JotaiWrapper;
