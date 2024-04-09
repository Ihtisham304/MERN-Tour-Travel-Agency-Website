const router = require('express').Router();
const applyController = require('../controllers/addminchange')

router.get('/getallapply', applyController.getAllApply);
//  Dashboard Apis 
router.get('/getcountallapply', applyController.getCountApply);
router.get('/getcountticket', applyController.getCountTicket);
router.get('/getcountdubai', applyController.getCountDubai);
router.get('/getcountumrah', applyController.getCountUmrah);
router.get('/getrecent', applyController.getRecentApply);
//  Ticket Apis 
router.get('/getticketapplies', applyController.getAllTicketApplies);
router.get('/getticketapply/:id', applyController.getTicketApply);
router.put('/putticketapply/:id', applyController.putTicketApply);
router.delete('/deleteticketapply/:id', applyController.deleteTicketApply);

// Dubai APis 
router.get('/getdubaiapply/:id',applyController.getDubaiApply)
router.put('/putdubaiapply/:id',applyController.putDubaiApply)
router.delete('/deletedubaiapply/:id',applyController.deleteDubaiApply)

// Umrah Apis 
router.get('/getumrahapply/:id',applyController.getUmrahApply)
router.put('/putumrahapply/:id',applyController.putUmrahApply)
router.delete('/deleteumrahapply/:id',applyController.deleteUmrahApply)

router.get('/getdubaiapplies', applyController.getAllDubaiApplies);
router.get('/getumrahapplies', applyController.getAllUmrahApplies);
router.get('/getapply/:id', applyController.getApply);
router.put('/updateapply/:id', applyController.updateApply);
router.delete('/deleteapply/:id', applyController.deleteApply);


module.exports = router;