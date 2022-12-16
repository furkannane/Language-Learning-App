
// {id:1,sentence:"",meaning:"",sound:""},
// {id:1,word:"",meaning:""},

const backgroundColor = "rgb(204,229,255)"
const itemColor = "rgb(153,204,255)"
const itemColorDark = "rgb(51,153,255)"

const wordList = [
    {id:1,word:"하루",meaning:"day"},
    {id:2,word:"세상",meaning:"world"},
    {id:3,word:"꿈",meaning:"dream"},
    {id:4,word:"보다",meaning:"to see"},
    {id:5,word:"바보",meaning:"stupid"},
    {id:6,word:"뒤",meaning:"back"},
    {id:7,word:"길",meaning:"road"},
    {id:8,word:"표정",meaning:"expression"},
    {id:9,word:"숨",meaning:"breath"},
    {id:10,word:"봄",meaning:"spring"},
    {id:11,word:"눈",meaning:"snow"},
    {id:12,word:"물",meaning:"water"},
    {id:13,word:"만큼 ",meaning:"as much as"},
    {id:14,word:"한참",meaning:"long time"},
    {id:15,word:"너무",meaning:"too"},
    {id:16,word:"같",meaning:"same"},
    {id:17,word:"앞",meaning:"front"},
    {id:18,word:"힘",meaning:"strength"},
    {id:19,word:"일기",meaning:"diary"},
    {id:20,word:"곁",meaning:"neighborhood"},
    {id:21,word:"차라리",meaning:"rather"},
    {id:22,word:"부르다",meaning:"to call"},
    {id:23,word:"뺨",meaning:"cheek"},
    {id:24,word:"대신",meaning:"instead"},
    {id:25,word:"속",meaning:"inside"},
    {id:26,word:"목",meaning:"neck"},
    {id:27,word:"달리다",meaning:"to run"},
    {id:28,word:"그리움",meaning:"longing"},
    {id:29,word:"하늘",meaning:"sky"},
    {id:30,word:"손",meaning:"hand"},
    {id:31,word:"발",meaning:"foot"},
    {id:32,word:"나이",meaning:"age"},
    {id:33,word:"웃다",meaning:"to laugh"},
    {id:34,word:"세다",meaning:"to count"},
    {id:35,word:"외우다",meaning:"to memorize"},
    {id:36,word:"피다",meaning:"to blossom"},
    {id:37,word:"영원히",meaning:"forever"},
    {id:38,word:"희망",meaning:"hope"},
    {id:39,word:"정답",meaning:"answer"},
    {id:40,word:"문",meaning:"door"},
]

const questions = [
    {id:1,question:"제가 ___ 있는 사람은 예뻐요",meaning:"The person I am meeting is pretty",answers:[["만나고",true],["만나",false],["걷는",false]]},
    {id:2,question:"제가 보고 있는 시험은 ___",meaning:"The exam I am writing is difficult",answers:[["갔어요",false],["어려워요",true],["많아요",false]]},
    {id:3,question:"저는 공원에 가는 ___ 항상 행복해요",meaning:"I am always happy on the days I go to the park",answers:[["날",false],["있는",false],["날에",true]]},
    {id:4,question:"네가 지금 ___ 것이 틀려",meaning:"What you are saying now is incorrect",answers:[["말하는",true],["가는",false],["가르치는",false]]},
    {id:5,question:"제가 ___ 있는 여자는 미국에 갔어요",meaning:"The girl who I am going out with went to the US",answers:[["사귀고",true],["음식은",false],["있는",false]]},
    {id:6,question:"저는 친구가 사과를 가져오는 것을 ___",meaning:"I want my friend to bring apples",answers:[["맛있어요",false],["예뻐요",false],["원해요",true]]},
]

