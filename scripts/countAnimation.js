function animateValue3 (id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTime = null;

    function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    let currentValue = Math.floor(start + (end - start) * (progress / duration));
    if (currentValue > end) currentValue = end;
        obj.innerText = `+${currentValue}M`;
    if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }
      requestAnimationFrame(animate);
}

function animateValue2(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTime = null;

    function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    let currentValue = Math.floor(start + (end - start) * (progress / duration));
    if (currentValue > end) currentValue = end;
        obj.innerText = `+${currentValue}MI`;
    if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }
      requestAnimationFrame(animate);
}


function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTime = null;

    function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    let currentValue = Math.floor(start + (end - start) * (progress / duration));
    if (currentValue > end) currentValue = end;
        obj.innerText = `+${currentValue}`;
    if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }
      requestAnimationFrame(animate);
}
function animateValue4(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTime = null;

    function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    let currentValue = Math.floor(start + (end - start) * (progress / duration));
    if (currentValue > end) currentValue = end;
        obj.innerText = `+${currentValue}%`;
    if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }
      requestAnimationFrame(animate);
}
animateValue("counter", 0, 300, 2100);
animateValue2("counter2", 0, 600, 2100);
animateValue3("counter3", 0, 500, 2100);
animateValue4("counter4", 0, 30, 2100);