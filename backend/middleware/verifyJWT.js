import jwt from "jsonwebtoken";

function verifyJWT(req,res,next) {
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        return res.sendStatus(401);
    }
    console.log(authHeader); //Form: 'Bearer token'
    const token = authHeader.split(' ')[1]; //Gets token from header ^
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,
        (err,decoded) => {
            if(err){
                return res.sendStatus(403);
            }
            req.user = decoded.username;
            next();
        }
    )
}

export default verifyJWT;