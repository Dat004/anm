const video = document.getElementById('mp4')
let check = false
const auto = document.querySelector('#video .handle .auto')

function handlEvents() {
    const interact = document.querySelector('.about .evalute div')
    auto.addEventListener('click', function(e) {

        if(video.paused) {
            video.play()
            console.log('run')
        } else {
            video.pause()
            console.log('pause')
        } 
    })

    interact.addEventListener('click', function() {
        document.querySelector('.about .evalute div .fa-solid').classList.toggle('red')
    })
}

handlEvents()


function stt() {
    video.addEventListener('play', function() {
        auto.innerHTML = `<i class="fas fa-pause"></i>`
        check = true
    })
    video.addEventListener('pause', function() {
        auto.innerHTML = `<i class="fas fa-play"></i>`
        check = false
    })
}

stt()

function time() {
    const prev = document.querySelector('#video .handle .prev')
    const next = document.querySelector('#video .handle .next')
    video.addEventListener('timeupdate', function() {
        const currentTime = video.currentTime
        const duration = video.duration
        
        prev.addEventListener('click', function() {
            const now = currentTime - 15
            if(now <= 0) {
                // video.pause()
            }
            video.currentTime = now
        })

        next.addEventListener('click', function() {
            const now = currentTime + 15
            if(now >= video.duration) {
                // video.pause()
            }
            video.currentTime = now
        })

        console.log(currentTime, duration)
    })

}

time()
