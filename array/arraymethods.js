   const arr = ['String',123,'code',222];

    console.log(arr);

    arr.push('adesh',343);
    console.log(arr);

    arr.pop();
    console.log(arr);

    arr.shift();
    console.log(arr);

     arr.unshift();
     console.log(arr);

      //................................. Push .................//

     arr.push= {name:'Adesh',age:20}
     console.log(arr);

     //................................. Shift  .................//

     arr.shift();
     console.log(arr);

     //................................. Unshift .................//

     arr.unshift={name:'Aditya', age:18};
     console.log(arr);

     //................................. indexOf .................//

    let arr1 = ['mango',123,'Apple'];
    console.log(arr1.indexOf('mango'));


    //................................. find method .................//

    const num2 = [19,22,33,45,66,36];
    const num3 = num2.find(a=>a>22);
    console.log(num3);

    const num4 = [19,22,33,21,66,36];
    const num5 = num4.find(a=>a<22);
    console.log(num5);

    //................................. filter method ................//

    const num = [10,20,30,40,44];

    const num1 = num.filter(a=> a>22);
    console.log(num1);

     
    const a1 = mark.filter((j)=>{
        return j >=30;
    })
    console.log(a1);