console.log(" hello js");

let songIndex=0;
let audioElement= new Audio("1.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songs=[
    {songName: "", filepath:"songs\1.mp3",coverPath:"covers\1.jpg"},
    {songName: "", filepath:"songs\2.mp3",coverPath:"covers\2.jpg"},
    {songName: "", filepath:"songs\3.mp3",coverPath:"covers\3.jpg"},
    {songName: "", filepath:"songs\4.mp3",coverPath:"covers\4.jpg"},
    {songName: "", filepath:"songs\5.mp3",coverPath:"covers\5.jpg"},
    {songName: "", filepath:"songs\6.mp3",coverPath:"covers\6.jpg"},
    {songName: "", filepath:"songs\7.mp3",coverPath:"covers\7.jpg"},
    {songName: "", filepath:"songs\8.mp3",coverPath:"covers\8.jpg"},
    {songName: "", filepath:"songs\9.mp3",coverPath:"covers\9.jpg"},
    {songName: "", filepath:"songs\10.mp3",coverPath:"covers\10.jpg"},
]