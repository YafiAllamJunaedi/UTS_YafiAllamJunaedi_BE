import Member from "../models/MemberModel.js";
import Membership from "../models/MembershipModel.js";

export const getAllMembers = async (req, res) => {
    try {
        const Members = await Member.findAll({
            include: [
                {
                    model: Membership,
                    as: "Membership",
                    required: false,
                    attributes: ["type"]
                }
            ]
        });
        res.json(Members);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getMemberById = async (req, res) => {
    const id = req.params.id;
    try {
        const MemberId = await Member.findByPk(id, {
            include: [
                {
                    model: Membership,
                    as: "Membership",
                    required: true,
                    attributes: ["type"]
                }
            ]
        });
        res.json(MemberId || { message: "Member not found" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const addMember = async (req, res) => {
    console.log("request body : ", req.body)
    const { name, age, join_date, MembershipId  } = req.body;
    try {
        const newMember = await Member.create({
            name,
            age,
            join_date,
            MembershipId,
        });
        res.status(201).json(newMember);
    } catch (error) {
        console.error('Error inserting member:', error);
        res.status(400).send(error.message);
    }
};

export const updateMember = async (req, res) => {
    const id = req.params.id;
    const { name, age, join_date, MembershipId } = req.body;
    try {
        const result = await Member.update(
            { name, age, join_date, MembershipId },
            { where: { id } }
        );
        res.json(result[0] ? "Member updated" : "Member not found");
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const deleteMember = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Member.destroy({ where: { id } });
        res.json(result ? "Member deleted" : "Member not found");
    } catch (error) {
        res.status(500).send(error.message);
    }
};