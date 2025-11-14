// script.js

// PWA의 핵심 기능인 Service Worker를 등록하는 코드입니다.
if ('serviceWorker' in navigator) {
    // 웹 페이지가 완전히 로드된 후에 Service Worker를 등록합니다.
    window.addEventListener('load', () => {
        // 'service-worker.js' 파일을 찾아 등록합니다.
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker 등록 성공:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker 등록 실패:', error);
            });
    });
}
// 웹사이트에 동적인 기능(예: 목차 토글, 내용 검색 등)이 필요하면 여기에 추가적인 JavaScript 코드를 작성합니다.