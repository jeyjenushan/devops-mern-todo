//It acts as a frontend to test the backend api endpoints
const request=require('supertest');
const {server,app}=require('../index');
const mongoose=require('mongoose');
//describe:  block for grouping related tests together and writeing test cases for the /tasks endpoint
describe('GET api/tasks',()=>{
    //we write the testcases for this label
    //It tests if the /tasks endpoint returns a 200 OK status code
    it('it should return 200 ok',async()=>{
        const res=await request(app).get('/api/tasks');
        //check if the status code is 200 or not
        expect(res.statusCode).toBe(200);
   
    })
        it('it should return array ok',async()=>{
        const res=await request(app).get('/api/tasks');
        expect(res.body).toBeInstanceOf(Array);
        console.log(res.body,"response body");
        //except(res.body).toBe("object")
        //it checks res.body sometimes object comes that scenario search task property have or not
        //expect(res.body).toHaveProperty("tasks")
    })


})

//we close the mongoose connection after all the test cases are executed otherwise it will keep the connection open that can afect the deployment or production level
afterAll(async()=>{
    await mongoose.connection.close();
    //because we call api so that time we start the server so after all the test cases we need to close the server
    await server.close();
})