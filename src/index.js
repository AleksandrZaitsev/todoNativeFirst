window.onload = function () {
    var template = '<li><span></span>';

    document.getElementById('addButton').addEventListener('click',addButton);

    window.tasks = [];

};

function addButton() {
    var tasks = document.getElementById('tasks');
    var value = document.getElementById('newVal').value;
    var el = document.createElement('li');
    var idDelete = "id" + window.tasks.length + 1;

    function template(val) {
        return "<span>" + val + "</span>  <button id='"+ idDelete +"'>delete</button>";
    };

    el.innerHTML = template(value);

    window.tasks.push(el);
    tasks.appendChild(el);

    document.getElementById(idDelete).addEventListener('click', function () {
        this.parentNode.removeChild(this);
    }.bind(el))

};
