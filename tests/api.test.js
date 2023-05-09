const axios = require('axios');
API_URL = "http://localhost:5000/api"

test('test device array', () => {
    expect.assertions(2);
    return axios.get(`${API_URL}/lightdevices`)
        .then(resp => resp.data)
        .then(resp => {
            expect(resp[0].room).toEqual('101');
            expect(typeof resp[0].room).toBe('string');
        });
});

test('test device array', () => {
    expect.assertions(2);
    return axios.get(`${API_URL}/securitydevices`)
        .then(resp => resp.data)
        .then(resp => {
            expect(resp[0].room).toEqual('101');
            expect(typeof resp[0].room).toBe('string');
        });
});