import React, { FC } from 'react'
import {
  getWrapperLoadingClassName,
  getLoadingClassName,
  getLoadingChildClassName,
} from './loading.style'
import { LoadingProps } from './loading.type'

const Loading: FC<LoadingProps> = (props) => {
  const { fullScreen = false, size = 'large', zIndex = 2000 } = props

  return (
    <div
      className={getWrapperLoadingClassName(fullScreen)}
      style={{
        zIndex,
      }}
    >
      <div className={getLoadingClassName(size)}>
        <div
          className={getLoadingChildClassName(size)}
          style={{ animationDelay: '-0.45s' }}
        ></div>
        <div
          className={getLoadingChildClassName(size)}
          style={{ animationDelay: '-0.3s' }}
        ></div>
        <div
          className={getLoadingChildClassName(size)}
          style={{ animationDelay: '-0.15s' }}
        ></div>
        <div className={getLoadingChildClassName(size)}></div>
      </div>
    </div>
  )
}

export default Loading
