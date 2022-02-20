const express = require('express');
const router = express.Router();
const {Op} = require('sequelize');
const {restaurantModel} = require('../models') 


//get request to restroRoutes (Read all records)
router.get('/', async(req, res)=>{
    let operation = {};
    let records = "";
    try{
        //check if there is any query added.
        if(req.query !== {}){
            if(req.query.vegOnly){
                //query based on Veg Only
                operation.vegOnly = req.query.vegOnly;
            }
            if(req.query.cost){
                //query based on cost
                let costList = req.query.cost.split(',');
                if(req.query.opCost === undefined && costList.length !== 1) res.json({message: "Missing details cannot find the filter operation for cost"});
                if(req.query.opCost === "and")
                {
                    operation.cost = {[Op.contains]:costList} 
                }
                else if(req.query.opCost === "or" || costList.length === 1){
                    console.log(costList.length);
                    //a temporary array
                    let prices = [];
                    //looping through all cuisines
                    costList.forEach(price => {
                        // Creating a JSON array
                        prices.push({[Op.contains]: [price]})
                    })
                    //operation for JSON array object because Op.or does not work on string[]
                    operation.cost = {[Op.or]:costList}
                    prices = [];
                }
            }
            if(req.query.cuisineTypes){
                // quey based on cuisine types
                let cuisineTypes = req.query.cuisineTypes.split(',')
                if(req.query.opCT === undefined && cuisineTypes.length !== 1) res.json({message: "Missing details cannot find the filter operation"});
                if(req.query.opCT === "and")
                {
                    operation.cuisineTypes = {[Op.contains]:cuisineTypes} 
                }
                else if(req.query.opCT === "or" || cuisineTypes.length === 1){
                    //a temporary array
                    let cuisineList = [];
                    //looping through all cuisines
                    cuisineTypes.forEach(cuisine => {
                        // Creating a JSON array
                        cuisineList.push({[Op.contains]: [cuisine]})
                    })
                    //operation for JSON array object because Op.or does not work on string[]
                    operation.cuisineTypes = {[Op.or]:cuisineList}
                    cuisineList = [];
                }
            }
            records = await restaurantModel.findAll({
                where:operation
            })
            res.status(200).json({
                "Total Records": records.length,
                records
            })
            operation = {};
        }
    }
    catch(err){
        console.log(err);
    }
});

//POST request to restroRoutes (Create Record)
router.post('/', async(req,res) => {
    const data = req.body;
    try{
        // let message = [];     //commented code for multiple entries
        // for(const row of data)
        // {
            let record = await restaurantModel.create(date);
            message = `records updated with ids ${record.restaurant_id} -- `;
        // }
        res.status(200).json({
            message
        })
    }catch(err){
        console.log(err);
    }
})


//PATCH request to restroRoutes (Update a paramter of the record)
router.patch('/:id',async (req,res)=>{
    const id = req.params.id; 
    const data = req.body;
    try{
        const record = await restaurantModel.update(data,{where:{restaurant_id: id}});
        res.status(200).json({
            message: `record with Restaurant_Id:${id}`
        })
    }
    catch(err){
        console.log(err);
    }
})

//DELETE request to restroRoutes(Deleting a record)
router.delete('/:id', async(req,res) => {
    const id = req.params.id;
    try{
        const record = await restaurantModel.destroy({
            where:{restaurant_id: id}
        })
        res.status(200).json({
            message: `Record with Restaurant_Id: ${id} deleted`
        })

    }catch(err){
        console.log(err);
    }
});



module.exports = router;