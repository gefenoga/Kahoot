const userService = require('./quiz.service')



exports.signup = async(req,res) => {
    userService.nigga()
    return res.status(200).json({msg: "gefen gay"})
}