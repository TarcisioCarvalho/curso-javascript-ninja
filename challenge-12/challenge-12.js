/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(function(){
    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    // ?
    const person = {
        name:'Tarcísio',
        lastname:'Carvalho',
        age:30
    }
    console.log( 'Propriedades de "person":', person );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    // ?
    const arr = Object.keys(person);
    console.log(arr);
    /*
    Crie um array vazio chamado `books`.
    */
    // ?
    let books = [];
    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    // ?
    books.push({name:'A Cabana',pages:450});
    books.push({name:'O último Samurai',pages:750});
    books.push({name:'O Alquimista',pages:350});

    console.log( '\nLista de livros:',books );

    /*
    Mostre no console todos os livros.
    */
    // ?

    console.log( '\nLivro que está sendo removido:', books.pop() );
    /*
    Remova o último livro, e mostre-o no console.
    */
    // ?

    console.log( '\nAgora sobraram somente os livros:' , books );
    /*
    Mostre no console os livros restantes.
    */
    // ?

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    // ?
    let str = JSON.stringify(books)
    console.log( '\nLivros em formato string:', str );

    /*
    Mostre os livros nesse formato no console:
    */
    // ?

    /*
    Converta os livros novamente para objeto.
    */
    // ?
    console.log( '\nAgora os livros são objetos novamente:', JSON.parse(str) );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    // ?
        for(obj in books){
           for(prop in books[obj]){
               console.log(prop,': ',books[obj][prop]);
           }
        }
    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    // ?
    const myName = ['t','a','r','c','i','s','i','o'];
    console.log( '\nMeu nome é:', myName.join('') );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    // ?

    console.log( '\nMeu nome invertido é:',myName.reverse().join('') );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    // ?

    console.log( '\nAgora em ordem alfabética:', myName.sort().join('') );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    // ?
})()

