const { User } = require("../models/user");

const createUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send("User already exist...");
        }
        user = new User({
            name: req.body.name,
            email: req.body.email,
            salary: req.body.salary,
            designation: req.body.designation,

        });


        const result = await user.save();
        if (!result) {

            return res.status(401).send("User not added");
        }
        return res.status(200).send(result);

    } catch (error) {
        return res.status(400).send(error);

    }


};

const updateUserByID = async (req, res) => {



    try {

        const result = await User.findOneAndUpdate({ _id: req.body.UserId }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                salary: req.body.salary,
                designation: req.body.designation,
            }
        }, { new: true });

        console.log(result);

        if (!result) {

            return res.status(401).send("User not updated");
        }
        return res.status(200).send(result);

    } catch (error) {
        return res.status(400).send(error);

    }



};

const getUserById = async (req, res) => {

    try {

        const result = await User.findById(req.body.UserId);

        console.log(result);

        if (!result) {

            return res.status(401).send("User not found");
        }
        return res.status(200).send(result);

    } catch (error) {
        return res.status(400).send(error);

    }
};

const getAllUser = async (req, res) => {
    try {

        const result = await User.find();

        console.log(result);

        if (!result) {

            return res.status(401).send("User not found");
        }
        return res.status(200).send(result);

    } catch (error) {
        return res.status(400).send(error);

    }
};

const deleteUserById = async (req, res) => {
    try {

        const result = await User.findByIdAndRemove(req.body.UserId);

        console.log(result);

        if (!result) {

            return res.status(401).send("User not deleted");
        }
        return res.status(200).send(result);

    } catch (error) {
        return res.status(400).send(error);

    }

};



module.exports = {
    createUser,
    updateUserByID,
    getUserById,
    getAllUser,
    deleteUserById
}
