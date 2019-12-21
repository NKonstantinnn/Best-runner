import React from 'react';
import { Global, css } from '@emotion/core';

import { GrayColor } from '../../../shared/styled/colors';

const GlobalStyles = () => (
  <Global
    styles={css`
      html {
        min-height: 100%;
        position: relative;
      }
      
      body {
        a {
          text-decoration: none;
          
          &:hover {
              text-decoration: none;
          }
        }
        
        .app {
          background-color: ${GrayColor};
        }
      }
    `}
  />
);

export default GlobalStyles;
