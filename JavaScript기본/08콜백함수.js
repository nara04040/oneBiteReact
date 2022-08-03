function checkMood(mood, goodCallback, badCallback) {
    if (mood === 'good') {
        goodCallback()
    } else {
        badCallback()
    }
}


function cry() {
    console.log('action :: cry');
}

function sing() {
    console.log('action :: sing');
}

function dance() {
    console.log('action :: dance');
}

checkMood('sad', sing, cry)
// checkMood가 sad임으로 checkMood의 함수안의 if문에 else에 해당,
// badCallback()이 실행, 근데 매개변수에 해당되는 badCallback의 값은 checkMood('sad', sing, cry)에서의 cry, 
// cry function이 담긴다. 고로 badCallback = function cry()인것
// 실행한다면 cry가 실행된다.


/**
 * 다른함수에 매개변수로 함수를 넘겨주는 행위
 */