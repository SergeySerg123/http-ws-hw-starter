let rooms = [];

const username = sessionStorage.getItem("username");

if (!username) {
  window.location.replace("/login");
}

const socket = io("http://localhost:3002/rooms");
const createButton = document.getElementById("create-button");
const input = document.getElementById("username-input");

const onCreateRoom = () => {
  const roomName = prompt();
  if (roomName) {
    let roomData = {
      username,
      roomName
    };
    socket.emit('CREATE_ROOM', roomData );
  }
};

const onSelectRoom = (roomId) => {

};

const updateRooms = (query) => {
  const roomData = {...query};
  rooms.push(roomData);
};

const existRoom = (query) => {
  const { roomName } = query;
  alert(`Room ${roomName} already exist!`)
};

createButton.addEventListener('click', onCreateRoom);

socket.on('UPDATE_ROOMS', updateRooms);
socket.on('EXIST_ROOM', existRoom);