const express=require('express');
const { protect } = require('../middleware/authMiddleware');
const router=express.Router();

// router.post('/',protect,accessChat)
// router.get('/',fetchChats)
// router.post('/group',protect, createGroupChat)
// router.put('/rename', protect,renameGroup)
// router.put('/groupremove',protect, removeFromGroup)
// router.put('/groupadd',protect,addToGroup)

module.exports=router