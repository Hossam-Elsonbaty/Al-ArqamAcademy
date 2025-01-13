import { Triangle } from 'react-loader-spinner'
import React from 'react'

const Loader = () => {
  return (
    <div className="opacity-div">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#256882"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}

export default Loader