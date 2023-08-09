const happyBirthdaySmilesList: string[] = [
    "🎉 Вітаю з найщирішими привітаннями з днем народження! Бажаю, щоб цей день був сповнений радістю, щастям і багатою на подарунки! 🎁🎈",
    "🎂 З днем народження! Нехай весь світ тане від твоєї посмішки, а кожен день буде наповнений незабутніми моментами та смачними тортами! 🍰🎉",
    "🎊 Вітаю тебе з чудовим святом - днем народження! Нехай кожна мить цього дня буде сповнена добра, кохання і безмежного щастя! 🌟🎈",
    "🥳 Вітаю з особливим днем! Нехай кожен ранок принесе нові можливості, кожен вечір - радісні зустрічі, а твоє життя буде яскравим як найбарвистіше свято! 🎉🌈",
    "🎁 Вітаю зі святом народження! Бажаю, щоб кожна мить цього дня була наповнена коханням, теплом і магією! Нехай виконуються всі мрії і бажання! 🌟✨",
    "🌟 Вітаю тебе з найщирішими привітаннями з днем народження! Нехай твоє життя буде наповнене яскравими моментами, сміхом і великими посяганнями! 🎉✨🎈",
    "🌸 З днем народження, дорогий друг! Бажаю, щоб твої мрії розцвітали, як найкрасивіші квіти, а щастя супроводжувало тебе кожного дня! 🌼🎂🌟",
    "🎊 Вітаю з найщирішими привітаннями з днем народження! Нехай твоє життя буде наповнене любов'ю, натхненням і чудовими пригодами! 🎉✨🌈",
    "🎁 З днем народження, милий друг! Бажаю тобі безмежного щастя, море радості і здійснення найзаповітніших бажань! 🌟🎈🎂",
    "🌞 Вітаю з особливим днем - днем народження! Нехай сонце сяє яскраво на твоєму шляху, а щастя супроводжує тебе в кожній кроку! 🌻🌟🎉",
    "🌟 Вітаю тебе з найщирішими привітаннями з днем народження! Нехай цей день буде наповнений сміхом, радістю і безліччю щасливих моментів! 🎉✨🎈🌼🎁🥳",
    "🎂 З днем народження, моя найкраща подруга! Бажаю тобі, щоб твоє життя було як найсмачніший торт, солодким і непередбачуваним! Нехай твої мрії здійснюються, а щастя сяє навколо тебе яскравими променями! 🌈🌸🎉🌟🎈🎁🥳",
    "🌼 Вітаю з днем народження, мій найкращий друг! Бажаю тобі, щоб кожен день був наповнений веселощами, незабутніми пригодами та незмірним щастям! 🌟🎉🎈🌞🌻🥳",
    "🥳 З днем народження, кохана сестро! Бажаю тобі, щоб твоє життя було яскравим як феєрверк, щасливим як музика і чудовим як мрія! Нехай кожен момент принесе тобі незабутні емоції та надихає на досягнення нових висот! 🌟🎉🎈🎵💖🌈🥳",
    "🌟 Вітаю з найщирішими привітаннями з днем народження! Бажаю тобі, щоб кожен день був повний сонячних промінців, моря посмішок і безмежного щастя! Нехай твоє життя буде заповнене любов'ю, успіхами і незабутніми моментами радості! 🌞🌈🎉💖🌼🥳🎈",
    "🌟 Нехай цей особливий день буде повний незабутніх моментів, сміху та радості! Бажаю тобі, щоб твоє життя було сповнене щастям, коханням та великими досягненнями! 🎉🎈💖🌼😄🎁🥳",
    "🎂 Вітаю з днем народження! Нехай кожен мить цього дня буде наповнена радістю, а твоє життя - яскравими кольорами, незабутніми пригодами та безліччю щасливих моментів! 🌈🌸🎉🎈🎁😊🥳",
    "🌼 З днем народження, мій дорогий друг! Бажаю тобі, щоб твоє життя було щасливим як усмішка, мирним як сон і яскравим як сонце! Нехай всі твої мрії здійснюються, а доля приносить тільки радість і достаток! 🌟🎉🎈🌞🌻😄🥳",
    "🥳 Вітаю з днем народження, найкращий колего! Бажаю тобі безмежного щастя, море вдячності від клієнтів, успіхів у всіх починаннях та незмінного позитивного настрою! Нехай твоя кар'єра росте швидше за вітром, а кошти на рахунку розмножуються як кролики! 🌟🎉🎈💼💖😄🥳",
    "🌟 З днем народження, моє кохання! Бажаю тобі, щоб на шляху життя тебе супроводжували любов, здоров'я, процвітання та безмежне щастя! Нехай кожен день буде наповнений ніжністю, радістю та незабутніми моментами разом зі мною! 💑🎉🎈💖🌹😍🥳",
    "🌟 Вітаю з днем народження, мій дорогий друг! Нехай твоє життя буде як найяскравіший вогник, що освітлює твій шлях. Бажаю тобі безлічі радісних моментів, неймовірних подорожей та здійснення всіх мрій! 🎉🎈💫🌺😄🎁🥳",
    "🎂 Вітаю з днем народження! Нехай цей особливий день буде наповнений коханням, здоров'ям і щастям. Бажаю тобі розквіту як квітка, сміху як дзвінкого сміхухи та усмішки, що світиться як сонячний промінь! 🌼🎉🎈🌞🌻😊🥳",
    "🌸 З днем народження, моя прекрасна подруга! Бажаю тобі непереборного ентузіазму, незламної впевненості та безмежної радості. Нехай твоя душа буде наповнена мріями, а твої кроки - впевнені та наполегливі. Зичу тобі неймовірних досягнень у всіх сферах життя! 🌟🎉🎈💖🌺😄🥳",
    "🎁 Вітаю з днем народження, мій найкращий товаришу! Бажаю тобі багато причин для радості, сміху та щастя. Нехай кожен день твого життя буде сповнений незабутніми пригодами, неймовірними здобутками та відчуттям власної величі! 🌈🎉🎈🎁💪😄🥳",
    "🌟 З днем народження, моя люба сестро! Бажаю тобі неймовірного щастя, незрівнянного успіху та безмежної любові. Нехай твої мрії здійснюються, а життя радує яскравими кольорами. Зичу тобі безлічі позитиву, енергії та незабутніх моментів! 🎂🎉🎈💖🌺😊🥳",
];

export default happyBirthdaySmilesList;