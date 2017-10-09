var kue = require('kue');
var queue = kue.createQueue({
  prefix: 'q',
  redis: {
    host: 'localhost',
  }
});

// queue.process('test', function(job, done){
//   doSomeThing(job, done);
// });
// queue.watchStuckJobs(2000);

// function doSomeThing(job, done) {
//   console.log('DOING: ', job.data);
//   done();
// }

var loop = 1;
setInterval(function(){
  console.log('WILL PUSH: ', loop);
  var job = queue.create('test', {
    loop: loop,
    from: process.argv[2]
  }).save( function(err){
    if( !err ) console.log('PUSH TO Q: ', loop);
    loop++;
  });
}, 500);
