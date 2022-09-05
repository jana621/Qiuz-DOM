const quizdata=[{question:"What does URL stands for?",
a:"Unique Relevant Location",
b:"Unisex Reebok Lithium",
c:"Uniform Resource Locator",
d:"Uniform Random Length",
correct:"c",
},
{question:"When was javascript introduced?",
a:"1995",
b:"1996",
c:"1997",
d:"1998",
correct:"a",
},
{question:"Whar does CSS stands for?",
a:"Central Superior Sheet",
b:"Common Space Sheet",
c:"Central Style Sheet",
d:"Cascading Style Sheet",
correct:"d",
},
{question:"What does HTTP stands for?",
a:"Hypertext Transmission Prototype",
b:"Hypertext Transfer Protocol",
c:"Hypertext Total Protocol",
d:"Hypertext Transmission Prototype",
correct:"b"
}];

const quiz=document.getElementById('quiz');
const answerlist=document.querySelectorAll('.answer');
console.log(answerlist);
const questionlist=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const btn=document.getElementById('submit');

let currentquiz=0;
let score=0;

loaddata();

function loaddata(){

    deselect();

const currentquizdata=quizdata[currentquiz];
// console.log(currentquizdata);
questionlist.innerText=currentquizdata.question;
a_text.innerText=currentquizdata.a;
b_text.innerText=currentquizdata.b;
c_text.innerText=currentquizdata.c;
d_text.innerText=currentquizdata.d;
}

function deselect(){
    answerlist.forEach(anslist=>anslist.checked=false);
}

function getselect(){

    let answer;
    answerlist.forEach(item=>{
        if(item.checked)
        answer=item.id;
        console.log(answer);
    })
    return answer;
}

btn.addEventListener('click',()=>{
const answer=getselect()
if(answer){
    if(answer===quizdata[currentquiz].correct){
        score++;
    }
    currentquiz++;

    if(currentquiz<quizdata.length){
        loaddata();
    }
    else{
        quiz.innerHTML=`<h1> You have got ${score}/${quizdata.length} questions correctly</h1>
        <button onclick="location.reload()">Reload</button>`;
    }
}
})




