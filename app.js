let stage = 1
let choice = 0
let prompt_1, prompt_2, animation_player

function main() {
    prompt_1 = document.querySelector("#prompt_1")
    prompt_2 = document.querySelector("#prompt_2")
    animation_player = document.querySelector("#animation_player")
    source = document.querySelector("source")

    window.onkeydown = (event) => {
       const num = event.keyCode - 48
       switch (num) {
        case 1:
            advance_stage(1)
            break
        case 2:
            advance_stage(2)
            break
       }
    }

    animation_player.addEventListener("ended", () => {
        advance_stage()
    })
}

function advance_stage(input) {
    if (stage == 1) {
        stage++
        choice = input
        prompt_1.classList.remove("active")
        prompt_2.classList.add("active")
    } else if (stage == 2) {
        stage++;
        prompt_2.classList.remove("active")
        animation_player.classList.add("active")
        if (choice == 1 && input == 1) { play_animation(1) }
        else if (choice == 1 && input == 2) { play_animation(2) }
        else if (choice == 2 && input == 1) { play_animation(3) }
        else { play_animation(4) }
    } else {
        stage = 1
        animation_player.classList.remove("active")
        prompt_1.classList.add("active")
    }
}

function play_animation(input) {
    console.log(source)
    switch (input) {
        case 1:
            source.setAttribute("src", "videos/class-picture-day.mp4")
            break
        case 2:
            source.setAttribute("src", "videos/dressing-for-events.mp4")
            break
        case 3:
            source.setAttribute("src", "videos/late-for-class.mp4")
            break
    }

    setTimeout(() => {
        animation_player.load()
        animation_player.play()
    }, 1000)
}

window.addEventListener("load", main)