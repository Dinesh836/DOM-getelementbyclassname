
//when we create li element withoutn class name 
//and try to edit with calssselector it fails

var itmes=document.getElementsByClassName("list-group-item");
itmes[2].style.backgroundColor="green";
for(let i=0;i<itmes.length ;i++){
    itmes[i].style.fontWeight="bold";
}

// try to use tagselector method

var items=document.getElementsByTagName('li');
items[4].style.backgroundColor="green";
