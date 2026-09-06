importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD-XGCAZUbhObg5YbvhacplOwmKBCzsWKs",
  authDomain: "vpbd-5ae9f.firebaseapp.com",
  projectId: "vpbd-5ae9f",
  storageBucket: "vpbd-5ae9f.firebasestorage.app",
  messagingSenderId: "351196275296",
  appId: "1:351196275296:web:4d2db5d0a29ccb6a66d905"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const n = payload.notification || {};
  self.registration.showNotification(n.title || 'Дошка завдань', {
    body: n.body || '',
    icon: undefined,
  });
});
