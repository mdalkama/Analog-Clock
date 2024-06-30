const body = document.querySelector('body'),
    hourHand = document.querySelector('.hour'),
    minuteHand = document.querySelector('.minute'),
    secondHand = document.querySelector('.second'),
    modeSwitch = document.querySelector('.mode-switch');
    if(localStorage.getItem("mode") === "Dark Mode"){
        body.classList.toggle('dark');
        modeSwitch.checked = "true";
    }
    modeSwitch.addEventListener('change',()=>{
        body.classList.toggle('dark');
        let isDarkMode = body.classList.contains('dark');
        localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
    })
    const updateTime = ()=>{
        let date = new Date(),
        secToDeg = (date.getSeconds() / 60 ) * 360;
        minToDeg = (date.getMinutes() / 60 ) * 360;
        hourToDeg = (date.getHours() / 12 ) * 360;
        secondHand.style.transform = `rotate(${secToDeg}deg)`;
        minuteHand.style.transform = `rotate(${minToDeg}deg)`;
        hourHand.style.transform = `rotate(${hourToDeg}deg)`;
    };
    setInterval(updateTime, 1000);
