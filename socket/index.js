// import * as config from "./config";
import selectOrCreateRoom from "./selectOrCreateRoom";
import game from "./game";

// export default io => {
//   io.on("connection", socket => {
//     const username = socket.handshake.query.username;


//   });
// };

export default io => {
  selectOrCreateRoom(io.of('/rooms'));
  game(io.of('/game'));
}
