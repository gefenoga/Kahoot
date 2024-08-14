const Session = require('./session.schema')


exports.createSession = async (req, res) => {
    try {
        const newSession = req.body;
        const doc = new Session(newSession)
        await doc.save()
        console.log('session saved successfully.')

        return res.status(201).send();
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.fetchAllSessions = async (req, res) => {
    try {
        const docs = await Session.find();
        return res.status(200).json(docs);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.fetchSession = async (req, res) => {
    try {
        const sessionID = req.params.sessionID;
        const doc = await Session.findById(sessionID);
        return res.status(200).json(doc);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.updateSession = async (req, res) => {
    try {
        const sessionID = req.params.sessionID;
        const changes = req.body;
        await Session.findByIdAndUpdate(sessionID, changes);
        return res.status(200).send();
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.deleteSession = async (req, res) => {
    try {
        const sessionID = req.params.sessionID;
        await Session.findByIdAndDelete(sessionID);
        return res.status(200).send();
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}