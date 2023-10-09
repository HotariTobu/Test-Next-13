// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
  // `req` is an instance of `http.IncomingMessage`, plus some pre-build middlewares.
  // `res` is an instance of `http.ServerResponse`, plus some helper functions.
  res.status(200).json({ text: 'Hello' })
}
