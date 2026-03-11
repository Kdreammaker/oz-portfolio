const userName = "주니어 PM";
let userAge = 28;
var isChallenger = true;
const personalId = Symbol("PM_ID");
const emptyValue = null;
let nextGoal = undefined;

const hobbies = ["요리", "사진촬영", "최근에 춤 배우는 중"];

const myProjects = {
    ai: "주류 추천 서비스",
    publishing: "어린이 영어 판타지 소설 출판",
    automation: "캐릭터 IP 콘텐츠 자동화"
};

console.log("=== Junior PM Profile ===");

console.log("이름:\t" + userName + "\n상태:\t" + (isChallenger ? "도전 중" : "대기 중"));

console.log("자기소개: AI와 도전을 즐기는 " + userName + "입니다.\n취미는 " + hobbies[0] + ", " + hobbies[1] + ", " + hobbies[2] + "입니다.");

const projectSummary = `핵심 프로젝트: ${myProjects.ai}, ${myProjects.publishing}, ${myProjects.automation}`;
console.log(projectSummary);

console.log("\n=== Type Check ===");

console.log("Variable userName is: " + typeof userName);
console.log("Variable userAge is: " + typeof userAge);
console.log("Variable isChallenger is: " + typeof isChallenger);
console.log("Variable hobbies is: " + typeof hobbies);
console.log("Variable myProjects is: " + typeof myProjects);