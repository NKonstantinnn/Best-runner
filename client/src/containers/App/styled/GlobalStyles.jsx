import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global
    styles={css`
      html {
        min-height: 100%;
        position: relative;
      }
      
      body {
        margin-bottom: 80px;
      }
    `}
  />
);

export default GlobalStyles;
