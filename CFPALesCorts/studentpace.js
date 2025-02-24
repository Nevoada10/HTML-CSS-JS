const attendanceSpans = document.querySelectorAll('.attendance');

attendanceSpans.forEach((span) => {
    const attendanceValue = parseInt(span.textContent.replace('%', ''));
    if (attendanceValue >= 75) {
        span.classList.add('good');
    } else if (attendanceValue >= 50) {
        span.classList.add('warning');
    } else {
        span.classList.add('bad');
    }
});