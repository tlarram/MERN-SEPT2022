const JobController = require('../controllers/job.controller');

module.exports = (app)=>{
    app.get('/api', JobController.index);
    app.get('/api/jobs', JobController.allJobs);
    app.post('/api/jobs', JobController.addJob);
    app.get('/api/jobs/:id', JobController.oneJob);
    app.put('/api/jobs/:id', JobController.updateJob);
    app.delete('/api/jobs/:id',JobController.deleteJob);
}
