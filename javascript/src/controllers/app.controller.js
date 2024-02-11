
class AppController{
    healthCheck(req, res) {
        res.sendStatus(200)
    }

    welcome(req, res) {
        return res.status(200).json({
            success: true,
            message: "we live baby"
        })
    }
    
    pageNotFound(req, res) {
        return res.status(404).json({
            success: false,
            message: "page not found"
        })
    }
}

module.exports = new AppController()