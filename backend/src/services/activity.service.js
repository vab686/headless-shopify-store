const Activity = require("../models/Activity");

const track = async (userId, type, metadata = {}) => {

    return Activity.create({
        user: userId,
        type,
        metadata
    });

};

const getHistory = async (userId) => {

    return Activity.find({
        user: userId
    })
        .sort({
            createdAt: -1
        });

}

const getSummary = async (userId) => {

    const result = await Activity.aggregate([
        {
            $match: {
                user: userId
            }
        },
        {
            $group: {
                _id: "$type",
                count: {
                    $sum: 1
                }
            }
        },
        {
            $project: {
                _id: 0,
                activity: "$_id",
                count: 1
            }
        }
    ]);

    return result;

}

module.exports = {
    track,
    getHistory,
    getSummary
};