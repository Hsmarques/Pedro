import PropTypes from 'prop-types'
import React from 'react'

import Header from './header'
import { Instagram } from './InstagramFeed'

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-orange-200">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">{children}</main>

      <footer className="bg-white">
        <h2 className="flex content-center text-center justify-center whitespace-pre text-gray-700 text-xl my-4 px-2 flex-col md:flex-row">
          Follow no Instagram{' '}
          <a
            href="https://instagram.com/pedrogspereira/"
            className="text-orange-400 hover:text-orange-500"
          >
            @pedrogspereira
          </a>
        </h2>
        <br />
        <Instagram />
        <div className="flex content-center justify-center whitespace-pre text-gray-600 text-xs my-2">
          Icons made by{' '}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {' '}
            www.flaticon.com
          </a>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
