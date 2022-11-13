// // {const arr = [12, -4, 32, -5, 34, -23, 5];

// // function arrFilter (arr) {
// //    return arr.filter((item) => item > 0)
// // }

// // console.log(arrFilter([12, -4, 32, -5, 34, -23, 5]));}

// // function handler(num, arr){
// //     if(num > 0){
// //         return arr.filter((item) => item > 0)
// //     }else{
// //         return arr.filter((item) => item < 0)
// //     }
// // }

// // {
// // const handler = (num, arr) => num > 0 ? arr.filter((item) => item > 0) : arr.filter((item) => item < 0)

// // console.log(handler(2,[-1,-2,-3,1,2,3]))

// // }

// // const result  = arr.map(({name, website, company, address}) => {
// //     const company_name = company.name;
// //     const adres = address.street
// //     return {name, website, company_name, adres}
// // });

// // console.log(result)

// // const arr = [
// //     {
// //       "id": 1,
// //       "name": "Leanne Graham",
// //       "username": "Bret",
// //       "email": "Sincere@april.biz",
// //       "address": {
// //         "street": "Kulas Light",
// //         "suite": "Apt. 556",
// //         "city": "Gwenborough",
// //         "zipcode": "92998-3874",
// //         "geo": {
// //           "lat": "-37.3159",
// //           "lng": "81.1496"
// //         }
// //       },
// //       "phone": "1-770-736-8031 x56442",
// //       "website": "hildegard.org",
// //       "company": {
// //         "name": "Romaguera-Crona",
// //         "catchPhrase": "Multi-layered client-server neural-net",
// //         "bs": "harness real-time e-markets"
// //       }
// //     },
// //     {
// //       "id": 2,
// //       "name": "Ervin Howell",
// //       "username": "Antonette",
// //       "email": "Shanna@melissa.tv",
// //       "address": {
// //         "street": "Victor Plains",
// //         "suite": "Suite 879",
// //         "city": "Wisokyburgh",
// //         "zipcode": "90566-7771",
// //         "geo": {
// //           "lat": "-43.9509",
// //           "lng": "-34.4618"
// //         }
// //       },
// //       "phone": "010-692-6593 x09125",
// //       "website": "anastasia.net",
// //       "company": {
// //         "name": "Deckow-Crist",
// //         "catchPhrase": "Proactive didactic contingency",
// //         "bs": "synergize scalable supply-chains"
// //       }
// //     },
// //     {
// //       "id": 3,
// //       "name": "Clementine Bauch",
// //       "username": "Samantha",
// //       "email": "Nathan@yesenia.net",
// //       "address": {
// //         "street": "Douglas Extension",
// //         "suite": "Suite 847",
// //         "city": "McKenziehaven",
// //         "zipcode": "59590-4157",
// //         "geo": {
// //           "lat": "-68.6102",
// //           "lng": "-47.0653"
// //         }
// //       },
// //       "phone": "1-463-123-4447",
// //       "website": "ramiro.info",
// //       "company": {
// //         "name": "Romaguera-Jacobson",
// //         "catchPhrase": "Face to face bifurcated interface",
// //         "bs": "e-enable strategic applications"
// //       }
// //     },
// //     {
// //       "id": 4,
// //       "name": "Patricia Lebsack",
// //       "username": "Karianne",
// //       "email": "Julianne.OConner@kory.org",
// //       "address": {
// //         "street": "Hoeger Mall",
// //         "suite": "Apt. 692",
// //         "city": "South Elvis",
// //         "zipcode": "53919-4257",
// //         "geo": {
// //           "lat": "29.4572",
// //           "lng": "-164.2990"
// //         }
// //       },
// //       "phone": "493-170-9623 x156",
// //       "website": "kale.biz",
// //       "company": {
// //         "name": "Robel-Corkery",
// //         "catchPhrase": "Multi-tiered zero tolerance productivity",
// //         "bs": "transition cutting-edge web services"
// //       }
// //     },
// //     {
// //       "id": 5,
// //       "name": "Chelsey Dietrich",
// //       "username": "Kamren",
// //       "email": "Lucio_Hettinger@annie.ca",
// //       "address": {
// //         "street": "Skiles Walks",
// //         "suite": "Suite 351",
// //         "city": "Roscoeview",
// //         "zipcode": "33263",
// //         "geo": {
// //           "lat": "-31.8129",
// //           "lng": "62.5342"
// //         }
// //       },
// //       "phone": "(254)954-1289",
// //       "website": "demarco.info",
// //       "company": {
// //         "name": "Keebler LLC",
// //         "catchPhrase": "User-centric fault-tolerant solution",
// //         "bs": "revolutionize end-to-end systems"
// //       }
// //     },
// //     {
// //       "id": 6,
// //       "name": "Mrs. Dennis Schulist",
// //       "username": "Leopoldo_Corkery",
// //       "email": "Karley_Dach@jasper.info",
// //       "address": {
// //         "street": "Norberto Crossing",
// //         "suite": "Apt. 950",
// //         "city": "South Christy",
// //         "zipcode": "23505-1337",
// //         "geo": {
// //           "lat": "-71.4197",
// //           "lng": "71.7478"
// //         }
// //       },
// //       "phone": "1-477-935-8478 x6430",
// //       "website": "ola.org",
// //       "company": {
// //         "name": "Considine-Lockman",
// //         "catchPhrase": "Synchronised bottom-line interface",
// //         "bs": "e-enable innovative applications"
// //       }
// //     },
// //     {
// //       "id": 7,
// //       "name": "Kurtis Weissnat",
// //       "username": "Elwyn.Skiles",
// //       "email": "Telly.Hoeger@billy.biz",
// //       "address": {
// //         "street": "Rex Trail",
// //         "suite": "Suite 280",
// //         "city": "Howemouth",
// //         "zipcode": "58804-1099",
// //         "geo": {
// //           "lat": "24.8918",
// //           "lng": "21.8984"
// //         }
// //       },
// //       "phone": "210.067.6132",
// //       "website": "elvis.io",
// //       "company": {
// //         "name": "Johns Group",
// //         "catchPhrase": "Configurable multimedia task-force",
// //         "bs": "generate enterprise e-tailers"
// //       }
// //     },
// //     {
// //       "id": 8,
// //       "name": "Nicholas Runolfsdottir V",
// //       "username": "Maxime_Nienow",
// //       "email": "Sherwood@rosamond.me",
// //       "address": {
// //         "street": "Ellsworth Summit",
// //         "suite": "Suite 729",
// //         "city": "Aliyaview",
// //         "zipcode": "45169",
// //         "geo": {
// //           "lat": "-14.3990",
// //           "lng": "-120.7677"
// //         }
// //       },
// //       "phone": "586.493.6943 x140",
// //       "website": "jacynthe.com",
// //       "company": {
// //         "name": "Abernathy Group",
// //         "catchPhrase": "Implemented secondary concept",
// //         "bs": "e-enable extensible e-tailers"
// //       }
// //     },
// //     {
// //       "id": 9,
// //       "name": "Glenna Reichert",
// //       "username": "Delphine",
// //       "email": "Chaim_McDermott@dana.io",
// //       "address": {
// //         "street": "Dayna Park",
// //         "suite": "Suite 449",
// //         "city": "Bartholomebury",
// //         "zipcode": "76495-3109",
// //         "geo": {
// //           "lat": "24.6463",
// //           "lng": "-168.8889"
// //         }
// //       },
// //       "phone": "(775)976-6794 x41206",
// //       "website": "conrad.com",
// //       "company": {
// //         "name": "Yost and Sons",
// //         "catchPhrase": "Switchable contextually-based project",
// //         "bs": "aggregate real-time technologies"
// //       }
// //     },
// //     {
// //       "id": 10,
// //       "name": "Clementina DuBuque",
// //       "username": "Moriah.Stanton",
// //       "email": "Rey.Padberg@karina.biz",
// //       "address": {
// //         "street": "Kattie Turnpike",
// //         "suite": "Suite 198",
// //         "city": "Lebsackbury",
// //         "zipcode": "31428-2261",
// //         "geo": {
// //           "lat": "-38.2386",
// //           "lng": "57.2232"
// //         }
// //       },
// //       "phone": "024-648-3804",
// //       "website": "ambrose.net",
// //       "company": {
// //         "name": "Hoeger LLC",
// //         "catchPhrase": "Centralized empowering task-force",
// //         "bs": "target end-to-end models"
// //       }
// //     }
// //   ]

