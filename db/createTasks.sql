INSERT INTO tasks ("tasksSubject", "userId","tasksBody")
VALUES ($1, $2, $3)
RETURNING *