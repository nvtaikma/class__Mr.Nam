// function addNewComment(newComment){
//     if(newComment === ""){
     
//         console.log('new comment is empty');
//         return;
//     }else{
//         console.log("new comment is:", newComment);
//     }

// }
// {
//     var x =2;
//     // var có thể log ra ngoài, còn let và const thì không thể
// }
// console.log(x);

// function myFunction(carName){
//     let carName = "Volvo";
//     // không thể console.log ra ngoài function cho cả 3 trường hợp var let và const
// }
// console.log(carName);

// 3. tham chiếu và tham trị
//  tham trị
    // let a =1;
    // let b = a;
    // a = 2;
    // console.log(b);


    // var newComment ={name: "hello world"} ;
    // function addNewComment(newComment){
    //     newComment.name = "hello react";
    // }
    // addNewComment(newComment);
    // console.log(newComment);
// tham chiếu
// let a = { name : "cat"};
// let b = a;
//     a.name = "dog";
//     console.log();
// const man = { name : "thanh"}

// function changeName(people){
//     people.name = "hung";
//     console.log("nam la",people.name);
// }
// changeName(man);
// console.log(man.name);

// myFun("one", "two", "three", "four", "five", "six");
// function myFun(a, b, ...manyMoreArgs) {
//     console.log("a", a);
//     console.log("b", b);
//     console.log("manyMoreArgs", manyMoreArgs);
//   }


// bài tập
const ages = [3, 5, 44, 7, 33, 33, 17, 90, 8, 12, 3, 24, 120, 7, 100];

const ranges = [
	[7,15],
	[4,40],
	[11,125]
];
let coutArr = [];

// for(let i = 0; i < ages; i++) {
//     coutArr.push(ages[i]);
//     console.log(coutArr);
// }

// for(let i = 0; i <ranges.length;i++ ){
//     console.log(ranges[i]);
//     for(let j = 0; j <= ranges[i].length; j++){
//            for(let a = ranges[i][j]; a < ranges[i][j+1]; a++){
            
//             console.log('Phan tu trong mang '+ ranges[i] + ' : ' + a );
//             for(let b = 0; b < ages.length; b++){
//                 if(ages[b] == a){
//                     coutArr.push(ages[b]);
//                 }
//             }
//             console.log(coutArr.length);
            
//         }
        
//     }
// }






// //Đếm số phần tử thỏa mãn của mảng ages với từng phần tử trong mảng ranges
    let count = 0;
    let arritem= [];
    for(let i=0;i<ages.length;i++){
      if(ages[i] >=ranges[1][0] && ages[i] <= ranges[1][1]) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
        {
            arritem.push(ages[i]);
            count ++;
            // console.log(ages[i]);
        }
    }
    console.log(arritem);
    console.log( " xuat hien " + count +  " lan");
    ranges.push(arritem);
    console.log(ranges);





  
  



