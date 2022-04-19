
//2nd item have green background color

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor="green";

//Make the 3rd item invisible

var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.innerHTML=" ";

//odd Queryselectorall

var odd=document.querySelectorALL('li:nth-child(odd)');
for(var i=0;i<odd.length ;i++){
    odd[i].style.backgroundColor="green";
}

//second list backgroundcolor with queryselector all

var secondItem=document.querySelectorAll('li:nth-child(2)');
secondItem.style.fontColor="green";
