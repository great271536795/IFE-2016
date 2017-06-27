//change事件多用于表单控件input[type="type"] input[type="radio"] select元素上，把事件注册在控件之间的父元素上 


function radioChange() {
    if (document.getElementById("inSchoolRadio").checked) {
        document.querySelector(".inSchool").className = "inSchool";
        document.querySelector(".outSchool").className = "outSchool hide";
    }
    else {
        document.querySelector(".inSchool").className = "inSchool hide";
        document.querySelector(".outSchool").className = "outSchool";
    }
}

function selectDistrict() {
    var data = {
        bj: ["北京大学", "清华大学", "北京航空航天大学"],
        sh: ["复旦大学", "上海交通大学", "同济大学"],
        hz: ["浙江大学", "杭州电子科技大学", "浙江工业大学"]
    };
    var source = document.getElementById("select1");
    var target = document.getElementById("select2");
    var selected = source.options[source.selectedIndex].value;
    target.innerHTML = "";
    for (var i = 0; i < data[selected].length; i++) {
        var opt = document.createElement('option');
		opt.value = data[selected][i];
		opt.innerHTML = data[selected][i];
		target.appendChild(opt);
    }
}
