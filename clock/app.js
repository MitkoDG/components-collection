function showTime() {
    const time = new Date();

    const localDate = time.toLocaleDateString();
    
    const localTime = time.toLocaleTimeString();

    const dayNumber = time.getDay();
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Suturday',
        'Sunday'
    ]
    const dayOfWeek = daysOfWeek[dayNumber];

    document.querySelector('.clock').innerText = localTime;
    document.querySelector('.day').innerText = localDate;
    document.querySelector('.dayOfWeek').innerText = dayOfWeek;

    setTimeout(showTime, 1000);
};
showTime()