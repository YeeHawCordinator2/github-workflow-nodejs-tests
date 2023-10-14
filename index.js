const express = require('express');
const bcrypt = require("bcrypt");

console.log(bcrypt.hash("password", 10));