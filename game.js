var pc_statut1 = 0
var pc_statut2 = 0
var pc_statut3 = 0
var pc_statut41 = 0
var pc_statut42 = 0

function init_game() {
    document.getElementById("pc1").addEventListener("click", jigsaw_pc1)
    document.getElementById("pc2").addEventListener("click", fonctionpc)
    document.getElementById("pc3").addEventListener("click", fonctionpc)
    document.getElementById("pc4").addEventListener("click", fonctionpc)
    document.getElementById("door").addEventListener("click", is_win)
}

function is_win() {
    if (pc_statut1 == 1 && pc_statut2 == 1 && pc_statut3 == 1 && pc_statut41 == 1 && pc_statut42 == 1) {
        return 1
    }
    return 0
}

function jigsaw_pc1() {

}