// import * as config from "./config";
import rooms from "./rooms";
import game from "./game";

// export default io => {
//   io.on("connection", socket => {
//     const username = socket.handshake.query.username;


//   });
// };

export default io => {
  rooms(io.of('/rooms'));
  game(io.of('/game'));
}
