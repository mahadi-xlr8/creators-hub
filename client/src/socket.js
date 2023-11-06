import { io } from "socket.io-client";
import Cookies from "js-cookie";
const jwtToken = Cookies.get("access-token");
export const socket = io({
  //   autoConnect: false,
  auth: {
    token: jwtToken,
  },
});
export const commentSocket=io("/comment");