tamil = 70;
english = 80;
maths = 90;
science = 75;
social = 30;
let grade;
let grade1;
let grade2;
let grade3;
let grade4;


if (tamil >= 35 && tamil <= 50) {
    grade = 'D';
} else if (tamil > 50 && tamil <= 70) {
    grade = 'C';
} else if (tamil > 70 && tamil <= 80) {
    grade = 'B';
} else if (tamil > 80 && tamil <= 95) {
    grade = 'A';
} else if (tamil > 95) {
    grade = 'O';
} else {
    grade = 'R';
}

if (english >= 35 && english <= 50) {
    grade1 = 'D';
} else if (english > 50 && english <= 70) {
    grade1 = 'C';
} else if (english > 70 && english <= 80) {
    grade1 = 'B';
} else if (english > 80 && english <= 95) {
    grade1 = 'A';
} else if (english > 95) {
    grade1 = 'O';
} else {
    grade1 = 'R';
}

if (maths >= 35 && maths <= 50) {
    grade2 = 'D';
} else if (maths > 50 && maths <= 70) {
    grade2 = 'C';
} else if (maths > 70 && maths <= 80) {
    grade2 = 'B';
} else if (maths > 80 && maths <= 95) {
    grade2 = 'A';
} else if (maths > 95) {
    grade2 = 'O';
} else {
    grade2 = 'R';
}

if (science >= 35 && science <= 50) {
    grade3 = 'D';
} else if (science > 50 && science <= 70) {
    grade3 = 'C';
} else if (science > 70 && science <= 80) {
    grade3 = 'B';
} else if (science > 80 && science <= 95) {
    grade3 = 'A';
} else if (science > 95) {
    grade3 = 'O';
} else {
    grade3 = 'R';
}

if (social >= 35 && social <= 50) {
    grade4 = 'D';
} else if (social > 50 && social <= 70) {
    grade4 = 'C';
} else if (social > 70 && social <= 80) {
    grade4 = 'B';
} else if (social > 80 && social <= 95) {
    grade4 = 'A';
} else if (social > 95) {
    grade4 = 'O';
} else {
    grade4 = 'R';
}
console.log("Tamil mark:" + grade);
console.log("English mark:" + grade1);
console.log("Maths mark:" + grade2);
console.log("Science mark:" + grade3);
console.log("Social mark:" + grade4);