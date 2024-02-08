$(function(){
    var eleWidth = $(".frame>ul>li").innerWidth();
    //컨텐츠 width, 이동해야 하는 사이즈 (여백 안 주면 이너 위드 사용하지 않아도 된다.)
    //200+8+8
    var state=false;
    //윈도우는 움직이는지 안 움직이는지 모른다. 움직이는 걸 알려줘야지 된다. 브라우저에게 상태를 알려준다. 진행 중인지 아닌지 상태를 알려주는 변수, 멈춰있는 상태라서 다음 작업 실행해도 된다. 작업을 진행하고 있는지 아닌지.(하나의 작업 단위)
    var playOn=false; //실행 안 된다 전제조건, 슬라이딩 되고 있는지 안 되고 있는지
    var direction="left"; //왼쪽으로
    var bannerAuto; //무한반복을 위한 한 루프 시간
    
    function play(){ 
        if(!playOn){ 
            playOn=true;
            bannerAuto=setInterval(function(){
                if(direction=="left"){
                   $(".left").click();
                   //왼쪽 방향으로 왼쪽 반응할 거 호출
                }else {
                    $(".right").click();
                }//right 클릭한 이벤트 호출
            },2000);//setInterval

            //무한반복 루프에 몇 초가 걸리는지 시간을 걸려주고 계속 무한 반복을 시킨다.
        }//if

        if(playOn){
            $(".frame>ul>li>a").mouseover(function(){
                stop();
            }); //플레이 상태
        }//if(playOn)
    }//사용자 정의 함수/ 멈춰져 있기 때문에 플레이 시키는 거다. 

    function stop (){

        if(playOn){
            playOn=false;
            clearInterval(bannerAuto); 
            //쉽게 멈출 수 있다. 
        } //if(palyOn)

        $(".frame>ul>li>a").mouseout(function(){
            play();
        });

        $(".frame>ul>li>a").click(function(){
            location.href; //이동한다
        });

    }//stop

    function left(){
        stop(); // 실행중인 거 멈춰
        direction="left"; //자기가 현재 상태를 모른다. 플레이 상태를 알려준다. 중요!
        $(".frame>ul").animate({left:eleWidth*-1},500,function(){
            $(this).children("li:first").insertAfter($(this).children("li:last"));//ul 안에 있는 첫번째 자식을 ul 안에 있는 마지막 자식에게 삽입한다. 
            $(this).css("left",0); //나가있는 ul을 다시 제자리에 돌려 놓는다.
            state=false; //작업 진행 끝났다.
            play(); // 플레이 호출
            
        });
    }//left 
    //eleWidth*-1 = -eleWidth (단위를 못 넣어서 그래요)
    //0.5초 동안 움직인다 나간다. 나갔던 1번이 얼른 들어와야지 된다. 콜백함수 눈 앞에 일어났던 일은 이건데 뒤에 작업은 콜백함수 안에서 작업한다.


    function right(){
        stop();
        direction="right";
        //마지막 있는 자식을 첫번째로 오게 하고 밀어줘야지 된다.

        $(".frame>ul>li:last").insertBefore($(".frame>ul>li:first"));
        $(".frame>ul").css("left",eleWidth*-1);
        $(".frame>ul").animate({left:0},500,function(){
            state=false;
            play();
        });
    }//right

    $(".left").click(function(){
        if(!state)//state not 
        {   state=true;
            left();
        }
    });

    $(".right").click(function(){
        if(!state){
            state=true;
            right();
        }
    });

    $(".play").click(function(){
        play();
    });

    $(".stop").click(function(){
        stop();
    });

    $(".play").click(); //강제실행

    
});