import React from 'react';
import {BallTriangle} from  'react-loader-spinner'
/*import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";*/

const Loading = () => (
  <div className="flex justify-center items-center ">
   <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
  </div>
);
export default Loading