// completed
const unit26 = [
    {id:1,sentence:"빨리 걷는 여자는 어려요",meaning:"The girl who walks fast is young",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-1.mp3"},
    {id:2,sentence:"저는 빨리 걷는 여자를 만났어요",meaning:"I met a girl who walks fast",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-2.mp3"},
    {id:3,sentence:"저는 빨리 걷는 여자예요",meaning:"I am a girl who walks fast",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-3.mp3"},
    {id:4,sentence:"제가 만나고 있는 사람은 예뻐요",meaning:"The person I am meeting is pretty",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-4.mp3"},
    {id:5,sentence:"제가 보고 있는 영화는 재미있어요",meaning:"The movie I am watching is funny",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-5.mp3"},
    {id:6,sentence:"제가 먹고 있는 음식은 맛있어요",meaning:"The food I am eating is delicious",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-6.mp3"},
    {id:7,sentence:"저는 제가 자주 가는 곳에 가고 있어요",meaning:"I am going to the place I often go to",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-7.mp3"},
    {id:8,sentence:"친구는 제가 자주 가는 곳에 가고 있어요",meaning:"My friend is going to the place I often go",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-8.mp3"},
    {id:9,sentence:"친구는 제가 자주 가는 학교에 가고 있어요",meaning:"My friend is going to the school that I go to often",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-9.mp3"},
    {id:10,sentence:"저는 과학을 좋아하는 여자들을 좋아해요",meaning:"I like girls that like science",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-10.mp3"},
    {id:11,sentence:"제가 보고 있는 시험은 어려워요",meaning:"The exam I am writing is difficult",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-11.mp3"},
    {id:12,sentence:"제가 사귀고 있는 여자는 미국에 갔어요",meaning:"The girl who I am going out with went to the US",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-12.mp3"},
    {id:13,sentence:"엄마가 요리하는 음식은 항상 맛있어요",meaning:"The food that my mother cooks is always delicious",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-13.mp3"},
    {id:14,sentence:"공부하지 않는 학생들은 똑똑하지 않아요",meaning:"Students who do not study are not smart",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-14.mp3"},
    {id:15,sentence:"저는 공원에 가는 날에 항상 행복해요",meaning:"I am always happy on the days I go to the park",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-15.mp3"},
    {id:16,sentence:"이 동네에서 축구를 잘 하는 청소년들이 많아요",meaning:"There are a lot of kids who are good at playing soccer in this neighborhood",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s1.mp3"},
    {id:17,sentence:"내가 가르치는 학생들은 수업을 듣고 싶지 않아",meaning:"The students that I teach don’t want to come to class",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-17.mp3"},
    {id:18,sentence:"그 사람은 내가 가르치는 학생이다",meaning:"That person is a student that I teach",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-18.mp3"},
    {id:19,sentence:"내가 가르치는 학생들이 수업에 오기 전에 나는 교실을 청소했어",meaning:"Before the students I teach came to class, I cleaned the classroom",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-19.mp3"},
    {id:20,sentence:"엄마가 요리한 음식은 너무 맛있어요",meaning:"The food my mom cooked is delicious",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-20.mp3"},
    {id:21,sentence:"저는 엄마가 요리한 음식을 다 먹었어요",meaning:"I ate all the food my mom cooked",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-21.mp3"},
    {id:22,sentence:"제가 어제 만난 사람은 저를 다시 만나고 싶어요",meaning:"The person I met yesterday wants to meet me again",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-22.mp3"},
    {id:23,sentence:"남은 음식을 포장하고 싶어요",meaning:"I want to pack up the food that is left over",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-23.mp3"},
    {id:24,sentence:"내가 회사에 가지 않은 날에 병원에 갔어 ",meaning:"On the day I didn’t go to work, I went to the hospital",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-24.mp3"},
    {id:25,sentence:"선생님은 학생들이 물어본 질문에 답했어요",meaning:"The teacher answered the questions that the students asked",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s2.mp3"},
    {id:26,sentence:"옛날에 담배를 많이 피운 환자가 많아요",meaning:"There are a lot of patients who smoked a lot a long time ago",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s3.mp3"},
    {id:27,sentence:"내가 작년에 가르친 학생 한 명은 벌써 의사가 되었어 ",meaning:"One of the students I taught last year has already become a doctor",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-27.mp3"},
    {id:28,sentence:"제가 갈 곳은 제주도예요",meaning:"The place I will go is Jeju-do",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s4.mp3"},
    {id:29,sentence:"저는 할 일이 있어요 ",meaning:"I have something/work to do",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-29.mp3"},
    {id:30,sentence:"저는 그 사람이 저에게 줄 선물을 받고 싶지 않아요 ",meaning:"I don’t want to accept the gift that that person will give me",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-30.mp3"},
    {id:31,sentence:"제가 받을 점수는 중요해요",meaning:"The score I will receive is important",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-31.mp3"},
    {id:32,sentence:"저는 친구가 사과를 가져오는 것을 원해요",meaning:"I want my friend to bring apples",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-34.mp3"},
    {id:33,sentence:"저는 영화를 만드는 것을 좋아해요",meaning:"I like making movies",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-36.mp3"},
    {id:34,sentence:"저는 영화를 보는 것을 좋아해요",meaning:"I like watching movies",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-37.mp3"},
    {id:35,sentence:"나는 그 사람이 먹고 있는 것을 먹고 싶어",meaning:"I want to eat what that person is eating",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-38.mp3"},
    {id:36,sentence:"나는 우리가 지난 번에 같이 먹은 것을 먹고 싶어",meaning:"I want to eat what we ate together last time",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-39.mp3"},
    {id:37,sentence:"나는 엄마가 요리하는 것을 먹고 싶어",meaning:"I want to eat my mom’s cooking",sound:"https://www.howtostudykorean.com/wp-content/uploads/2017/03/Lesson26-40.mp3"},
    {id:38,sentence:"우리 학교의 목적은 국제고등학교가 되는 것이다 ",meaning:"Our school’s goal is becoming an international school",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s6.mp3"},
    {id:39,sentence:"소금을 많이 먹는 것은 건강에 안 좋아요",meaning:"It is not healthy to eat a lot of salt",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s7.mp3"},
    {id:40,sentence:"담배를 피우는 것은 건강에 나빠요",meaning:"It is unhealthy to smoke cigarettes",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s8.mp3"},
    {id:41,sentence:"저의 목적은 그 시험을 합격하는 것이에요",meaning:"My goal is to pass that exam",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s9.mp3"},
    {id:42,sentence:"이 문제를 극복하는 것이 힘들 거예요",meaning:"It will be difficult to overcome this problem",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s10.mp3"},
    {id:43,sentence:"모자를 쓴 학생을 알아보는 것이 어려워요",meaning:"It is difficult to recognize students wearing hats",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s11.mp3"},
    {id:44,sentence:"네가 지금 말하는 것이 틀려",meaning:"What you are saying now is incorrect",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s12.mp3"},
    {id:45,sentence:"친구가 머리를 깎은 것을 알아보지 못했어요",meaning:"I couldn’t recognize that my friend cut his hair",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s13.mp3"},
    {id:46,sentence:"복도에서 달리는 것은 위험해요",meaning:"It is dangerous to run in the hallway",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s14.mp3"},
    {id:47,sentence:"병원에서 넘어져서 팔을 다친 아줌마가 약을 무료로 받았어요",meaning:"The woman who fell in the hospital and broke her arm received free medicine",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s15.mp3"},
    {id:48,sentence:"내가 먹는 것은 밥이야",meaning:"The thing that I (am) eat(ing) is rice",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s16.mp3"},
    {id:49,sentence:"내가 가장 원하는 것은 차야",meaning:"The thing that I want most is a car",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s17.mp3"},
    {id:50,sentence:"나의 꿈은 선생님이 되는 것이다",meaning:"My dream is to become a teacher",sound:"https://www.howtostudykorean.com/wp-content/uploads/2016/02/Lesson26s18.mp3"},
]
    









export {unit26,backgroundColor,itemColor,itemColorDark,wordList,questions}