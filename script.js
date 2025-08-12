function goBack() { alert("رجوع (محاكاة)"); }
function goHome() { alert("هوم (محاكاة)"); }
function skipForward() { alert("تقديم (محاكاة)"); }

function volumeDown() {
    let video = document.getElementById('phone-screen');
    video.volume = Math.max(0, video.volume - 0.1);
}
function volumeUp() {
    let video = document.getElementById('phone-screen');
    video.volume = Math.min(1, video.volume + 0.1);
}

// تشغيل مثال فيديو (استبدله برابط بثك الحقيقي)
let videoElement = document.getElementById('phone-screen');
videoElement.src = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
