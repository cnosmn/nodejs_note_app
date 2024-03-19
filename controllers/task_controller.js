const express = require("express");

const Task = require("../models/task");

const getAllTask = async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({msg:error});
    }
    console.log("get all");
}

const createTask = async (req,res)=>{

    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({message : error});
        console.log("user create controller error");
    }
    

}

const getSingleTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params;
        const taskOne = await Task.findOne({_id:taskID});

        if (!taskOne) {
            return res.status(404).json({msg:"no task with id : ",taskID});
        }
        res.status(200).json({taskOne});

    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const patchTask = async (req,res)=>{
    //update
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id : taskID},req.body,{
            new: true,
            runValidators: true,
        });

        if (!task) {
            return res.status(404).json({msg : "no task with id : ",taskID});
        }
        
        res.status(200).json({task});
    } catch (error) {
        res.status(404).json(error);
    }
}

const deleteTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params;
        const task = await Task.findByIdAndDelete({_id:taskID});
        if (!task) {
            return res.status(404).json({msg:"no task with id : ",taskID});
        }
        //res.status(200).json({task});
        //res.status(200).send();
        res.status(200).json({task:null, status:'success'});

    } catch (error) {
        res.status(500).json({msg:error});
    }
}

module.exports = {
    getAllTask,
    createTask,
    getSingleTask,
    patchTask,
    deleteTask
};