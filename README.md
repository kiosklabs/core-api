# Core API
Kiosk Labs Core API Boilerplate

- User authentication, Heroku integration, and Tracking system
- [ ] User Authentication
- [x] Heroku Integration
- [x] Multicore
- [x] Tracking System
- [ ] MongoDB integration
- [ ] Update unit tests

## Core Stack

- **Node.js** - [http://nodejs.org/](http://nodejs.org/)
- **Hapi** - [http://hapijs.com/](http://hapijs.com/)

### Quick Start

Clone project and install dependencies:
```bash
$ git clone https://github.com/kiosklabs/core-api.git
$ cd hapi-api
$ npm install
```

Start the server:
```bash
$ npm start
```

Run tests:
```bash
$ npm test
```

### Plugins

- **glue** - Server composer for hapi.js.
https://github.com/hapijs/glue
- **hapi-auth-jwt2** - Secure Hapi.js authentication plugin using JSON Web Tokens (JWT) in Headers, Query or Cookies.
https://github.com/dwyl/hapi-auth-jwt2
- **blipp** - Simple hapi plugin to display the routes table at startup.
https://github.com/danielb2/blipp
- **good** - Hapi process monitor. It listens for events emitted by Hapi Server instances and allows custom reporters to be registered that output subscribed events.
https://github.com/hapijs/good
- **good-console** - Console reporting for Good process monitor.
https://github.com/hapijs/good-console
- **lab** - Node test utility.
https://github.com/hapijs/lab
- **code** - BDD assertion library.
https://github.com/hapijs/code

## Project Structure
```
.
├── server.js         * Server definition (uses the Glue plugin to read a manifest)
├── auth.js           * Auth strategies
├── package.json
├── config/
|   └── manifest.js   * Server configuration
├── api/
|   ├── handlers/
|   |   └── home.js   * Sample handler
|   └── index.js      * REST routes
└── test/
    └── api.js        * API test
```

## Credits
Big thanks for the guidance of the following projects.

- [Ricardo Reis](https://github.com/rjmreis/hapi-api)

## License
The MIT License (MIT)

Copyright (c) 2016 Wely Jesch Sabalilag

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.