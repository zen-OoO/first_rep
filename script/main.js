const changeBtn = document.querySelector('.change__btn');
const colors = ['#588A87', '#B6C6BE', '#DFD9CA', '#EFCABF', '#EEA995', '#E0AF61'];
var colorNum = 0;

changeBtn.addEventListener('click', ()=>{
    if(colorNum < colors.length - 1){
        document.getElementById('body').style.backgroundColor = colors[colorNum];
        colorNum++;
    } else {
        colorNum = 0;
    }
})