import app from '../src/app'
import request from 'supertest';
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
            expect(typeof response.body).toBe('string');
        })
    })
})

describe('LISTFAVS controller',  () => {
    beforeAll( (done) => {
         connect();
         done()
    })

    afterAll( (done) => {
        disconnect();
        done()
    })

    describe('POST /api/favs/', () => {
       
        it("Should show unauthorization message", () => {
            
            const response =  request(app)
                                            .post('/api/favs/')
                                            .set('Accept', 'application/json')
                                            .send({name:"List de favs 10001"})
                                            .expect(403)
                                            .end()

        })

        it("should create a new list", () => {
            const userTest = { 
                email: "Kz2@mz.com" ,
                password: "122345",
            }
            const token = request(app).post('/api/auth/signup').send(userTest).end()
            const response =  request(app)
                                            .post('/api/favs/')
                                            .set('Accept', 'application/json')
                                            .send({name:"List de favs 10001"})
                                            .auth(token.body, {type:'bearer'})
                                            .expect('Content-Type', /json/)
                                            .expect(201)
                                            .end()

        })
    })

    describe('GET /api/favs/', () => {

        it("should get the user lists", () => {
            const userTest = { 
                email: "Kz3@mz.com" ,
                password: "12234567",
            }
            const token = request(app).post('/api/auth/signup').send(userTest).end()
            const response =  request(app)
                                            .post('/api/favs/')
                                            .set('Accept', 'application/json')
                                            .send({name:"List de favs 10001"})
                                            .auth(token.body, {type:'bearer'})
                                            .expect('Content-Type', /json/)
                                            .expect(201)
                                            .end()

        })
    })
})
