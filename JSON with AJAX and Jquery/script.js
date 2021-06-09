let xhr = new XMLHttpRequest();
xhr.open('GET','Employees.json');

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            let employee1 = JSON.parse(xhr.responseText);
            let html1 = '<ul>';
            for(let i=0; i< employee1.length; i++){
                html1 += '<li>' +employee1[i].name + '</li>';
            }
            html1 += '</ul>';
            document.getElementById('employee1').innerHTML = html1;
        }
    }
};
xhr.send();

$(document).ready(function(){
    $.getJSON('Employees.json',  function(data) {
        let html2 = '<ul>';
        $.each(data, function(index, employee) {
            html2 += '<li>' + employee.name + '</li>';
        });
        html2 += '</ul>';
        document.getElementById('employee2').innerHTML = html2;
    });
})
