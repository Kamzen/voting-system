
import http from 'http';

import app from './app';


const server = http.createServer(app);


const port = process.env.PORT || 5000;

try{

    server.listen(port)
    console.log('Server Up And Running')

}catch(e : any){

    console.log(e)
    
}

