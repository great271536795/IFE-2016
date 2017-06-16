var $ = function(el) {
        return document.querySelector(el);
    };

var arrData = [];

function render(str) {
    $('#result').innerHTML = arrData.map(function(d) { //Array.map()传入一个callback函数,操作原数组的每一项，并返回一个新的数组
        if ( str !=null  && str.length > 0) {
            d = d.replace(new RegExp(str, "g"), "<span class='select'>" + str + "</span>");
        }
         return '<div>' + d + '</div>';
    }).join('');
}

$('#insert').onclick = function() {
    var str = $('#textArea').value.trim(); //trim()去掉原字符串两端的空白字符，并返回一个新的字符串，对原字符串不影响
    var arrWord = str.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(e) { //Array.filter()传入一个callback函数,操作原数组的每一项，并返回一个新的数组
        if (e.length > 0) {
            return true;
        } else {
            return false;
            }
        });
    arrData = arrData.concat(arrWord); 

    render(); //render() 和 render()两种调用函数的方法不同之处在于函数arguments内置对象不同
};

$('#search').onclick = function() {
    var str = $('#searchInput').value.trim();
     render(str);
};
