---
sidebar_position: 1
---

![version](https://img.shields.io/github/v/release/Orfium/toolbox)
[![workflows](https://github.com/Orfium/toolbox/workflows/CI/badge.svg)](https://github.com/Orfium/toolbox/actions)
![min size](https://img.shields.io/bundlephobia/min/@orfium/toolbox)
![minzip size](https://img.shields.io/bundlephobia/minzip/@orfium/toolbox)

Toolbox is an internal library from the FrontEnd team that provides all the necessary tools and functionalities for any 
library or application. It focuses in bringing together several common functionalities in one place for reusability.

## The Plan

For a smoother and seamless experience in all of our products, the plan is to bring the following functionalities together:

* Routes
* Navigation Bar
* Request - HTTP requests made through one tool
* Authentication - A function that easily provide access for each user

Excuse my drawing 🙃
![What Contains](/img/Toolbox-graph.jpeg)

## Getting Started

Toolbox is not built to run as a standalone project but rather as part of a React application. In order to see it in action
you either have to connect it with an application locally ([see this](./Contributing.md)) or by running the documentation app
and browsing around the Docs or Guides sections ([see this](./Introduction.md#start-documentation))


## Start documentation

In order to run the documentation app of the Toolbox, you first have to install all its necessary dependencies. They will not be installed automatically
when you first run `yarn`.

1) You must navigate to the *documentation* directory and install the packages there `cd documentation && yarn install`.

2) Then going back to the home directory of the toolbox, you can start the documentation app by running `yarn documentation:up`

