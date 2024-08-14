const { Types } = require("mongoose");
const User = require("./user.schema");
const bcrypt = require("bcrypt");
const authService = require("./auth.service");
const saltRounds = 10;

exports.signup = async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(saltRounds);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		const doc = new User({
			username: req.body.username,
			password: hashedPassword,
		});

		await doc.save();
		console.log("User created successfully.");
		const token = authService.generateJWT(doc.id, req.body.password);

		return res.status(200).json({ access_token: token });
	} catch (err) {
		return res.status(400).json({ message: `Error in signup: ${err.message}` });
	}
};

exports.login = async (req, res) => {
	try {
		const doc = await User.findOne({ username: req.body.username });

		if (!doc) {
			return res.status(500).json({ message: "User not found." })
		}

		const isMatch = await bcrypt.compare(password, doc.password);

		if (isMatch) {
			const token = authService.generateJWT(doc.id, password);

			return res.status(200).json({ access_token: token });
		} else {
			return res.status(400).json({ message: "Invalid credentials." });
		}
	} catch (err) {
		return res.status(400).json({ message: `Error in login: ${err.message}` });
	}
};

exports.deleteUser = async (req, res) => {
	try {
		console.log(req.body);

		await userService.deleteUser(req.params.userID);
		return res.status(200).json({ msg: "delete was successfull." });
	} catch (err) {
		return res
			.status(400)
			.json({ message: `Error in deleteUser: ${err.message}` });
	}
};
