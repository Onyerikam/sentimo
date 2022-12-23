const newLocal = process.env.NEWLOCAL;
const newLocal_1 = process.env.NEWLOCAL_1;
const newLocal_2 = process.env.NEWLOCAL_2;
const newLocal_3 = process.env.NEWLOCAL_3;
const whitelist = [newLocal, newLocal_1, newLocal_2, newLocal_3];

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