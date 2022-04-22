import app from '../src/app'
import request from 'supertest';
import { User } from '../src/models/user.model';
import { connect, disconnect } from "../src/database";


describe('AUTH controller',  () => {
    beforeAll(async () => {
        await connect();
    })

    afterAll(async () => {
        await disconnect();
    })

    describe('POST /api/auth/signup', () => {
        const userTest = { 
            email: "Kz@mz.com" ,
            password: "12345",
        }

        it("should create a new user", async () => {
            
            const response = await request(app).post('/api/auth/signup').send(userTest)
            console.log(response.body)
            expect(typeof response.body).toBe('string');
        })
    })
})

describe('LISTFAVS controller',  () => {
    beforeAll(async () => {
        await connect();

        
    })

    afterAll(async () => {
        await disconnect();
    })

    describe('POST /api/favs/', () => {
       

        it("should create a new list", async () => {
            const userTest = { 
                email: "Kz2@mz.com" ,
                password: "122345",
            }
            const token = await request(app).post('/api/auth/signup').send(userTest)
            const response = await request(app).post('/api/favs/').send({name:"List de favs 10001"}).set("Authorization",token.body)
            expect(typeof response).toBe('string');
        })
    })
})
