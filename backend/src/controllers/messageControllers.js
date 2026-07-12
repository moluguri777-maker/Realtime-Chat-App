import db from "../config/db.js";

export const getMessages = (req, res) => {

    db.all(
        "SELECT * FROM messages ORDER BY createdAt ASC",
        [],
        (err, rows) => {

            if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            res.json(rows);

        }
    );

};

export const sendMessage = (req, res) => {

    const { username, text } = req.body;

    if (!username || !text) {
        return res.status(400).json({
            message: "Username and message required"
        });
    }

    db.run(

        "INSERT INTO messages(username,text,createdAt) VALUES(?,?,datetime('now','+5 hours','+30 minutes'))",

        [username, text],

        function (err) {

            if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            db.get(

                "SELECT * FROM messages WHERE id=?",

                [this.lastID],

                (err, row) => {

                    if (err) {
                        return res.status(500).json({
                            message: err.message
                        });
                    }

                    res.status(201).json(row);

                }

            );

        }

    );

};