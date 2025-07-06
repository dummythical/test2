# Electron HTTPS Message App

This Electron application fetches a JSON message from your local server running on `https://192.168.1.21` and displays it in a window.

The server is expected to respond with:

```json
{"message":"Function called successfully! Yeaaaah"}
```

## Prerequisites

Copy your mkcert root certificate to `rootCA.pem` in this directory so the app can verify the HTTPS connection.

## Running

```bash
npm install
npm start
```

Upon launch, the app will request the JSON message from the server over HTTPS and display it.
