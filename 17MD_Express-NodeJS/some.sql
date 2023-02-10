USE blog_db;

CREATE TABLE
    blogs (
        blogId INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        content VARCHAR(1000) NOT NULL,
        image VARCHAR(200),
        PRIMARY KEY(blogID)
    );

CREATE TABLE
    comments (
        id INT NOT NULL AUTO_INCREMENT,
        comment VARCHAR(255) NOT NULL,
        blog_id INT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (blog_id) REFERENCES blogs(blogId)
    );

INSERT INTO
    blogs (title, content, image)
VALUES
(
        'SOme title',
        'We use a title (Mr, Mrs, Ms, Dr, Prof) and the surname in more formal situations. We don’t usually use the title alone, or the title and first name (although we sometimes use a job title):',
        'https://goo.su/uZzQ1vz'
    );

INSERT INTO
    blogs (content, image, title)
VALUES
(
        'some content',
        'https://picsum.photos/id/4/700/700',
        'title'
    );

INSERT INTO
    comments(comment, blog_id)
VALUES ('some comment', 1), ('Wow! amazing', 1), ('I want this in my home', 2);

SELECT * from blogs;

SELECT * from comments LIMIT 1;

SELECT comment FROM comments;

SELECT * FROM comments ORDER BY comment DESC;

select * FROM comments WHERE blog_id = 1;

DELETE FROM comments WHERE id=4;

SELECT * FROM blogs
JOIN comments ON blogs.`blogId` = comments.blog_id;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root123';
flush privileges;
