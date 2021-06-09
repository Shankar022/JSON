var a = "Hello World"

var student  = {
    "name" : "Shankar",
    "roll-no" : "54",
    "degree" : "CSE",
    "subjects" :[
        "Intro to C programming",
        "Computer Vision",
        "Web Development"
    ],
    "projects" : [
        {AI : "robotic car"},
        {image_processing: "face detector"}
    ]
}

for(var i =0; i< student.projects.length; i++){
    console.log(student.projects[i]);
}