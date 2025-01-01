const funcs = []
for (let x = 0; x < 11; x++) {
    funcs.push(
        function() {
            console.log(x)
        }
    )
}

funcs[2]()
funcs[8]()