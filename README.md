# Electron HTTPS Message App

This Electron application fetches a JSON message from your local server running on `https://192.168.1.21` and displays it in a window.

The server is expected to respond with:

```json
{"message":"Function called successfully! Yeaaaah"}
```

## Prerequisites

Ensure your mkcert root certificate is trusted by Node.js. You can do this by setting the `NODE_EXTRA_CA_CERTS` environment variable to the path of your mkcert root certificate (for example `rootCA.pem`).

## Running

```bash
npm install
NODE_EXTRA_CA_CERTS=path/to/rootCA.pem npm start
```

Upon launch, the app will request the JSON message from the server over HTTPS and display it.
