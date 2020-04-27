const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
const meta = yaml.load(fs.readFileSync('./content/meta.yml', 'utf8'))
const resume = require('./content/resume.json')
const { matomoSite, matomoUrl } = meta[0]
const { name, website } = resume.basics

require('dotenv').config()

console.log(process.env)

module.exports = {
  siteMetadata: {
    siteUrl: `${website}`
  },
  plugins: [
    'gatsby-transformer-yaml',
    'gatsby-transformer-json',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'content')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pkg',
        path: path.join(__dirname, 'package.json')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        icon: true
      }
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: `${matomoSite}`,
        siteUrl: `${website}`,
        matomoUrl: `${matomoUrl}`,
        localScript: '/piwik.js'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: name.toLowerCase(),
        short_name: 'mk',
        start_url: '/',
        background_color: '#e7eef4',
        theme_color: '#e7eef4',
        icon: 'src/images/favicon-butterfly.png',
        display: 'standalone',
        cache_busting_mode: 'name',
        theme_color_in_head: false // dynamically set in ThemeSwitch
      }
    },
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark',
        classNameLight: 'light',
        minify: true
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-webpack-size'
    // 'gatsby-plugin-webpack-bundle-analyser-v2'
  ]
}
