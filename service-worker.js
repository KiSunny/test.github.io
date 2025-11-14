const CACHE_NAME = 'lessons-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    '/images/icon-192.png', 
    '/images/icon-512.png',
    // 교재 페이지 등 필수적인 모든 파일 경로를 여기에 추가합니다.
];

// Service Worker 설치 (캐시 저장)
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// 네트워크 요청 처리 (캐시에서 가져오기)
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // 캐시에 요청이 있으면 캐시된 응답을 반환
                if (response) {
                    return response;
                }
                // 없으면 네트워크를 통해 요청
                return fetch(event.request);
            })
    );
});