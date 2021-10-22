import { config } from "dotenv";
config();

export default {
  database: {
    URI: process.env.MONGODB_URI || "mongodb://localhost/ticket2",
  },
  port: process.env.PORT || 3000,
};
