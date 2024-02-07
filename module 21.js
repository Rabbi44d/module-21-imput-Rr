
// *** মদুলে ২১ নামবার থেকে জানা, কিলো মিটার থেকে মিটার করে, কেজি থেকে গ্রাম করতে, বছর বের করা, গড় বের করা, গড় বের করে যোগ করা, দুটি নাম থাকলে একটি নাম নেওয়া, নামবার দুবার থাকলে এক নাম্বার নেওয়া, ছোট বড় মান বের করা, পাই বের করা , তারিখ বের করা তার হিসাব ****** টিম দিয়ে একটি প্ত্র থেকে অন্য পাত্রে রাখা*****




// / ***** আগের ভিডিও আলোচনা বেসিক *** video--21.1***//

// **var মানে এখন বাট **
// const মানে কোন কিছু পরিবর্তন করতে পারবো না ***
// let  মানে যা যা পরিবর্তন করতে পারবো  যেমন--

let Rabbi =50;
Rabbi=100;
console.log('This is a paragraph.', Rabbi)

// ---------------------------------------------------------------------------------------;

// ****কিলো মিটার থেকে মাইলে করতে, সে,মি থেকে মিটার করতে , কেজি থেকে গ্রাম করতে **video--21.2**//

// *****"google ----miles to km" সব বিষয় জানতে পরবো ***** 

function Rabbi(kilo){
    const mitar =kilo *0.66666;
    return mitar;
}
const Rakib =Rabbi(2)
console.log(Rakib)

// ************************

function Rabbi(Sm){
    const mitar =Sm*0.56230;
    return mitar;
}
const Rayhan =Rabbi(2);
console.log('This is a heading', Rayhan)

// --------------------------------------------------------------------------------------;

// *** বছর হিসাব করার জন্য কাজ ফাংশন দিয়ে কাজ **video 21.3*** //

function year(bochor){
    if(bochor %10 !==1 || bochor %4 !==0){
        return true;
    }
    else {
        return false;
    }
}
const Rabbi=year(2020)
console.log(Rabbi)

// *****************************************

// function Rabbi(year){
//     if(year %100 !==0 && year %4 !==1){
//         return ['This is a heading'];
//     }
//     else {
//         return ['This is a paragraph.'];
//     }
// }
// const Rayhan =Rabbi(2050)
// console.log(Rayhan)

// ----------------------------------------------------------------------------------------------------;

// ***** যদি গড় বের করার কাজ **video --21.4***//

// function Rabbi(nambar){
//     for(const Rabbi of nambar)
//     console.log(Rabbi)

// }
// const Rakib =[10,13,15,18,19,21,20];
// console.log('This is a Heading.', Rakib)

// *****************************

// *** const এরে ভিতর সংখ্যা দিতে const ব্যাবহার করতে হবে  push **

// function Rabbi(Nambar){
//     const adds =[1];
//     for(const nambar of Nambar){
//         if(nambar %2 ===1){
//             adds.push(Nambar);
//         }
//     }
//     console.log(adds)
// }
// const Nambar =[21, 23, 63, 20, 50, 39];
// const avg=Rabbi(Nambar);
// console.log('This is a heading,', avg)

// গড় করতে যদি জোর বিজোড় সংখ্যা আগে যোগ ফল বের করে গড় বের করতে হবে যেমন adds বিজোড় গড় করে ****

// বিজোড় এর ক্ষেত্রে হিসাব***

function Rabbi(nambar){
    const array =[];
    for(const Rakib of nambar){
        if(Rakib % 2 ===1){
            array.push(Rakib)
        }
    }

    let sum = 0;
    for (const Rayhan of array){ 
          sum = sum + Rayhan;
    }
    const count = array.length
    console.log(sum , count)
    const avg =sum / count;
    return avg;
}

const nambar = [1, 3, 10, 20, 5, 66, 79];
const avg =Rabbi(nambar);
console.log('This is a Total Man', avg)

// ***********************************

// **জোর এর ক্ষেত্রে হিসাব****

