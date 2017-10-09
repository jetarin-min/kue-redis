var kue = require('kue');
var queue = kue.createQueue({
  redis: {
    host: 'localhost',
  }
});

queue.process('test', function(job, done){
  doSomeThing(job, done);
});
// queue.watchStuckJobs(2000);

function doSomeThing(job, done) {
  console.log('DOING: ', job.data);
  setTimeout(function(){
    console.log('DONE: ', job.data);
    done();
  }, 1000);
}

// var loop = 1;
// setInterval(function(){
//   var job = queue.create('test', {
//     loop: loop
//   }).save( function(err){
//     if( !err ) console.log('PUSH TO Q: ', loop);
//     loop++;
//   });
// }, 1000);
