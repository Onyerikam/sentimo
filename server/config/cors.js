const newLocal = 'http://localhost:3000';
const newLocal_1 = 'http://localhost:3001';
const newLocal_2 = 'https://sentimo.onrender.com/, ';
const newLocal_3 = 'https://sentimo-frontend.onrender.com/';
const newLocal_4 = 'http://localhost:5001';
const whitelist = [newLocal, newLocal_1, newLocal_2, newLocal_3, newLocal_4];

export const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1){ //found this origin in my whitelist
            callback(null, true);
        }else{
            callback(new Error()); //not found
        }
    },
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
};