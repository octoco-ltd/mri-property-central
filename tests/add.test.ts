import { ApiClientV1, ApiClientV2 } from '../src';

import dotenv from 'dotenv';
dotenv.config();

// test('adds two numbers correctly', async () => {
//     const x = new ApiClientV1('5BF99E48-EA9B-429B-AD46-1FA41F1EB54F');
//     const s = await x.get();
//     console.log(s)
// });

test('API V2', async () => {
    const x = new ApiClientV2(
        process.env.DB!,
        process.env.USERNAME!,
        process.env.PASSWORD!
    );
    const s = await x.authenticate();
    console.log(s)
});