// // const allnames = {
// //     usernames: [],
// //     company_names: []
// // };
// // arr.forEach(({username, company}) => {
// //     allnames.usernames.push(username);
// //     allnames.company_names.push(company.name)
// // })
// //  console.log(allnames);

// // const get_users = async () => {
// //   const result = [];

// // }

// // for(let i = 1; i < 5; i++){

// //   const get_users = async (id) => {
// //     const response = await fetch(`https://reqres.in/api/unknown/${id}`);
// //     const {data} =  await response.json();

// // }
// // console.log(users.data);

// // get_users(2)

// const products = [
//   {
//     id: 1,
//     title: "велосипед",
//     price: 45000,
//     marks: [4, 3, 5, 4, 4, 5],
//   },
//   {
//     id: 2,
//     title: "ролики",
//     price: 15000,
//     marks: [3, 4, 3, 3],
//   },
//   {
//     id: 3,
//     title: "самокат",
//     price: 12000,
//     marks: [],
//   },
//   {
//     id: 4,
//     title: "лыжи",
//     price: 25000,
//     marks: [5, 4, 5, 5, 4],
//   },
//   {
//     id: 5,
//     title: "сноуборд",
//     price: 27000,
//     marks: [2, 3, 2, 2],
//   },
// ];

// // const searchName = products.reduce((prev, {price}) => prev < price ? price : prev, 0)

