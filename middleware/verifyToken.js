import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const verifyToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        res.status(403).json('token not found')
    } else {
        jwt.verify(token, process.env.SECRET_ACCESS_TOKEN,async (err, decode) => {
            if (err) res.status(403).json('the token is incorrect or has expired') 
            if (decode) {
                next()
            }
            else {
                res.status(404).json('not found')
            }

        })
    }

}