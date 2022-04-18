-- Users Table

create table users(
	id serial primary key,
	first_name text not null,
	last_name text not null,
	email text unique not null,
	password text not null,
	join_date timestamp current_timestamp now
)

-- Books Table
create table books (
    id serial primary key,
	color text not null,
    img text not null,
	title text not null,
	author text not null,
	description text not null
 );
insert into books (color,img,title,author,description) values ('purple','purple1.jpeg','Meet Me In Paradise','Libby Hubsher','Marin’s still grieving her mother’s passing, so an island spa trip with her sister seems like the perfect remedy. When her sister misses the flight, she finds herself flying solo. Marin embarks on an adventure in paradise in a journey filled with unexpected love and self-discovery.');
insert into books (color,img,title,author,description) values ('purple','purple2.jpg','Seven Days In June','Tia Williams','Eva Mercy writes best-selling vampire books, but she’s an exhausted single mom with no time to “romance a real-life penis.” She channels desire into her novels. But then she sees Shane at a conference. He stole her heart during a wild week 15 years ago, and now the two give it another round. Get ready for laugh-out-loud writing in one of the best new steamy romance novels, which also has an engrossing story with a true heart.');
insert into books (color,img,title,author,description) values ('purple','purple3.jpg','Alisha Rai','Libby Hubsher','Meet Rhiannon, the creator of a hot dating app who tries to follow her own rules for hooking up. She’s ghosted by a hottie, but when he reemerges asking for a second chance, she has to revise her own rules. Readers love Alisha Rai’s latest novel for its modern, multicultural romance filled with wit and fire.');
insert into books (color,img,title,author,description) values ('red','red1.jpg','Things Fall Apart','Chinua Achebe','A classic narrative about Africas cataclysmic encounter with Europe as it establishes a colonial presence on the continent. Told through the fictional experiences of Okonkwo, a wealthy and fearless Igbo warrior of Umuofia in the late 1800s.');
insert into books (color,img,title,author,description) values ('red','red2.jpg','Good Morning, Monster','Catherine Gildiner','Essentialism is not one more thing—it’s a whole new way of doing everything. It’s about doing less, but better, in every area of our lives. Essentialism is a movement whose time has come. By forcing us to apply more selective criteria for what is Essential, the disciplined pursuit of less empowers us to reclaim control of our own choices about where to spend our precious time and energy—instead of giving others the implicit permission to choose for us.');
insert into books (color,img,title,author,description) values ('red','red3.jpg','Be Angry But Dont Blow it!','Lisa Bevere','Anger controlled Lisa for years, exacting a devastating toll upon her life and relationships. Desperate, Lisa cried out to God . . . and found help. If you, too, are at a turning point,longing for change yet stuck in a whirlwind of fury and rage – Be Angry, But Dont Blow It will help you regain control. Sharing all she has learned about handling this powerful emotion, Lisa discusses how you can');
insert into books (color,img,title,author,description) values ('green','green1.jpg','The Art Of Happiness','Lisa Bevere','Anger controlled Lisa for years, exacting a devastating toll upon her life and relationships. Desperate, Lisa cried out to God . . . and found help. If you, too, are at a turning point,longing for change yet stuck in a whirlwind of fury and rage – Be Angry, But Dont Blow It will help you regain control. Sharing all she has learned about handling this powerful emotion, Lisa discusses how you can');
insert into books (color,img,title,author,description) values ('green','green2.jpg','The Happiness Advantage','Shawn Achor','Shawn Achor’s research reveals the lies in the conventional idea that hard work and success lead to happiness. He’s identified, with science, that happiness comes first, then you will become successful. This book points to several ways that you can start being happier right now.');
insert into books (color,img,title,author,description) values ('green','green3.jpg','Good Vibes, Good Life','Vex King','In this book, Instagram guru Vex King answers all of these questions and more. Vex overcame adversity to become a source of hope for thousands of young people, and now draws from his personal experience and his intuitive wisdom to inspire you.');
insert into books (color,img,title,author,description) values ('black','black1.jpg','Essentialism','Greg McKweon','Essentialism is not one more thing—it’s a whole new way of doing everything. It’s about doing less, but better, in every area of our lives. Essentialism is a movement whose time has come. By forcing us to apply more selective criteria for what is Essential, the disciplined pursuit of less empowers us to reclaim control of our own choices about where to spend our precious time and energy—instead of giving others the implicit permission to choose for us.');
insert into books (color,img,title,author,description) values ('black','black2.jpg','Well, This Is Exhausting','Sophia Benoit','Like so many women, Sophia spent her formative years struggling to do the “right” thing—to make others comfortable, to take minimal and calculated risks, to live up to society’s expectations—only to realize that there was so little payoff to this tiresome balancing act. Tired of trying so hard, Sophia finally let go of the crushing pressure to be perfect.');
insert into books (color,img,title,author,description) values ('black','black3.jpg','Dont Overthink It','Anne Bogel','Weve all been there: stuck in a cycle of what-ifs, plagued by indecision, paralyzed by the fear of getting it wrong. Nobody wants to live a life of constant overthinking, but it doesnt feel like something we can choose to stop doing. It feels like something were wired to do, something we just cant escape. But is it?');
insert into books (color,img,title,author,description) values ('orange','orange1.jpg','The Art Of Thinking Clearly','Rolf Dobelli','Have you ever: Invested time in something that, with hindsight, just wasn’t worth it? Or continued doing something you knew was bad for you? These are examples of cognitive biases, simple errors we all make in our day-to-day thinking. But by knowing what they are and how to spot them, we can avoid them and make better decisions.');
insert into books (color,img,title,author,description) values ('orange','orange2.jpg','Furiously Happy','Jenny Lawson','In Furiously Happy, a humor memoir tinged with just enough tragedy and pathos to make it worthwhile, Jenny Lawson examines her own experience with severe depression and a host of other conditions, and explains how it has led her to live life to the fullest');
insert into books (color,img,title,author,description) values ('orange','orange3.jpg','Maybe Swearing Will Help','Nyx Spectrum','Maybe Swearing will Help is the perfect adult coloring book for those with a sense of humor and a bit of a foul mouth. This adult coloring book features funny pages with quotes of motivation, puns, and cursing for anyone to calm down with. From moderate designs to complex detailed images this book features a wide range of styles, cussing included. Enjoy therapeutic animals, tasty treats, elegant floral patterns, trendy word art and elaborate abstract designs to relax with. Each page brings a new sassy element to this form of art therapy and deserves a chuckle or two.');
insert into books (color,img,title,author,description) values ('blue','blue1.jpg','Ikigai','Hector Garcia and Francesc Miralles','According to the Japanese, everyone has an ikigai—a reason for living. And according to the residents of the Japanese village with the world’s longest-living people, finding it is the key to a happier and longer life. Having a strong sense of ikigai—where what you love, what you’re good at, what you can get paid for, and what the world needs all overlap—means that each day is infused with meaning. It’s the reason we get up in the morning.');
insert into books (color,img,title,author,description) values ('blue','blue2.jpg','Strength In Stillness','Bob Roth','Roth breaks down the science and techniques behind his successful practice. This accessible and enlightening book promises to reduce stress and anxiety while improving resilience and inner power. This is gimmick-free, real-talk, with actionable items. Clear out some time on your calendar and free your mind.');
insert into books (color,img,title,author,description) values ('blue','blue3.jpg','The Things You Can See Only When You Slow Down','Haemin Sunim','The world moves fast, but that doesnt mean we have to. In this timely guide to mindfulness, Haemin Sunim, a Buddhist monk born in Korea and educated in the United States, offers advice on everything from handling setbacks to dealing with rest and relationships, in a beautiful book combining his teachings with calming full colour illustrations. Haemin Sunims simple messages speak directly to the anxieties that have become part of modern life and remind us of the strength and joy that come from slowing down.');
insert into books (color,img,title,author,description) values ('yellow','yellow1.jpg','Whatever','Michel Houellebecq','Just thirty, with a well-paid job. depression and no love life, the narrator and anti-hero par excellence of this grim, funny, and clever novel smokes four packs of cigarettes a day and writes weird animal stories in his spare time. A painfully realistic portrayal of the vanishing freedom of a world governed by science and by the empty rituals of daily life.');
insert into books (color,img,title,author,description) values ('yellow','yellow2.jpg','The Forgetting Machine','Rodrigo Quian Quiroga','In this accessible, fascinating look at the science of remembering, discover how we turn perceptions into memories, how language shapes our experiences, and the crucial role forgetting plays in human recollection. You will see how electricity, chemistry, and abstraction combine to form something more than the human brain, the human mind. And you will gain surprising insight into what our brains can tell us about who we are.');
insert into books (color,img,title,author,description) values ('yellow','yellow3.jpg','Running Out Of Time','Margaret Peterson Haddix','Jessie lives with her family in the frontier village of Clifton, Indiana, in 1840 -- or so she believes. When diphtheria strikes the village and the children of Clifton start dying, Jessies mother reveals a shocking secret,it is actually 1996, and they are living in a reconstructed village that serves as a tourist site. In the world outside, medicine exists that can cure the dread disease, and Jessies mother is sending her on a dangerous mission to bring back help.');


