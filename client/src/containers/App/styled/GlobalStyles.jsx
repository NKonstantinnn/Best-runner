import React from 'react';
import { Global, css } from '@emotion/core';

import { GrayLightColor } from '../../../shared/styled/colors';

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
          background-color: ${GrayLightColor};
          min-height: 100vh;
        }
      }
    `}
  />
);

export default GlobalStyles;
