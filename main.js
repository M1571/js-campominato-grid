// console.log('prova')

// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata 
// Ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// ------------------------------------

// 
const selectLevels = document.getElementById('levels');
const playButton = document.getElementById('play');

// 
const startGame = () => {

    console.log('Game Started')

        // 
        const mode = selectLevels.value
        switch( mode ) {
            case 1:

                break;
            case 2:

                break;
            case 3:

        }
}

playButton.addEventListener('click', startGame);
