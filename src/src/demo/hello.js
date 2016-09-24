/**
 * Created by cancer on 2016-09-21.
 */
alert('hello world in TypeScript!');
function area(shape, width, height) {
    var area = width * height;
    return "I'm a " + shape + " with an area of " + area + " cm squared.";
}
document.body.innerHTML = area("rectangle", 30, 15);
