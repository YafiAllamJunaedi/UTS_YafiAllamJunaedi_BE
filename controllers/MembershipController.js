import Membership from "../models/MembershipModel.js";

export const getAllMemberships = async (req, res) => {
    try {
        const Memberships = await Membership.findAll();
        res.send(Memberships);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
