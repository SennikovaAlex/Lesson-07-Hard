let week = ['Понедельник', ' Вторник', ' Среда', ' Четверг', ' Пятница', ' Суббота', ' Воскресенье',];

document.body.innerHTML += '<br> <div>' + week + '</div>';

week.forEach(function(item, i, array) {
  let day = new Date().getDay();
  if (i == 5 && i !==day-1 || i == 6 && i !==day-1)
{document.body.innerHTML += '<p> <em>' + item + '</em>'; 
}  else if (i ===day-1) {
    if (i == 5 || i == 6) {document.body.innerHTML += '<p> <b> <em>' + item + '</b> </em>';
} else { document.body.innerHTML += '<p> <b>' + item + '</b>';
}
} else { 
    document.body.innerHTML += '<p>' + item ;
} 
  
});

 /* for (let i=0; i<week.length; i++) {
    let day = new Date().getDay();
    if (i == 5 && i !==day-1 || i == 6 && i !==day-1)
{document.body.innerHTML += '<p>' + '<em>' + week[i] + '</em>'; 
}  else if (i ===day-1) {
    if (i == 5 || i == 6) {document.body.innerHTML += '<p>' + '<b>' + '<em>' + week[i] + '</b>' + '</em>';
} else { document.body.innerHTML += '<p>' + '<b>' + week[i] + '</b>';
}
    
} else { 
    document.body.innerHTML += '<p>' + week[i] ;
} 
    
}; */



 
