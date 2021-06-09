let xhr = new XMLHttpRequest();
xhr.open('GET','test.json');

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            let data = JSON.parse(xhr.responseText);
            show(data);
        }
    }
};
xhr.send();
show = (data) =>{
    console.log(data.person)
    for(let i = 0; i < data.person.length; i++){
        console.log(data.person[i]);
    }
};

/*
JSON values cannot use any of the following data types:

function

date

Undefined
 */