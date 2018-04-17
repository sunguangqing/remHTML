/**
 * Created by Crazy_annie on 2017/3/28.
   rem ���� ���� font-size ��С
 */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {

            var clientWidth = docEl.clientWidth;

            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';

        };
    if (!doc.addEventListener) return;

    win.addEventListener(resizeEvt, recalc, false);

    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
