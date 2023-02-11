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
VALUES (
        'SOme title',
        'We use a title (Mr, Mrs, Ms, Dr, Prof) and the surname in more formal situations. We don’t usually use the title alone, or the title and first name (although we sometimes use a job title):',
        'https://goo.su/uZzQ1vz'
    );

INSERT INTO
    blogs (content, image, title)
VALUES (
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

SELECT *
FROM blogs
    JOIN comments ON blogs.`blogId` = comments.blog_id;

ALTER USER
    'root' @'localhost' IDENTIFIED
WITH
    mysql_native_password BY 'root123';

flush privileges;

INSERT INTO
    comments(comment, blog_id)
VALUES ('test1', 1), ('test2', 2);

DELETE FROM blogs WHERE `blogId` = 2;

INSERT into
    blogs (title, content, image)
VALUES (
        "Hippopotamus",
        "The hippopotamus or hippo, further qualified as the common hippopotamus, Nile hippopotamus, or river hippopotamus, is a large semiaquatic mammal native to sub-Saharan Africa. It is one of only two extant species in the family Hippopotamidae, the other being the pygmy hippopotamus (Choeropsis liberiensis or Hexaprotodon liberiensis). Its name comes from the ancient Greek for \"river horse\".",
        "https://cdn.creatureandcoagency.com/uploads/2017/09/Hippo-Facts-2.jpg"
    ), (
        "lion",
        "The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body; short, rounded head; round ears; and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane. It is a social species, forming groups called prides. A lion's pride consists of a few adult males, related females, and cubs. Groups of female lions usually hunt together, preying mostly on large ungulates. The lion is an apex and keystone predator; although some lions scavenge when opportunities occur and have been known to hunt humans, lions typically do not actively seek out and prey on humans.",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg"
    ), (
        "crocodile",
        "Crocodiles (family Crocodylidae) or true crocodiles are large semiaquatic reptiles that live throughout the tropics in Africa, Asia, the Americas and Australia. The term crocodile is sometimes used even more loosely to include all extant members of the order Crocodilia, which includes the alligators and caimans (family Alligatoridae), the gharial and false gharial (family Gavialidae) among other extinct taxa.",
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/Nile_crocodile_head.jpg"
    );

SELECT * FROM blogs WHERE blogId = 3;

INSERT INTO
    comments (blog_id, comment)
VALUES (3, "some comment"), (3, "Nice blog i like this"), (4, "some comment"), (5, "some comment"), (6, "some comment");

SELECT * FROM comments WHERE blog_id = 3;

UPDATE blogs SET content="1", title="2", image="3" WHERE `blogId`=13 ;