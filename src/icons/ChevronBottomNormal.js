import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronBottomNormal = ({ style, size = 24, color = '#2F2F68' }) => (
  <Svg
    style={style}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M7.29289 9.29289C7.68342 8.90237 8.31658 8.90237 8.70711 9.29289L12 12.5858L15.2929 9.29289C15.6834 8.90237 16.3166 8.90237 16.7071 9.29289C17.0976 9.68342 17.0976 10.3166 16.7071 10.7071L12.7071 14.7071C12.5196 14.8946 12.2652 15 12 15C11.7348 15 11.4804 14.8946 11.2929 14.7071L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </Svg>
);

export default ChevronBottomNormal;