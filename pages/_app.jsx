import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import ThemeProvider from '../context/theme'

class MyApp extends App {
  
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
          <Head>
          <link href="https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap" rel="stylesheet" />
          </Head>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
          <style global jsx>{`
            html,body{
                font-family: 'Rubik', helvetica, arial, sans-serif;
                color: #2C3249;
                margin: 0;
                padding: 0;
            }
            h1,h2,h3,h4{
              margin: 0;
              padding: 0;
            }
          }`}</style>
      </React.Fragment>
    )
  }
}
export default MyApp