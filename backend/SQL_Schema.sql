CREATE TABLE IF NOT EXISTS user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (255),
    last_name VARCHAR (255),
    email VARCHAR(255),
    password VARCHAR(255),
    salt VARCHAR(255)
);

TRUNCATE TABLE user;