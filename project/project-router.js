const express = require('express');
const knex = require('knex');
const project = require('./project-model.js');




const router = express.Router();

router.post('/resource', async (req, res) => {
    const resourceData = req.body;
    try {
        const resource = await project.addResource(resourceData);
        res.status(201).json(resource)
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to create new resource.' });

    }
})

router.get('/resource', async (req, res) => {
    try {
        const resources = await project.getResources();
        if (resources) {
            res.json(resources);
          } else {
            res.status(404).json({ message: 'Could not find resources.' })
          }
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to get resources' });
      }
} 
);



module.exports = router;
