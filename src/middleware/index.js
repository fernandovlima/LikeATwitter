import thunk from "react-thunk";
import logger from "./logger";
//middleware
import { applyMiddleware } from "redux";

export default applyMiddleware({
  thunk,
  logger
});
