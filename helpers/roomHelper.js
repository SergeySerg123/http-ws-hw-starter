export const isExistRoom = (roomData, rooms) => {
    const room = rooms.find(r => r.roomName === roomData.roomName);
    return Boolean(room);
}