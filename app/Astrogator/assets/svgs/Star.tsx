import React, {FC} from 'react';
import {SvgFromXml} from 'react-native-svg';

const xml = `
        <svg
      width="35"
      height="35"
      viewBox="0 0 35 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        style="mix-blend-mode:screen"
        d="M17.2604 23.3748C20.6348 23.3748 23.3704 20.6392 23.3704 17.2648C23.3704 13.8903 20.6348 11.1548 17.2604 11.1548C13.8859 11.1548 11.1504 13.8903 11.1504 17.2648C11.1504 20.6392 13.8859 23.3748 17.2604 23.3748Z"
        fill="url(#paint1_radial_86_13918)"
      />
      <g style="mix-blend-mode:screen">
        <path
          d="M17.2603 18.4547C17.9175 18.4547 18.4503 17.9219 18.4503 17.2647C18.4503 16.6075 17.9175 16.0747 17.2603 16.0747C16.6031 16.0747 16.0703 16.6075 16.0703 17.2647C16.0703 17.9219 16.6031 18.4547 17.2603 18.4547Z"
          fill="white"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_86_13918"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.2603 17.2651) scale(13.23)">
          <stop stop-color="#2E00A7" />
          <stop offset="0.09" stop-color="#270091" />
          <stop offset="0.31" stop-color="#19005D" />
          <stop offset="0.52" stop-color="#0E0035" />
          <stop offset="0.71" stop-color="#060017" />
          <stop offset="0.88" stop-color="#010006" />
          <stop offset="1" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_86_13918"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.2604 17.2648) scale(6.11)">
          <stop stop-color="#8647A7" />
          <stop offset="0.09" stop-color="#743D91" />
          <stop offset="0.31" stop-color="#4B275D" />
          <stop offset="0.52" stop-color="#2A1635" />
          <stop offset="0.71" stop-color="#130A17" />
          <stop offset="0.88" stop-color="#050206" />
          <stop offset="1" />
        </radialGradient>
      </defs>
    </svg>
`;

export const Star: FC = () => {
  return <SvgFromXml xml={xml} />;
};
