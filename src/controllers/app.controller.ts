import { Request, Response } from "express"

class AppController{
    healthCheck(req: Request, res: Response) {
        res.sendStatus(200)
    }

    welcome(req: Request, res: Response) {
        return res.status(200).json({
            success: true,
            message: "we live baby"
        })
    }
    
    pageNotFound(req: Request, res: Response) {
        return res.status(404).json({
            success: false,
            message: "page not found"
        })
    }
}

export default new AppController()