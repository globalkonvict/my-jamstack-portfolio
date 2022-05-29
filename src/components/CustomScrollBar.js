import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'

const CustomScrollBar = ({ children, props, orientation }) => {
  if (orientation === 'horizontal') {
    return (
      <Scrollbars
        autoHeight
        autoHeightMin={350}
        autoHeightMax={400}
        renderThumbHorizontal={({ style }) => (
          <div
            style={{
              ...style,
              backgroundColor: 'rgba(10, 129, 255)',
              width: 8,
              borderRadius: 4
            }}
          />
        )}
      >
        {children}
      </Scrollbars>
    )
  }

  return (
    <Scrollbars
      style={{ height: '100vh' }}
      renderTrackVertical={({ style }) => (
        <div
          style={{
            ...style,
            right: 0,
            bottom: 0,
            top: 0,
            width: 14,
            zIndex: 3000
          }}
        />
      )}
      renderThumbVertical={({ style }) => (
        <div
          style={{
            ...style,
            backgroundColor: 'rgba(10, 129, 255)',
            width: 8,
            marginLeft: 6,
            borderRadius: 4
          }}
        />
      )}
      {...props}
    >
      {children}
    </Scrollbars>
  )
}

export default CustomScrollBar
