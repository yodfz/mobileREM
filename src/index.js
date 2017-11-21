export default function setDPR ($width = 750) {
    let d = document;
    const desWidth = $width;
    let _dpr = (1 / window.devicePixelRatio);
    const _MaxWidth = 414 * window.devicePixelRatio;
    const userAgent = navigator.userAgent;
    let widthStr = 'device-width';
    let isMobile = true;
    let iWidth = 0;
    let _html = d.getElementsByTagName('html')[0];
    if (userAgent.toLowerCase().indexOf('iphone') && userAgent.toLowerCase().indexOf('android')) {
        isMobile = false;//iWidth = _MaxWidth;
        widthStr = iWidth + 'px';
    }
    //todo:可能需要改成创建
    d.querySelector('[name="viewport"]').setAttribute('content',
        'width=' + widthStr + ' , initial-scale=' + _dpr + ', maximum-scale=' + _dpr + ', minimum-scale=' + _dpr + ', user-scalable=no');
    iWidth = Math.min(d.documentElement.clientWidth, window.innerWidth);
    if (!isMobile) iWidth = _MaxWidth;
    _html.style.fontSize = (((100 * iWidth) / desWidth)) + 'px';
    _html.dataset.dpr = window.devicePixelRatio;
    window.onresize = function () {
        setDPR();
    };
}