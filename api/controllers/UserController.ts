import {Request, Response} from "express";

const UserController = {

    /*
     * @param : req : Request, res : Response
     */
    login : (req : Request, res : Response) => {

        //Destructure studentEmail & studentEmailPassword
        const {studentEmail, studentEmailPassword} = req.body;

        //Validate User Payloads
        

    }

}

export default UserController;