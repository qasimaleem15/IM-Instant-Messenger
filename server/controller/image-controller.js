// import grid from 'gridfs-stream';
// import { GridFSBucket } from 'mongodb';
// import  mongoose  from 'mongoose';

// const url = "https://localhost:8000";

// let gfs;
// // const conn = mongoose.connection;
// conn.once('open', () => {
//    GridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
//         bucketName: 'fs'
//     });
//    gfs = grid(conn.db, mongoose.mongo);
//    gfs.collection('fs');
// })

// export const uploadFile = async (request, response) => {
//     if(!request.file) {
//         return response.status(404).json('File not found');
//     }
//     const imageUrl = `${url}/file/${request.file.filename}`;

//     return response.status(200).json(imageUrl);
// }