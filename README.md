# resolver

[![Build Status](https://travis-ci.org/Artsdatabanken/resolver.svg?branch=master)](https://travis-ci.org/Artsdatabanken/resolver)
[![Coverage Status](https://coveralls.io/repos/github/Artsdatabanken/resolver/badge.svg?branch=master)](https://coveralls.io/github/Artsdatabanken/resolver?branch=master)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![Screenshot](doc/screenshot.png "ratatouille screenshot")](https://maps.artsdatabanken.no)

Demo: [resolver](https://maps.artsdatabanken.no)

resolver maps from a url to a different url.

Example:

From: <https://artsdatabanken.no/Taxon/Canis%20lupus/48025>
To: <https://www.gbif.org/occurrence/map?q=Canis%20Lupus>

## Features

-

## Installation

```
npm install
npm start
```

Navigate to http://localhost:8000/

## Configuration

resolver has command-line options:

```
Usage: node resolver.js [options] [rootDirectory]

rootDirectory    Data directory containing resolver.json configuration file

Options:
   -p PORT --port PORT       Set the HTTP port [8000]

A root directory is required.
```

## Images

The following images are built for each resolver release, using the Node.js base image.

- Latest: https://hub.docker.com/r/artsdatabanken/resolver/

### Docker image

To use prebuilt docker image, navigate to a folder containing .mbtile file(s) and run

```
docker run -v ${pwd}:/data -p 8000:8000 artsdatabanken/resolver
```
