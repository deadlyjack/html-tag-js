import tag from './tag';

import './css/bubble.scss';

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

    el.addEventListener('mousedown', bubbles);

    /**
     * 
     * @param {MouseEvent} e 
     */
    function bubbles(e) {
        const elClient = el.getBoundingClientRect();
        const dim = elClient.width > elClient.height ? elClient.width : elClient.width;
        let animationFrame = null;
        wrapper.style.width = elClient.width + 'px';
        wrapper.style.height = elClient.height + 'px';
        wrapper.style.top = elClient.y + 'px';
        wrapper.style.left = elClient.x + 'px';

        bubble.style.top = (e.clientY - elClient.top) + 'px';
        bubble.style.left = (e.clientX - elClient.left) + 'px';
        bubble.style.height = dim + 'px';
        bubble.style.width = dim + 'px';
        bubble.style.marginTop = bubble.style.marginLeft = -dim / 2 + 'px';

        if (e.preventTimeout) return;

        if (bubble.timeout) {
            bubble.remove();
            bubble.restore();
            clearTimeout(bubble.timeout);
            if (animationFrame) cancelAnimationFrame(animationFrame);
        } else {
            wrapper.restore(document.body);
        }

        checkElement();
        bubble.timeout = setTimeout(() => {
            wrapper.remove();
            bubble.timeout = null;
            if (animationFrame) cancelAnimationFrame(animationFrame);
        }, 600);

        function checkElement() {
            if (!el.parentElement) {
                bubble.remove();
            } else {
                e.preventTimeout = true;
                bubbles(e);
            }
            animationFrame = requestAnimationFrame(checkElement);
        }
    }
}

bubbleOnTap.activateAll = function () {
    const allEl = document.querySelectorAll('[data-bubble], button');
    [...allEl].map(el => {
        bubbleOnTap(el);
    });
};

export default bubbleOnTap;