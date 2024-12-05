const jwt = require('jsonwebtoken')

const authenticatedUser = function (req, res, next) {
  const auth = req.get("Authorization")

  if (!auth) {
    res.status(400).send("Error no user authentication token found.")
  }
  if (!auth.includes("Bearer")) {
    res.status(400).send("Error invalid auth token.")
  }

  const token = auth.slice(7)

  console.log(token)
  
  try {
    const decodedToken = jwt.verify(token, "enter-secret-key")
    console.log(decoded)
  } catch (error) {
    console.log(error)
  }

  req.user = decodedToken.sub
  next()
}

module.exports = authenticatedUser