const baseColor=document.getElementById('base-color')
const mode=document.getElementById('mode');
const pArr=document.getElementsByTagName('p')
function getScheme(){
fetch(`https://www.thecolorapi.com/scheme?hex=${(baseColor.value).slice(1,7)}&mode=${mode.value.toLowerCase()}`)
.then(res=>res.json())
.then(data=>{for(cols in data.colors){document.getElementsByClassName('dj')[cols].style.backgroundColor=data.colors[cols].hex.value 
pArr[cols].textContent=data.colors[cols].hex.value}})
}
getScheme()
for(ele of pArr){
    ele.addEventListener('click',()=>{
        document.execCommand('copy')
    })
}
