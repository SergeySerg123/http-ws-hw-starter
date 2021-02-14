import { isExistRoom } from "../helpers/roomHelper";

let rooms = [];

export default io => {
    io.on('connection', socket => {  
        socket.on('CREATE_ROOM', data => {
            const roomData = data;

            if (!isExistRoom(roomData, rooms)) {
                rooms.push(roomData);
                socket.emit('UPDATE_ROOMS', roomData);
                return;
            }
            socket.emit('EXIST_ROOM', roomData);
        });
    
        socket.on('JOIN_ROOM', roomId => {
            
        });
    });
};

 