// function Rakib(Nambar){
//     const addd =[];
//     for(const Rayhan of Nambar){
//         if(Rayhan %2===0){
//               addd.push(Rayhan)
//         }
//     }
//     let sum =0;
//     for(const Tuhin of addd){
//         sum =sum +Tuhin;
//     }
//     const conut =addd.length;
//     console.log(sum, conut)
//     const avg =sum / conut;
//     return avg;

// }

// const Nambar =[10, 31, 21, 65, 20, 50];
// const avg = Rakib(Nambar);
// console.log('This is a total jog man', avg)

// ------------------------------------------------------------------------------------------------------;

//   *** যদি কোন সংখ্যা বা নাম দুবার থাকে  একবার করে নিবে তার হিসাব এবং বাকি গুলো বের করে দিবে **video --21-5***///

// ***নাম এর ক্ষেত্রে গুরুত্বপূর্ণ বিষয় আলোচনা****

function pori(array){
      const Rabbi =[];
        for(const item of array){
            if(Rabbi.includes(item)===false){
                Rabbi.push(item);
            }
        }
        return Rabbi;
}

const not =['Rabbi', 'Rakib', 'Rayhan', 'Rabbi', 'Rakib', 'Rifat', 'Rayhan', 'Rafi'];
const totalnam=pori(not);
console.log(totalnam)

// ******************************************************;

// **নামবার ক্ষেত্রে গুরুত্বপূর্ণ বিষয় আলোচনা***//

// function Rayhan(Nambar){
//     const Rabbi=[];
//       for(const Nam of Nambar){
//         if(Rabbi.includes(Nam) === false){
//             Rabbi.push(Nam)
//         }
//       }
//       return Rabbi;
// }

// const nambar=[10, 10, 25, 30, 50, 25, 30, 60, 50, 100, 60];

// const TotalNambar =Rayhan(nambar);
// console.log(TotalNambar)

// -------------------------------------------------------------------------------------------------------;

// *** অনেক সংখার ভিতর ছোট বড় সংখ্যা বের করতে পারি min, max **video--21.6****/

// *** সট কাঠ নিয়েম min মানে ছোট তার হিসাব ***

// const Rabbi =Math.min(20, 5, 1, 50, 60, 100, 1, -23);
// console.log(Rabbi);

// const Rakib =Math.min(20, 10, 100, 50, 40, 8596, 89, 65, 25, 24, 569, 456);
// console.log('choto songkha', Rakib);

// ************************************

// *** সট কাঠ নিয়েম max মানে বড় তার হিসাব***

// const Rafi =Math.max(20, 10, 50, 600, 90, 100, 50, 23, 21, 20);
// console.log(Rafi)

// const Rayhan=Math.max(500, 1000, 200, 300, 50, 60, 623, 236, 213, 210);
// console.log('boro songkha', Rayhan)

// ******************************************

// অন্য বিষয় আলোচনা হিসাব**** পাই, রাউত মানে . উপরে উঠে যাবে  - ফ্লুর মানে  . নিজে নামে যাবে

console.log(Math.PI);
console.log(Math.abs(5-10));
console.log(Math.round(2.25));
console.log(Math.floor(2.95));
console.log(Math.ceil(2.00011));

const Rabbi =Math.round(Math.round(2)*20);
console.log(Rabbi)

// -------------------------------------------------------------------------------------------------------;

// **** তারিখ নিয়ে আলোচনা তারিখ থেকে অনেক তথ্য নিতে পারি *** video--21.7 **//

const Rabbi = new Date();
console.log(Rabbi)

// ***********************

const today = new Date('2024-10-20');
console.log(today.getMonth())
today.setMonth(11);
console.log(today)

// *******************************

const Rafi =new Date(2023 -10-10);
console.log(Rafi.setMinutes())

// ---------------------------------------------------------------------------------------------------;


// **** যদি একটা মান অন্য মানের ভিতর দেই তাহলে কি হয় তার হিসাব ****video --21.8***///

let a = 20;
let b = 30;
console.log(a,b)

const team = a;
a = b;
b = team;
console.log(a,b)

// ****************************

// let Rabbi=100;
// let Rakib=200;
// console.log(Rabbi,Rakib)

// const team = Rabbi;
// Rabbi = Rakib;
// Rakib = team;

// console.log(Rabbi, Rakib)

// *********************************