-- Quotes Table 

create table quotes (
    id serial primary key,
    color text not null,
    quote text not null,
    author text not null
 );
insert into quotes (color,quote,author) values ('purple','"I saw that you were perfect and so I loved you, Then I saw that you were not perfect and I loved you even more"','Angelita Lim');
insert into quotes (color,quote,author) values ('purple','"Where there is love there is life"','Mahatma Gandhi');
insert into quotes (color,quote,author) values ('purple','"To be brave is to love someone unconditionally, without expecting anything in"','Madonna');
insert into quotes (color,quote,author) values ('purple','"Love is a fire. But whether it is going to warm your heart or burn down your house, you can never tell"','Joan Crawford');
insert into quotes (color,quote,author) values ('purple','"Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down"','Oprah Winfrey');
insert into quotes (color,quote,author) values ('blue','"When we are unable to find tranquility within ourselves, it is useless to seek it elsewhere"','Francois de La Rochefoucauld');
insert into quotes (color,quote,author) values ('blue','"It is neither wealth no splendor, but tranquility and occupation which give you happiness"','Thomas Jefferson');
insert into quotes (color,quote,author) values ('blue','"Tranquility is a beach state of mind"','Anonymous');
insert into quotes (color,quote,author) values ('blue','"From tranquility emerges power and strength"','C. Joybell C');
insert into quotes (color,quote,author) values ('blue','"Do not let the behavior of others destroy your inner peace"','Dalai Lama');
insert into quotes (color,quote,author) values ('orange','"You don’t have to be positive all the time. Its perfectly okay to feel sad, angry, annoyed ,frustrated, scared or anxious. Having feelings doesn’t make you a negative person. It makes you human"','Lori Deschene');
insert into quotes (color,quote,author) values ('orange','"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering"','Yoda');
insert into quotes (color,quote,author) values ('orange','"When angry count to ten before you speak. If very angry, count to one hundred"','Thomas Jefferson');
insert into quotes (color,quote,author) values ('orange','"If you are patient in one moment of anger, you will escape a hundred days of sorrow"','Chinese Proverb');
insert into quotes (color,quote,author) values ('orange','"Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned"','Buddha');
insert into quotes (color,quote,author) values ('yellow','"Never be afraid to try something new, because life gets boring when you stay within the limits of what you already know"','Anonymous');
insert into quotes (color,quote,author) values ('yellow','"Step into this experience with butterflies in your bones; with a nervous feeling so beautiful, you know you’re doing something right"','D .Antoinette Foy');
insert into quotes (color,quote,author) values ('yellow','"Facebook is like the fridge. If you’re bored, you keep opening it"','Anonymous');
insert into quotes (color,quote,author) values ('yellow','"You can’t control things by being nervous about it"','Tina Fey');
insert into quotes (color,quote,author) values ('yellow','"Imperfection is beauty, madness is genius and its better to be absolutely ridiculous than absolutely boring"','Marilyn Monroe');
insert into quotes (color,quote,author) values ('green','"True contentment is not having everything, but in being satisfied with everything you have"','Oscar Wilde');
insert into quotes (color,quote,author) values ('green','"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship"','Buddha');
insert into quotes (color,quote,author) values ('green','"Today you are you! That is truer than true! There is no one alive who is you-er than you"','Dr.Seuss');
insert into quotes (color,quote,author) values ('green','"Content makes poor men rich; discontent makes rich men poor"','Benjamin Franklin');
insert into quotes (color,quote,author) values ('green','"Do not spoil what you have by desiring what you have not; remember that what you now have was once among the thing you only hoped for"','Epicurus');
insert into quotes (color,quote,author) values ('black','"When the going get tough, the tough get going"','Joseph Kennedy');
insert into quotes (color,quote,author) values ('black','"Failure will never overtake me if my determination to succeed is strong enough"','Og Mandino');
insert into quotes (color,quote,author) values ('black','"It’s not the load that breaks you down, it’s the way you carry it"','Lena Horne');
insert into quotes (color,quote,author) values ('black','"All great achievements require time"','Maya Angelou');
insert into quotes (color,quote,author) values ('black','"Fall seven times, stand up eight"','Japanese proverb');
insert into quotes (color,quote,author) values ('red','"Today you are you! That is truer than true! There is no one alive who is you-er than you"','Dr.Seuss');
insert into quotes (color,quote,author) values ('red','"You never know how strong you are, until being strong is your only choice"','Bob Marley');
insert into quotes (color,quote,author) values ('red','"It is not the mountain we conquer but ourselves"','Edmund Hillary');
insert into quotes (color,quote,author) values ('red','"All great achievements require time"','Maya Angelou');
insert into quotes (color,quote,author) values ('red','"When you think you have to figure out everything all at once. Breath. You’re Strong. You got this. Take it day by day"','Karen Salmansohn');


