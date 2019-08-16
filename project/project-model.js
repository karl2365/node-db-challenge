const db = require('../data/db-config.js');


module.exports = {

    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks
};


function addResource(resource) {
    return db('resource').insert(resource);
}

function getResources() {
    return db('resource');
}

function addProject(project) {
    console.log(project);
    return db('project').insert(project);
}

function getProjects() {
    return  db('project');
}

function addTask(task) {
    return db('task').insert(task);
}

function getTasks() {
    return db('task as t')
        .innerJoin('project as p', 't.project_id', 'p.id' )
        .select('p.name', 'p.description', 't.description as task', 't.notes', 't.task_completed')
        
}