"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', function (req, res) {
    res.render('index', { title: 'Index page' });
});
module.exports = router;
//# sourceMappingURL=index.js.map