import Admin from "../models/AdminModel.js";
import jwt from 'jsonwebtoken'
import 'dotenv/config'
export const getAllAdmins = async (req, res) => {
    try {
        const Admins = await Admin.findAll();
        res.json(Admins);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getAdminById = async (req, res) => {
    const id = req.params.id;
    try {
        const AdminId = await Admin.findByPk(id);
        res.json(AdminId || { message: "Admin not found" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const addAdmin = async (req, res) => {
    console.log("request body : ", req.body)
    const { email, password  } = req.body;
    try {
        const newAdmin = await Admin.create({
            email,
            password
        });
        res.status(201).json(newAdmin);
    } catch (error) {
        console.error('Error inserting Admin:', error);
    }
};

export const updateAdmin = async (req, res) => {
    const id = req.params.id;
    const { email, password } = req.body;
    try {
        const result = await Admin.update(
            { email, password },
            { where: { id } }
        );
        res.json(result[0] ? "Admin updated" : "Admin not found");
    } catch (error) {
    }
};

export const deleteAdmin = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Admin.destroy({ where: { id } });
        res.json(result ? "Admin deleted" : "Admin not found");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const loginAdmin = async (req, res) => {
    try {
        const admin = await Admin.findOne({
            where: {
                email: req.body.email
            }
        })
        if (admin !== null) {

            const match = req.body.password === admin.password
            console.log(match)
            if (!match) {
                console.log('password')
                res.status(400).json("password salah")
            }else {
                const adminId = admin.id
                const email = admin.email
                const password = admin.password

            //? payload
            const accessToken = jwt.sign({ adminId, email, password }, process.env.SECRET_ACCESS_TOKEN, {
                expiresIn: '1h'
            })
            const refreshToken = jwt.sign({ adminId, email, password }, process.env.SECRET_REFRESH_TOKEN, {
                expiresIn: '1d'
            })

            //? simpan refresh token dalam database
            await Admin.update({ refresh_token: refreshToken }, {
                where: {
                    id: adminId
                }
            })
            
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
                
            })
            

            res.json({ accessToken })
        }
        } else {

            res.status(500).json("Email belum terdaftar")
        }
    } catch (err) {
        res.status(500).json(err)

    }
}