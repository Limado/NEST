
async function authenticate(req, res, next) {
    try {
        res.status(200).json({ error: false, message: "User authenticated" });
    } catch (e) {
        console.log("Error calling Index->authenticate");
        console.log(e)
        next(e)
    }
}

module.exports = {
    authenticate: authenticate
}
