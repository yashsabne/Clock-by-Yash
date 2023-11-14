   alert("For now alarm feature is not working due to some issue:")
   
   document.querySelector('.div').style.visibility = 'hidden';
   document.querySelector('.yash-see-here').style.visibility = 'hidden';
    var span = document.getElementById('span');



    function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();

    span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);


    const saveTimeHTML = span.textContent;


    if (saveTimeHTML >= '12:00:00' && saveTimeHTML < '17 :00:00') {
        document.querySelector('.yash-gretting').innerHTML = "Good Afternoon";
    }

    else if (saveTimeHTML > '00:00:00' && saveTimeHTML < '12:00:00' ) {
        document.querySelector('.yash-gretting').innerHTML = "Good Morning"  ;
    }

    else if (saveTimeHTML > '17:00:00' && saveTimeHTML < '19:00:00') {
        document.querySelector('.yash-gretting').innerHTML = "Good Evening"  ;
    }
    else {
        document.querySelector('.yash-gretting').innerHTML = "Good Night" ;
        
    }

    }
    setInterval(time, 1000);



    let [milisecond,seconds,minutes,hours] = [0,0,0,0]

    const displayTimer = document.getElementById('displayTimer');

    let timer = null;

    function stopWatch() {

    milisecond++;

    if (milisecond == 100) {
        milisecond  = 0;
        seconds++;

        if (seconds == 60) {
        seconds = 0;
        minutes++;

    } if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    }
    let mili = milisecond < 10? "0" + milisecond : milisecond;
    let hrs = hours < 10? "0" + hours : hours;
    let min = minutes < 10? "0" + minutes : minutes;
    let sec = seconds < 10? "0" + seconds : seconds;

    displayTimer.innerHTML = hrs  + ":" + min + ":" + sec + ":" + mili;

    }

    function startWatch() {

    if (timer !== null) {

        clearInterval(timer);
    }

    timer = setInterval(stopWatch,10);


    }

    function pauseWatch() {
    clearInterval(timer);
    }

    function resetWatch() {

    clearInterval(timer);
    [milisecond,seconds,minutes,hours] = [0,0,0,0];
    displayTimer.innerHTML = '00:00:00:00'; 

    }


    function callSong() {
    const displayGreetting = document.querySelector('.yash-gretting');

    if (displayGreetting.innerHTML === 'Good Morning') {
        let beat = new Audio('goodMorning.mp3')
        beat.play();
    }
    else if (displayGreetting.innerHTML === 'Good Afternoon') {
        let beat = new Audio('good afternoon.mp3')
        beat.play();
    }
    else if (displayGreetting.innerHTML === 'Good Evening') {
        let beat = new Audio('good_evening.mp3')
        beat.play();
    }
    else if (displayGreetting.innerHTML === 'Good Night') {
        let beat = new Audio('goodNight.mp3')
        beat.play();
    }
    }

    function saveToStorageAlarm() {

        localStorage.setItem(('alarmArray',JSON.stringify()))
    }


    // Trying alarm

    const alarmList = //JSON.
    
    [
    ];

    renderTodoList();

    function renderTodoList() {

        let alarmArray = '';

        //for my personal only //

        for (let index = 0; index <= (alarmList.length); index++) {

            const getHereBaby = index;
            document.getElementById('yash1').innerHTML = '(total alarm : ' + `${getHereBaby}) {max 9}`;
        }

        //My personal only above code

        for (let i = 0; i < alarmList.length; i++) {
            const alarmLists = alarmList[i];
            // console.log(alarmLists)
            const {dueDate} = alarmLists;

            const htmlHere =   `<div id="your-works" >
            <span style = 'margin-right: 60px;font-size:25px'>
            <li>  ${dueDate } </li></span> <button
                onclick = "
                alarmList.splice(${i},1);
                renderTodoList();  " class ="button-31" > delete </button>  </div>`;
                alarmArray += htmlHere;

            document.querySelector('.yash-see-here').style.color = 'darkblue';

        }
        document.querySelector('.yash-see-here').innerHTML = alarmArray;


    }

    function inputTaker() {

        const dateInputElement = document.querySelector('.myAlarm');
        const dueDate = dateInputElement.value;

        alarmList.push({
            dueDate: dueDate+':00'
        });

        renderTodoList();



    }

    //FUNCTION FOR PRINTING THE ALARM

    function seeHereAlarmList() {
    
        
        document.querySelector('.yash-see-here').style.visibility = 'visible';
        document.querySelector('.div').style.visibility = 'visible';

    }

    function playAlarm() {

    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();

    span.innerHTML = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);


    const saveTimeHTML = parseInt(span.innerText);

    console.log(saveTimeHTML)
  
    const alarmValue = parseInt(myAlarm.value+':00');

    console.log(alarmValue)

    if (saveTimeHTML === alarmValue ){
        let beat = new Audio('Attitude Bgm.mp3')
        beat.play();
        console.log('Alarm Complete');
    }

    }

// function audioAlarmStop() {
//      beat = new Audio('04. Bhare Naina.mp3')
//     beat.pause();
//     console.log('Alarm stop');
// }
