import { graphql, useStaticQuery, Link } from 'gatsby'
import React, { useState } from 'react'

function Header() {
  const [isExpanded, toggleExpansion] = useState(false)
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="bg-white sticky top-0 shadow-xs">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-gray-700 no-underline">
            <ChefHat />
            <span className="text-xl font-bold tracking-tight ml-2">{site.siteMetadata.title}</span>
          </h1>
        </Link>

        <button
          className="flex items-center block px-3 py-2 text-gray-700 border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-gray-700 no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

const ChefHat = () => (
  <svg
    id="ChefHat"
    enableBackground="new 0 0 512 512"
    height="28"
    viewBox="0 0 512 512"
    width="28"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <g>
        <g>
          <g>
            <path
              d="m381.419 512h-250.84c-6.008 0-10.879-4.871-10.879-10.879v-37.722h272.598v37.722c0 6.008-4.871 10.879-10.879 10.879z"
              fill="#fddaa9"
            />
            <path d="m119.7 463.399h272.598v31.26h-272.598z" fill="#fcc16d" />
          </g>
          <path
            d="m109.137 338.013h293.725v123.56c0 6.006-4.873 10.879-10.879 10.879h-271.967c-6.006 0-10.879-4.873-10.879-10.879z"
            fill="#ffeed3"
          />
          <path
            d="m491.139 134.521c1.082 48.048-36.201 87.617-83.352 90.213-2.751.155-4.924 2.38-4.924 5.141v94.076h-293.726v-94.076c0-2.761-2.174-4.986-4.924-5.141-47.151-2.596-84.434-42.165-83.352-90.213 1.082-47.697 40.579-86.257 88.286-86.257 19.027 0 36.623 6.037 51.035 16.277 15.351-37.849 52.468-64.541 95.818-64.541s80.467 26.692 95.817 64.541c14.412-10.24 32.008-16.277 51.025-16.277 47.708 0 87.215 38.56 88.297 86.257z"
            fill="#ffeed3"
          />
          <g fill="#fddaa9">
            <path d="m109.137 338.013h293.725v34.666h-293.725z" />
            <path d="m370.577 338.013h32.286v123.56c0 6.006-4.873 10.879-10.879 10.879h-32.286c6.016 0 10.879-4.873 10.879-10.879z" />
            <path d="m491.139 134.521c1.082 48.048-36.201 87.617-83.352 90.213-2.751.155-4.924 2.38-4.924 5.141v94.076h-32.286v-89.327c0-5.275 3.997-9.684 9.251-10.23 45.081-4.698 80.086-43.309 79.025-89.873-.948-42.217-31.997-77.264-72.205-84.763 5.254-.979 10.673-1.494 16.205-1.494 47.697 0 87.204 38.56 88.286 86.257z" />
          </g>
        </g>
        <g>
          <g>
            <path
              d="m163.006 352.075v120.377h-15.453v-120.377c0-4.265 3.462-7.726 7.726-7.726 4.265-.001 7.727 3.461 7.727 7.726z"
              fill="#fddaa9"
            />
          </g>
          <g>
            <path
              d="m213.361 352.075v120.377h-15.453v-120.377c0-4.265 3.461-7.726 7.726-7.726 4.276-.001 7.727 3.461 7.727 7.726z"
              fill="#fddaa9"
            />
          </g>
          <g>
            <path
              d="m263.726 352.075v120.377h-15.453v-120.377c0-4.265 3.461-7.726 7.726-7.726 4.266-.001 7.727 3.461 7.727 7.726z"
              fill="#fddaa9"
            />
          </g>
          <g>
            <path
              d="m314.081 352.075v120.377h-15.453v-120.377c0-4.265 3.462-7.726 7.726-7.726 4.277-.001 7.727 3.461 7.727 7.726z"
              fill="#fddaa9"
            />
          </g>
          <g>
            <path
              d="m364.447 352.075v120.377h-15.453v-120.377c0-4.265 3.461-7.726 7.726-7.726 4.266-.001 7.727 3.461 7.727 7.726z"
              fill="#fddaa9"
            />
          </g>
        </g>
        <path d="m109.14 310.192h293.718v41.882h-293.718z" fill="#fc7c6a" />
        <path d="m370.576 310.188h32.286v41.887h-32.286z" fill="#fc6d5a" />
      </g>
      <g>
        <path
          d="m109.137 189.038v40.836c0-2.761-2.174-4.986-4.924-5.141-3.575-.196-7.088-.608-10.528-1.216v-34.48c0-4.265 3.462-7.726 7.726-7.726 4.265.001 7.726 3.462 7.726 7.727z"
          fill="#fddaa9"
        />
      </g>
      <g>
        <path
          d="m418.315 189.038v34.48c-3.441.608-6.954 1.02-10.528 1.216-2.751.155-4.924 2.38-4.924 5.141v-40.836c0-4.265 3.461-7.726 7.726-7.726 4.265-.001 7.726 3.46 7.726 7.725z"
          fill="#fddaa9"
        />
      </g>
    </g>
  </svg>
)

export default Header
