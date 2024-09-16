import Room from "../models/RoomModel.js";
import Membership from "../models/MembershipModel.js";
import Member from "../models/MemberModel.js";
import Trainer from "../models/TrainerModel.js";
import WorkoutSession from "../models/WorkoutSessionModel.js";

export const getAllRooms = async (req, res) => {
    try {
        const Rooms = await Room.findAll(
            {
                include: [
                    {
                        model: WorkoutSession,
                        as: "WorkoutSession",
                        required: true,
                        include: [
                            {
                                model: Member,
                                as: "Member",
                                required: true,
                                include: [
                                    {
                                        model: Membership,
                                        as: "Membership",
                                        required: true,
                                        attributes: ["type"]
                                    }
                                ]
                            },
                            {
                                model: Trainer,
                                as: "Trainer",
                                required: true
                            }
                        ]
                    }
                ]
            }
        );
        res.send(Rooms);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getRoomById = async (req, res) => {
    const id = req.params.id;
    try {
        const RoomId = await Room.findByPk(id, 
            {
                include: [
                    {
                        model: WorkoutSession,
                        as: "WorkoutSession",
                        required: true,
                        include: [
                            {
                                model: Member,
                                as: "Member",
                                required: true,
                                include: [
                                    {
                                        model: Membership,
                                        as: "Membership",
                                        required: true,
                                        attributes: ["type"]
                                    }
                                ]
                            },
                            {
                                model: Trainer,
                                as: "Trainer",
                                required: true
                            }
                        ]
                    }
                ]
            }
        );
        res.json(RoomId || { message: "Room not found" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const addRoom = async (req, res) => {
    const { room_name } = req.body;
    try {
        const newRoom = await Room.create({
            room_name
        });
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const deleteRoom = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Room.destroy({ where: { id } });
        res.json(result ? "Room deleted" : "Room not found");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const updateRoom = async (req, res) => {
    const id = req.params.id;
    const { room_name } = req.body;
    try {
        const result = await Room.update(
            { room_name },
            { where: { id } }
        );
        res.json(result[0] ? "Room updated" : "Room not found");
    } catch (error) {
        res.status(400).send(error.message);
    }
};
