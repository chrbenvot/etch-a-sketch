const grid=document.createElement('div');
const container=document.querySelector('.container');


const btn=document.querySelector('button');
function generateGrid(sides){
    container.innerHTML="";
    for (let i=0; i<sides*sides;i++){
        const newGrid=grid.cloneNode(true);
        newGrid.style.width=(100 / sides) + '%';
        newGrid.style.paddingBottom=(100 / sides) + '%';
        container.appendChild(newGrid);


    }
    const grids=document.querySelectorAll('.pic');
    grids.forEach( element => {
        element.addEventListener('mouseenter',function (e){
            e.target.style.backgroundColor="black"
        });
    

})}
grid.setAttribute('class','pic');
generateGrid(4);
btn.addEventListener('click',function(){
    let sides=+prompt('how many squares per side?');
    if (sides>100){
        sides=prompt('Please enter another number,no higher than 100')
    }
    generateGrid(sides);
    
})