// // console.log(searchName);

// // const searchName = products.reduce((prev, item) => prev.price < item.price ? item : prev);

// // console.log(searchName);

// // массив из названии товара

// // const searchName = products.reduce((prev, {title}) => [...prev ,  title], [] ) ;

// // console.log(searchName);

// //формирует массив из вех оценок

// // const result = products.map((item) => item.marks.reduce((acc, item) => item.));

// // console.log(result);

// // let user = {
// //   name: 'John',
// //   age: 30
// // };

// // console.log([user].map((item) => {item} = user));

// // function check(a,x){
// //   const elem = a.find((item) => item === x){
// //     return elem ===
// //   }

// // }
// // check([1,2,3,4],2);

// // const posts = [
// //   {
// //     title: 'My first title',
// //     descr: 'My first description',
// //     author: 'Arsen'
// //   },
// //   {
// //     title: 'My second title',
// //     descr: 'My second description',
// //     author: 'Ivan'
// //   }
// // ]

// // const title = prompt('Wwedite sagolovok');
// // const descr = prompt('Wwedite opisanie');

// // const arr = ['hello', 'world'];

// // const newArr = [...arr, ' dsasdas']

// // console.log(arr); //[ 'hello', 'world', ' dsasdas' ]

// // const posts = [
// //     {
// //       title: 'My first title',
// //       descr: 'My first description',
// //       author: 'Arsen'
// //     },
// //     {
// //       title: 'My second title',
// //       descr: 'My second description',
// //       author: 'Ivan'
// //     }
// //   ]

// //   for(let i = 0; i < posts.length; i++){
// //         console.log(posts[i].title);
// //   }

// const books = [
//   {
//     author: "Pushkin",
//     name: "Kapitan Doch",
//     count: "500",
//   },
//   {
//     author: "Tolstoi",
//     name: "Woina i mir",
//     count: "1000",
//   },
// ];

// const newAuthor = prompt("Naswanie awtora");
// const newName = prompt("Naswanie knigi");
// const newCount = prompt("Kolchestwo knig");

// const newBook = {
//   author: newAuthor,
//   name: newName,
//   count: newCount,
// };

// const newBooks = books.concat(newBook);

// newBooks.map((item) => console.log(item.author, item.name, item.count));

// //   function check(a,x){
// //   const elem =  a.find((item) => item === x )
// //     return elem === x ? true : false
// // };

// //   console.log((check([80, 117, 115, 104, 45, 85, 112, 115], 4115)));

// const grow = (x) => x.reduce((acc, item) => acc * item);

// console.log(grow([1, 2, 3]));

// function litres(time) {
//   return Math.floor(0.5 * time);
// }

// console.log(litres(3));

// const grus = () => "hello world";

// console.log(grus());

// function hoopCount(n) {
//   return n >= 10
//     ? "Great, now move on to tricks"
//     : "Keep at it until you get it";
// }

// console.log(hoopCount(1));
const color = document.querySelector('#changeColor');
const changeBackground = document.querySelector('#changebackground');

color.addEventListener('click', () => {document.body.style.backgroundColor = 'gold'});
changeBackground.addEventListener('click', () => {document.body.style.background = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPk2fsU7NExczLkrBMaujd8B4-LoXethdUbg&usqp=CAU'})


let txt = 'Hello';
console.log(txt.split(''));
console.log(txt);


function getAge(inputString){
    let toArray = inputString.split(' ');
    let toNumber = toArray[0];
    return Math.floor(toNumber)
    
      
    }


    console.log(getAge("4.5 years old"));

    function lovefunc(flower1, flower2){
        return (flower1 + flower2 ) % 2  > 0 ? true : false
      }

      console.log(lovefunc(1, 4));


      console.log(0/2);


      function removeChar(str){
       let newStr = str.split('').shift()
       console.log(newStr);
       
       };
       
       console.log(removeChar('hello'));

       function getAverage(marks){
        const  newArr = marks.reduce((acc, item) => acc + item );
         return Math.floor(newArr / marks.length)
        
       } 

       console.log(getAverage([1,1,1,1,1,1,1,2]));



       function greet(language) {
        
    const schprache = {
        english: "Welcome",
        czech: "Vitejte",
        danish: "Velkomst",
        dutch: "Welkom",
        };


        
        
        return schprache.language
      }
    

    console.log(greet(english));


    function areYouPlayingBanjo(name) {
        
          if(name.split('').shift() == 'R'){
            return `"${name} plays banjo"`
          }else if (name.split('').shift() == 'r'){
            return `"${name} plays banjo"`
          }else {
           return `"${name} does not play banjo"`
          }
        }

        console.log(areYouPlayingBanjo('Adam'));