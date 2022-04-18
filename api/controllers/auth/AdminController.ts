import {Request, Response} from "express";

const AdminController = {

    signUp : (req : Request, res : Response) => {

        const {email,username,password} = req.body;

    }

}

export default AdminController;