-- Movies table
create table movies (
	id serial primary key,
	title text not null,
	release_year integer not null,
	color text not null,
	img text not null
);
insert into movies(title, release_year, color, img)
values ('The Notebook', 2004, 'purple', 'purple1movie.jpg');
insert into movies(title, release_year, color, img)
values ('Palm Springs', 2020, 'purple', 'purple2movie.jpg');
insert into movies(title, release_year, color, img)
values ('The Lovebirds', 2020, 'purple', 'purple3movie.jpg');
insert into movies(title, release_year, color, img)
values ('Marry Me', 2022, 'purple', 'purple4movie.jpg');
insert into movies(title, release_year, color, img)
values ('The Royal Treatment', 2022, 'purple', 'purple5movie.jpg');
insert into movies(title, release_year, color, img)
values ('Suicide Squad', 2016, 'red', 'red1movie.jpg');
insert into movies(title, release_year, color, img)
values ('Inglourious Basterds', 2009, 'red', 'red2movie.jpg');
insert into movies(title, release_year, color, img)
values ('John Wick', 2014, 'red', 'red3movie.jpg');
insert into movies(title, release_year, color, img)
values ('Halloween', 1978, 'red', 'red4movie.jpg');
insert into movies(title, release_year, color, img)
values ('RoboCop', 1987, 'red', 'red5movie.jpg');
insert into movies(title, release_year, color, img)
values ('Dont Look Up', 2021, 'orange', 'orange1movie.jpg');
insert into movies(title, release_year, color, img)
values ('Office Space', 1999, 'orange', 'orange2movie.jpg');
insert into movies(title, release_year, color, img)
values ('No Country For Old Men', 2007, 'orange', 'orange3movie.jpg');
insert into movies(title, release_year, color, img)
values ('Anger Management', 2012, 'orange', 'orange4movie.jpg');
insert into movies(title, release_year, color, img)
values ('Girl, Interrupted', 1999, 'orange', 'orange5movie.jpg');
insert into movies(title, release_year, color, img)
values ('The Shining', 1980, 'yellow', 'yellow1movie.jpg');
insert into movies(title, release_year, color, img)
values ('Uncut Gems', 2019, 'yellow', 'yellow2movie.jpg');
insert into movies(title, release_year, color, img)
values ('Parasite', 2019, 'yellow', 'yellow3movie.jpg');
insert into movies(title, release_year, color, img)
values ('The Stanford Prison Experiment', 2015, 'yellow', 'yellow4movie.jpg');
insert into movies(title, release_year, color, img)
values ('127 Hours', 2010, 'yellow', 'yellow5movie.jpg');
insert into movies(title, release_year, color, img)
values ('Little Miss Sunshine', 2006, 'green', 'green1movie.jpg');
insert into movies(title, release_year, color, img)
values ('Crazy Rich Asians', 2018, 'green', 'green2movie.jpg');
insert into movies(title, release_year, color, img)
values ('School of Rock', 2003, 'green', 'green3movie.jpg');
insert into movies(title, release_year, color, img)
values ('Step Brothers', 2008, 'green', 'green4movie.jpg');
insert into movies(title, release_year, color, img)
values ('Elf', 2003, 'green', 'green5movie.jpg');
insert into movies(title, release_year, color, img)
values ('Chef', 2014, 'blue', 'blue1movie.jpg');
insert into movies(title, release_year, color, img)
values ('Paddington', 2014, 'blue', 'blue2movie.jpg');
insert into movies(title, release_year, color, img)
values ('Spirited Away', 2001, 'blue', 'blue3movie.jpg');
insert into movies(title, release_year, color, img)
values ('Amélie', 2001, 'blue', 'blue4movie.jpg');
insert into movies(title, release_year, color, img)
values ('March of the Penguins', 2005, 'blue', 'blue5movie.jpg');
insert into movies(title, release_year, color, img)
values ('The Truman Show', 1998, 'black', 'black1movie.jpg');
insert into movies(title, release_year, color, img)
values ('Falling Down', 1993, 'black', 'black2movie.jpg');
insert into movies(title, release_year, color, img)
values ('Dunkirk', 2017, 'black', 'black3movie.jpg');
insert into movies(title, release_year, color, img)
values ('Schindlers List', 1993, 'black', 'black4movie.jpg');
insert into movies(title, release_year, color, img)
values ('The Platform', 2019, 'black', 'black5movie.jpg');