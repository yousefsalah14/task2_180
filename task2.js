const http= require('http');
const { sensitiveHeaders } = require( 'http2' );

const server = http.createServer((req,res)=>{
    
    if(req.url==="/")
    {
        res.statusCode=200;
        res.write('Hello world');
    
    }
    

    res.end()

})
server.listen(5000,()=>console.log('server is on'))



  cour.get('/courses', (req, res) => {
    res.status(200).send(courses);
  });
//   cour.post('/courses', (req, res) => {
//     const course = req.body;
//     courses.push(course);
//     res.status(201).send('success');
//   });
//   cour.use((req, res) => {
//     res.status(404).send('Route not found');
//   });
  
  
  