import React from 'react'

const RootLayout = ({ children }) => {
  return (
    <html lang='tr'>
        <body>
            {children}
        </body>
    </html>
  )
};

export default RootLayout;