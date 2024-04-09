const apply = require('../models/visaapply');


exports.createApply = async (req, res) => {
    data = req.body;

    try {
        const createdata = await apply.create(data);
        res.status(200).json({createdata,message: 'data create successfully'});
    } catch (error) {
        res.status(400).json({ message: 'error while creating data',error });
        console.log('error creating data',error);
    }
}
