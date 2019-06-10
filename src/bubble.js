/**
 * 
 * @param {element} el 
 */
function bubble(el) {
    let bubble = create('i', {
        className: 'bubble'
    });

    el.addEventListener('click', bubbles);

    function bubbles(e) {
        let elClient = el.getBoundingClientRect();
        bubble.classList.add('animate');
        el.classList.add('bubbling');
        bubble.style.height = elClient.width + 'px';
        bubble.style.width = elClient.width + 'px';
        bubble.style.top = (e.clientY - elClient.top - elClient.width / 2) + 'px';
        bubble.style.left = (e.clientX - elClient.left - elClient.width / 2) + 'px';

        setTimeout(function assignProps() {
            el.removeEvents();
            el.appendChild(bubble);
        }, 0);


        setTimeout(function removeBubble() {
            bubble.classList.remove('animate');
            el.classList.remove('bubbling');
            el.assignEvents();
            el.removeChild(bubble);
        }, 580);
    }
}