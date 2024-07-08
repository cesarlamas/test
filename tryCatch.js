Promise.resolve(4)
.then((x) => { throw new Error('oops'); })
.catch(() => 5)
.then((x) => x * 2)
.catch(() => 15)
.then((x) => x - 3)
.then((x) => console.log(x))
.catch(console.error)

// 1. La promesa se resuelve con un then que lanza un error
// 2. El catch maneja el error y devuelve 5
// 3. El siguiente then multiplica 5 por 2 y devuelve 10
// 4. Como la promesa se resuelve, el catch no se ejecuta, por lo que sigue siendo 10
// 5. El proximo then se ejecuta y se resta 3 a 10
// 6. El then se resuelve con 7
// 7. Como el then se resuelve, el catch no se ejecuta, por lo que el resultado final es 7
