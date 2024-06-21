# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.8.0] - 2024-06-21

### Added
- open weather request serverside
- util functions to filter data

### Fixed
- improvement in the server structure to facilitate understanding

## [0.7.0] - 2024-06-21

### Added
- hooks folder
- added hook to get geolocation

## [0.6.1] - 2024-06-21

### Added
- util folder
- util function to convert hex color to rgba

### FIXED
- adjuted theme color style
- view opacity

## [0.6.0] - 2024-06-21

### Added
- bing api request serverside
- stores and context to get background image

## [0.5.0] - 2024-06-21

### Added
- dockerfiles and docker structure for app-server (dev and prod)
- created app-server folder
- updated docker-compose to feature app-server containers

## [0.4.2] - 2024-06-20

### Added
- created app-server folder
- migrate front to app-web folder

## [0.4.1] - 2024-06-20

### Added
- wip: bing api request
- wip: stores and context

## [0.4.0] - 2024-06-20

### Added
- creation of multiple format types in the text component
- creation of temperature component
- new types and interfaces added
- layout adjusted to a version closer to the final prototype
- added color theme
- mocked interface variables added
- layout mocked variables added

## Fixed
- minor layout fixes

## [0.3.0] - 2024-06-20

### Added
- basic layout
- screen breakpoints to create responsive components
- basic compnontens
- util dependencies: @svgr/webpack, file-loader and styled-compnontens
- colors.ts' file

##Fixed
- improved webpack settings to allow .svg files
- improved typescript settings to allow .svg files

## [0.2.1] - 2024-06-18

### Fixed
- improved config.ts to receive all environment variables
- improved docker dev setup to ensure the application runs correctly
- fixed a typo on changelog file

## [0.2.0] - 2024-06-17

### Added
- changelog file
- docker configuration for dev and prod
- environments variables configuration for dev and prod

## [0.1.0] - 2024-06-16

### Added
- initial commit, webpack installation for dev and prod