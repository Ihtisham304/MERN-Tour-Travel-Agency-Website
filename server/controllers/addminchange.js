const apply = require('../models/visaapply');



exports.getAllApply = async (req, res) => {
    try {
        const allapply = await apply.find();
        res.status(200).json({ allapply, message: 'all document retrive' });
        console.log('retrive all document');
    } catch (error) {
        res.status(400).json({ message: 'error while retriving all documents', error });
        console.log('error while retriving documents');
    }
}

exports.getApply = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await apply.findById(id);
        res.status(200).json(doc);
        console.log(doc);

    } catch (error) {
        res.status(400).json({ message: 'error getting one apply', error });
    }
}
exports.updateApply = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const doc = await apply.findByIdAndUpdate(id, data, { new: true });
        res.status(200).json({ doc, message: 'update' });

    } catch (error) {
        res.status(400).json({ message: ' error update doc', error });
    }
}
exports.deleteApply = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await apply.findByIdAndDelete(id);
        res.status(200).json({ doc, message: 'delete success' });
    } catch (error) {
        res.status(400).json({ message: 'error deleting', error });
    }
}
exports.getRecentApply = async (req, res) => {
    try {
        const recentApplies = await apply.find({}, 'from name contactno').limit(5).sort({ $natural: -1 }) //As each mongo objects have _id which is usually a value based on timestamp so it is always sorted in asc order latest one at top. So we just sort it reverse by specifying -1 in $natural operator which tells mongo to use _id field for sorting. Also for readability you can place limit at last doesn't matter ordering or performance issue either. so it is same as db.users.find().sort({_id: - 1}).limit(1); 
        return res.json({ status: true, recentApplies });
    } catch (error) {
        console.log(error);
        return res.json({ status: false, message: "Recent Applies Did not retrived" })
    }
}
exports.getCountApply = async (req, res) => {
    try {
        const applies = await apply.find();
        if (applies) {
            const countApplies = await apply.countDocuments();
            return res.json(countApplies);
        }
        else {
            return res.json({ count: 0 });
        }
    } catch (error) {
        return res.json({ message: "errors count All Applies", error })
    }
}
exports.getCountTicket = async (req, res) => {
    try {
        const applies = await apply.find();
        if (applies) {
            const countApplies = await apply.countDocuments({ applytype: 'ticket' });
            return res.json(countApplies);
        }
        else {
            return res.json({ count: 0 });
        }
    } catch (error) {
        return res.json({ message: "errors count All Applies", error })
    }
}
exports.getCountDubai = async (req, res) => {
    try {
        const applies = await apply.find();
        if (applies) {
            const countApplies = await apply.countDocuments({ applytype: 'dubai' });
            return res.json(countApplies);
        }
        else {
            return res.json({ count: 0 });
        }
    } catch (error) {
        return res.json({ message: "errors count All Applies", error })
    }
}
exports.getCountUmrah = async (req, res) => {
    try {
        const applies = await apply.find();
        if (applies) {
            const countApplies = await apply.countDocuments({ applytype: 'umrah' });
            return res.json(countApplies);
        }
        else {
            return res.json({ count: 0 });
        }
    } catch (error) {
        return res.json({ message: "errors count All Applies", error })
    }
}
exports.getAllTicketApplies = async (req, res) => {
    try {
          const ticketApplies = await apply.find({applytype: 'ticket'})
          return res.json({ticketApplies});
    } catch (error) {
          res.json({message: "Error While Retrive TicketApplies",error});
    }
}
exports.getAllDubaiApplies = async (req, res) => {
    try {
          const dubaiApplies = await apply.find({applytype: 'dubai'})
          return res.json({dubaiApplies });
    } catch (error) {
          res.json({message: "Error While Retrive TicketApplies",error});
    }
}
exports.getAllUmrahApplies = async (req, res) => {
    try {
          const umrahApplies = await apply.find({applytype: 'umrah'})
          return res.json({umrahApplies });
    } catch (error) {
          res.json({message: "Error While Retrive TicketApplies",error});
    }
}
exports.getTicketApply = async(req,res)=>{
    const {id} = req.params
    try {
        const ticket = await apply.findById(id);
        if(!ticket)
        {
            return res.status(404).json({message:"Apply Not found"})
        }
        res.json(ticket);
    } catch (error) {
        
    }
}
exports.putTicketApply = async(req,res)=>{
    const ticketId = req.params.id
    const data = req.body;
       try {
            if (ticketId) {
                const updateTicket = await apply.findByIdAndUpdate(ticketId,data,{new:true})
                return res.json(updateTicket);
            }
       } catch (error) {
             return res.json({message: "error while update Tciket Apply",error})
       }
}
exports.deleteTicketApply = async(req,res)=>{
    const ticketId = req.params.id;
    try {
        if (ticketId) {
            const deletetTicket = await apply.findByIdAndDelete(ticketId);
            return res.json(deletetTicket);
        }
    } catch (error) {
        return res.json({message: "error while deleting ticket",error});
    }
}
exports.getDubaiApply = async(req,res)=>{
    const {id} = req.params
    try {
        const dubai = await apply.findById(id);
        if(!dubai)
        {
            return res.status(404).json({message:"Apply Not found"})
        }
        res.json(dubai);
    } catch (error) {
        return res.json({message: "error get Dubai apply",error});
    }
}
exports.putDubaiApply = async(req,res)=>{
    const dubaiId = req.params.id
    const data = req.body;
       try {
            if (dubaiId) {
                const updateDubai = await apply.findByIdAndUpdate(dubaiId,data,{new:true})
                return res.json(updateDubai);
            }
       } catch (error) {
             return res.json({message: "error while update Dubai Apply",error})
       }
}
exports.deleteDubaiApply = async(req,res)=>{
    const dubaiId = req.params.id;
    try {
        if (dubaiId) {
            const deletetDubai = await apply.findByIdAndDelete(dubaiId);
            return res.json(deletetDubai);
        }
    } catch (error) {
        return res.json({message: "error while deleting Dubai",error});
    }
}
exports.getUmrahApply = async(req,res)=>{
    const {id} = req.params
    try {
        const umrah = await apply.findById(id);
        if(!umrah)
        {
            return res.status(404).json({message:"Apply Not found"})
        }
        res.json(umrah);
    } catch (error) {
        return res.json({message: "error get Umrah apply",error});
    }
}
exports.putUmrahApply = async(req,res)=>{
    const umrahId = req.params.id
    const data = req.body;
       try {
            if (umrahId) {
                const updateUmrah = await apply.findByIdAndUpdate(umrahId,data,{new:true})
                return res.json(updateUmrah);
            }
       } catch (error) {
             return res.json({message: "error while update Umrah Apply",error})
       }
}
exports.deleteUmrahApply = async(req,res)=>{
    const umrahId = req.params.id;
    try {
        if (umrahId) {
            const deletetUmrah = await apply.findByIdAndDelete(umrahId);
            return res.json(deletetUmrah);
        }
    } catch (error) {
        return res.json({message: "error while deleting Umrah Apply",error});
    }
}