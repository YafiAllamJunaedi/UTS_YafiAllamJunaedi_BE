import Member from "../models/MemberModel.js";

export const getAllMembers = async (req, res) => {
    try {
        const Members = await Member.findAll();
        res.send(Members);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getMemberById = async (req, res) => {
    const id = req.params.id;
    try {
        const MemberId = await Member.findByPk(id);
        res.json(MemberId || { message: "Member not found" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const addMember = async (req, res) => {
    const { name, age, join_date  } = req.body;
    try {
        const newMember = await Member.create({
            name,
            age,
            join_date
        });
        res.status(201).json(newMember);
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

export const updateMember = async (req, res) => {
    const id = req.params.id;
    const { name, speciality } = req.body;
    try {
        const result = await Member.update(
            { name, speciality },
            { where: { id } }
        );
        res.json(result[0] ? "Member updated" : "Member not found");
    } catch (error) {
        res.status(400).send(error.message);
    }
};
