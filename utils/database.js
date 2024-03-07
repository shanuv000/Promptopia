import mongoose from "mongoose";

let isConnected = false; // Track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDb Connected");
  } catch (error) {
    console.error("MongoDb Connection Error:", error);
    isConnected = false;

    // Rethrow the error or handle it according to your application's needs
    throw error;
  }

  // Handle potential disconnections
  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
    isConnected = false;
  });

  mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error);
    isConnected = false;
  });
};
