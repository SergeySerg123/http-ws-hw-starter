import loginRoutes from "./loginRoutes";
import roomRoutes from "./roomRoutes";
import gameRoutes from "./gameRoutes";

export default app => {
  app.use("/login", loginRoutes);
  app.use("/rooms", roomRoutes);
  app.use("/game", gameRoutes);
};
