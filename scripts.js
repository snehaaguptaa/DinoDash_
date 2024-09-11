let score = 0;  
cross = true ;
let coins = 0 ;
gameactive = true ;
audio = new Audio("start.mp3") ;
audiogo = new Audio("gameover.mp3")
setTimeout(() => {
    audio.play()

     
}, 1000);    


const scorecont = document.querySelector('.scorecont');
const coinscont = document.querySelector('.coinscont');
document.onkeydown = function(e) {
    console.log("key code is: ", e.keyCode)
    if(e.keyCode==32)
    {
        dino = document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(()=> {
            dino.classList.remove('animatedino')
        } ,1200);

    }
    if(e.keyCode==39)
        {
            dino= document.querySelector('.dino');
            dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left = dinox+112+"px" ;
    
        }
        if(e.keyCode==37)
            {
                dino = document.querySelector('.dino');
                dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
                dino.style.left = dinox-112+"px" ;
        
            }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    GameOver = document.querySelector('.gameover') ;
    coco = document.querySelector('.coco');
    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left')) ;
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('bottom')) ;

    ox =  parseInt(window.getComputedStyle(coco,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(coco,null).getPropertyValue('bottom'));

    offsetx = Math.abs(dx-ox);
    offsety = Math.abs(dy-oy);
    //console.log(offsetx,offsety)
    if(offsetx<100 && offsety<=70)
    {
        GameOver.style.visibility = 'visible' ;
        coco.classList.remove('cocoobs');
        gameactive=false ;
        audio.pause();
        audiogo.play();
        setTimeout(() => {

            audiogo.pause()
            audio.pause();
        }, 10000);

    }
    else if(offsetx<1000 && gameactive)
    {
        coins+=1 ;
        updatecoins(coins);
        if(offsetx< 80 && cross)
            {
               
                score+=1 ;
                updatescore(score);
                cross = false ;
                setTimeout(() => {
                    cross=true ;
                    
                }, 1000);
                setTimeout(() => {
                anidur = parseFloat(window.getComputedStyle(coco,null).getPropertyValue('animation-duration'));
                newdur = (anidur - 0.1) +'s' ;
                coco.style.animationDuration=newdur + 's' ;
                console.log('new animation duration',newdur);
                    
                }, 100);
    
            }
        
    }
     
}, 100);
function updatescore(score)
{
    scorecont.innerHTML = "Your score: " + score ;

}
function updatecoins(coins)
{
    coinscont.innerHTML = "Your coins: " + coins;

}