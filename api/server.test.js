const request = require('supertest')
const server = require('./server')

describe('server.js', () => {
    it('uses testing environment', () => {
        expect(process.env.DB_ENV).not.toBe('development')
        expect(process.env.DB_ENV).not.toBe('production')
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe('[GET] /', () => {
        it('returns correct data', async () => {
            const res = await request(server).get('/')
            expect(res.status).toBe(200)
            expect(res.body).toMatchObject({ api: 'up' })
            expect(res.type).toMatch(/json/)
            expect(res.body).toMatchSnapshot()
        })
    })
})