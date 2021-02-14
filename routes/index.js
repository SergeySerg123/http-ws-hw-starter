import loginRoutes from "./loginRoutes";
import roomsRoutes from "./roomsRoutes";
import gameRoutes from "./gameRoutes";

export default app => {
  app.use("/login", loginRoutes);
  app.use("/rooms", roomsRoutes);
  app.use("/game", gameRoutes);
};
