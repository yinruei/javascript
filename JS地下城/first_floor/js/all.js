function multiple() {
    for ( i=1; i<10; i++) {
        if (i==1){
            continue
        }
        for ( j=1; j<10; j++) {
            console.log(i,"*", j,"=", i*j)
            // var mul = document.querySelector('#multi')
            // mul.innerHTML = str;
        }
    }
}

multiple();