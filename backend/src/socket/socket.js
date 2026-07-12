import db from "../config/db.js";

const socketHandler = (io) => {

    io.on("connection", (socket) => {

        console.log("User Connected:", socket.id);

        socket.on("send_message", (data) => {

            db.run(

                "INSERT INTO messages(username,text,createdAt) VALUES(?,?,datetime('now','+5 hours','+30 minutes'))",

                [data.username, data.text],

                function (err) {

                    if (err) {
                        console.log(err);
                        return;
                    }

                    db.get(

                        "SELECT * FROM messages WHERE id=?",

                        [this.lastID],

                        (err, row) => {

                            if (!err) {

                                io.emit("receive_message", row);

                            }

                        }

                    );

                }

            );

        });

        socket.on("disconnect", () => {

            console.log("User Disconnected:", socket.id);

        });

    });

};

export default socketHandler;