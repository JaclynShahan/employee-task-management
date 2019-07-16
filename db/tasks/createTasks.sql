INSERT INTO tasks ('tasks_body', 'creator_id', 'create_date', 'parent_task_id', 'expiry_date', 'is_reminder', 'next_remind_date', 'reminder_frequency_id', 'user_id', 'tasks_subject')
VALUES ($1, $2, NOW(), $4, $5, $6, $7, $8, $9, $10)
RETURNING *