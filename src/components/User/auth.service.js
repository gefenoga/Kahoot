const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

exports.generateJWT = (userID, password) => {
	let jwtSecretKey = process.env.JWT_SECRET_KEY;
	const payload = {
		userID: userID,
		password: password
	};
	const token = jwt.sign(payload, jwtSecretKey, {
		expiresIn: process.env.JWT_EXPIRES_AT,
	});
	return token;
};
