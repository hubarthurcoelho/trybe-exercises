function triangle (ang1, ang2, ang3) {
    if (ang1 + ang2 + ang3 == 180) {
        return true;
    }
    else {
        return false;
    }
}
console.log(triangle(60, 60, 60));
console.log(triangle(59, 60,50));
