const express = require("express");

const getAllTask = (req,res)=>{
    console.log("get all");
}

const createTask = (req,res)=>{
    res.send("router.post");
}

const getSingleTask = (req,res)=>{
    res.send("router.single");
}

const patchTask = (req,res)=>{
    res.send("router.patch");
}

const deleteTask = (req,res)=>{
    res.send("router.delete");
}

module.exports = {
    getAllTask,
    createTask,
    getSingleTask,
    patchTask,
    deleteTask};