-- 1 EXECUTE

CREATE DATABASE new_blog;

-- 2 EXECUTE

CREATE TABLE
    blogs (
        blogId INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        content VARCHAR(1000) NOT NULL,
        image VARCHAR(200),
        PRIMARY KEY(blogID)
    );

-- 3 EXECUTE

CREATE TABLE
    comments (
        id INT NOT NULL AUTO_INCREMENT,
        comment VARCHAR(255) NOT NULL,
        blog_id INT NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (blog_id) REFERENCES blogs(blogId) ON DELETE CASCADE
    );

-- 4 EXECUTE

INSERT INTO
    blogs (blogId, title, content, image)
VALUES (
        1,
        "Cosmos",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus dictum semper. Cras congue neque eu purus accumsan volutpat. Nullam eu mi at ex faucibus feugiat. Fusce quis diam fringilla magna volutpat consectetur. Morbi viverra blandit sem, malesuada pellentesque nulla vulputate at. Suspendisse vitae pulvinar lectus. Duis sit amet lacus pellentesque, molestie mauris at, vehicula nulla. Nullam est ex, convallis vel vestibulum eu, sollicitudin venenatis felis.",
        "/static/1676305257796.jpg"
    ), (
        2,
        "zebra",
        "Zebras (subgenus Hippotigris) are African equines with distinctive black-and-white striped coats. There are three living species: the Grévy's zebra (Equus grevyi), plains zebra (E. quagga), and the mountain zebra (E. zebra). Zebras share the genus Equus with horses and asses, the three groups being the only living members of the family Equidae. Zebra stripes come in different patterns, unique to each individual. Several theories have been proposed for the function of these stripes, with most evidence supporting them as a deterrent for biting flies. Zebras inhabit eastern and southern Africa and can be found in a variety of habitats such as savannahs, grasslands, woodlands, shrublands, and mountainous areas.",
        "/static/1676305507488.jpg"
    ), (
        3,
        "Hippopotamus",
        "The hippopotamus or hippo, further qualified as the common hippopotamus, Nile hippopotamus, or river hippopotamus, is a large semiaquatic mammal native to sub-Saharan Africa. It is one of only two extant species in the family Hippopotamidae, the other being the pygmy hippopotamus (Choeropsis liberiensis or Hexaprotodon liberiensis). Its name comes from the ancient Greek for 'river horse'.",
        "/static/1676305373288.jpg"
    ), (
        4,
        "lion",
        "The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body; short, rounded head; round ears; and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane. It is a social species, forming groups called prides. A lion's pride consists of a few adult males, related females, and cubs. Groups of female lions usually hunt together, preying mostly on large ungulates. The lion is an apex and keystone predator; although some lions scavenge when opportunities occur and have been known to hunt humans, lions typically do not actively seek out and prey on humans.",
        "/static/1676305358321.jpg"
    ), (
        5,
        "crocodile",
        "Crocodiles (family Crocodylidae) or true crocodiles are large semiaquatic reptiles that live throughout the tropics in Africa, Asia, the Americas and Australia. The term crocodile is sometimes used even more loosely to include all extant members of the order Crocodilia, which includes the alligators and caimans (family Alligatoridae), the gharial and false gharial (family Gavialidae) among other extinct taxa.",
        "/static/1676305382623.jpg"
    ), (
        6,
        "tiger",
        "The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates, such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat to support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother for about two years and then become independent, leaving their mother's home range to establish their own.",
        "/static/1676305347402.jpg"
    );

-- 5 EXECUTE

INSERT INTO
    comments(comment, blog_id)
VALUES ("Cosmos ^_^", 1), ("Some crazy", 5), ("Hippo <3", 3);


UPDATE blogs
SET image = 'new_value'
ORDER BY `blogId` DESC
LIMIT 1;