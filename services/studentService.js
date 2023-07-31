const dbConnect = require('../db/dbConnect')

exports.getStudents = async () =>{
    try{
        const collection = await dbConnect();
        return collection.find().toArray();
    }catch(error){
        console.error('Error fetching all students:', error);
        throw error;
    }
}