function first(){
    document.getElementById("content2").classList.remove("active")
    document.getElementById("content3").classList.remove("active")

    document.getElementById("content1").classList.add("active")
    
}

function second(){
    document.getElementById("content1").classList.remove("active")
    document.getElementById("content3").classList.remove("active")

    document.getElementById("content2").classList.add("active")
    
}

function third(){
    document.getElementById("content1").classList.remove("active")
    document.getElementById("content2").classList.remove("active")

    document.getElementById("content3").classList.add("active")
    
}