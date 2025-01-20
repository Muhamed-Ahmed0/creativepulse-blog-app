const jwt = require("jsonwebtoken");
const User = require("../models/user");
const authMiddleware = async (req, res, next) => {
  // Extract token from Authorization header (e.g., "Bearer <token>")
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch the user from the database using the user ID from the decoded JWT
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Attach the user document to the request (this will be a Mongoose document)
    req.user = user;

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const adminMiddleware = (req, res, next) => {
  // Ensure that the user is an admin
  if (req.user && req.user.isAdmin) {
    next(); // User is an admin, proceed to the next handler
  } else {
    return res.status(403).json({ message: "Forbidden" }); // If not an admin, return 403
  }
};

module.exports = { authMiddleware, adminMiddleware };
