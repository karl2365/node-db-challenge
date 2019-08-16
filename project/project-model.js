const db = require('../data/db-config.js');


module.exports = {

    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks,
    getFull
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

function getFull() {
    const full = db('project');
        for (let i = 0; i < full.length; i++)    
            console.log('1',full);
            full.tasks = db('task as t')
                            .innerJoin('project as p', 't.project_id', 'p.id')
                            .select('t.id', 't.description', 't.notes', 't.task_completed');
                            console.log('2',full);

            full.resources = db('resource as r')
                                .innerJoin('pro_res as pr', 'r.id', 'pr.res_id')
                                .select('r.id', 'r.name', 'r.description')
                                .where('pr.pro_id', '=', full.id);
                                console.log('3',full);

    return full;


}