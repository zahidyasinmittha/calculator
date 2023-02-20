let exp="";
let d_exp="";
let ans="";
let inputElement = document.querySelector('input');
let btn=document.querySelectorAll('button');
Array.from(btn).forEach((btn)=>{
btn.addEventListener('click',(e)=>{
    if(e.target.innerHTML=="="){
        try{
        exp=eval(exp).toString();
        ans=exp;
        d_exp=exp;
        }
        catch(err){
            alert(err)
        }
    }
    else if(e.target.innerHTML=="A"){
        d_exp+=ans;
        exp+=ans;
    }
    else if(e.target.innerHTML=="X"){
        d_exp+=e.target.innerHTML;
        exp+="*";
    }
    else if(e.target.innerHTML=="C"){
        exp="";
        d_exp=""
    }
    else if(e.target.innerHTML=="&lt;"){
        exp=exp.slice(0,-1);
        d_exp=d_exp.slice(0,-1);
    }
    else{
    exp+=e.target.innerHTML;
    d_exp+=e.target.innerHTML;
    }
    inputElement.value=d_exp;
})
})
