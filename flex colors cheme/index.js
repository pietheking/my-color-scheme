const baseColor=document.getElementById('base-color')
const mode=document.getElementById('mode');
const pArr=document.getElementsByTagName('p')
const colorText=document.getElementById('color-text')
let id;
colorText.value=baseColor.value
getScheme()
baseColor.addEventListener("click",()=>{id=setInterval(()=>colorText.value=baseColor.value,1)})
colorText.addEventListener("click",()=>{clearInterval(id)})
function getScheme(){
    if(colorText.value[0]!='#'){
        colorText.value='#'+colorText.value
    }
    fetch(`https://www.thecolorapi.com/scheme?hex=${(colorText.value).slice(1,7)}&mode=${mode.value.toLowerCase()}`)
        .then(res=>res.json())
        .then(data=>{for(cols in data.colors){document.getElementsByClassName('dj')[cols].style.backgroundColor=data.colors[cols].hex.value 
        pArr[cols].textContent=data.colors[cols].hex.value}
        console.log(pArr[1].textContent)})
        if(pArr[1].textContent==='#000000'){
        alert('please hex code only contain numbers and alphabets from "a-f"')
        }

}
for(ele of pArr){
    ele.addEventListener('click',()=>{
        document.execCommand('copy')
    })
}
