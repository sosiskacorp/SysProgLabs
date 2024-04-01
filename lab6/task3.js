function zip(first, second) {
    var minLength = Math.min(first.length, second.length);
    var result = [];
    for (var i = 0; i < minLength; i++) {
        result.push([first[i], second[i]]);
    }
    return result;
}
var q1 = zip([1, 2, 3, 4, 5, 6], ['1', '2', '3']);
var q2 = zip([true], [false, false]);
console.log(q1, q2);
function groupBy(source, keySelector, valueSelector) {
    var result = new Map();
    for (var i = 0; i < source.length; i++) {
        var item = source[i];
        var key = keySelector(item, i);
        var value = valueSelector(item, i);
        if (!result.has(key)) {
            result.set(key, []);
        }
        result.get(key).push(value);
    }
    return result;
}
var q1 = groupBy([1, 2, 3, 4], function (x) { return x % 2; }, function (x) { return x + 1; });
var q2 = groupBy(['aaa', 'bbb', 'cc', 'q', 'lalaka'], function (_, i) { return i % 2 === 0; }, function (x, i) { return ({ i: i, x: x }); });
console.log(q1, q2);
