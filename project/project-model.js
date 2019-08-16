const db = require('../data/db-config.js');


module.exports = {

    addResource,
    getResources,
    addProject
};


function addResource(resource) {
    return db('resource').insert(resource);
}

function getResources() {
    return db('resource');
}

function addProject(project) {
    return db('project').insert(project);
}