import tag from './tag';
import { timeout } from 'q';

/**
 * 
 * @param {Element} el
 */
function bubbleOnTap(el) {
    const bubble = tag('span', {
        className: 'bubble animate'
    });
    const wrapper = tag('div', {
        className: 'bubble-wrapper',
        child: bubble
    });

    el.addEventListener('click', bubbles);

    /**
     * 
     * @param {MouseEvent} e 
     */
    function bubbles(e) {
        const elClient = el.getBoundingClientRect();
        const dim = elClient.width > elClient.height ? elClient.width : elClient.width;
        wrapper.style.width = elClient.width + 'px';
        wrapper.style.height = elClient.height + 'px';
        wrapper.style.top = elClient.y + 'px';
        wrapper.style.left = elClient.x + 'px';

        bubble.style.top = (e.clientY - elClient.top) + 'px';
        bubble.style.left = (e.clientX - elClient.left) + 'px';
        bubble.style.height = dim + 'px';
        bubble.style.width = dim + 'px';
        bubble.style.marginTop = bubble.style.marginLeft = -dim/2 + 'px';

        if(bubble.timeout){
            bubble.remove();
            bubble.restore();
            clearTimeout(bubble.timeout);
        }else{
            wrapper.restore(document.body);
        }


        bubble.timeout = setTimeout(()=>{
            wrapper.remove();
            bubble.timeout = null;
        }, 600);
    }
}

bubbleOnTap.activateAll = function(){
    const allEl = document.querySelectorAll('[data-bubble], button');
    [...allEl].map(el=>{
        bubbleOnTap(el);
    });
}

export default bubbleOnTap;