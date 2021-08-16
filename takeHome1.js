process.stdin.resume();
process.stdin.setEncoding("utf8");

/**
 * understanding the problem
 * we need to return a sum of 'id's but only for the
 * menu items that also have a label.
 *
 * Example 1:
 *
 * input:
 * {"menu": {"header": "menu", "items": [{"id": 27},
 * {"id": 0, "label": "Label 0"}, null, {"id": 93},
 * {"id": 85}, {"id": 54}, null, {"id": 46, "label": "Label 46"}]}}
 * output:
 * 46
 *
 * Example 2:
 *
 * input:
 * {"menu": {"header": "menu", "items": [{"id": 81}]}}
 * output:
 * 0
 *
 */

var stdin = "";
let sum = 0;
let obj, array;

process.stdin
  .on("data", function (chunk) {
    stdin += chunk;
    obj = JSON.parse(stdin)
    array = obj.menu.items
  })
  .on("end", function () {
    process.stdout.write("ON END \n")
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== null && 'label' in array[i]) {
        sum += array[i].id
      }
    }
    process.stdout.write(`${sum}\n`)
  });

/**
 * set a variable we will need return sum
 *
 * I propose we drill through the 'input' object
 * through the 'menu' value object
 * and the 'items' value array
 *
 * We can loop that array and only add the 'id' values
 * to a return sum IF the label key exists as well
 *
 * return the sum
 */
