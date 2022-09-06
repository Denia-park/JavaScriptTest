//출처 :https://youtu.be/aoQSOZfz3vQ

// async & await
// clear style of using promise :)

// 1. async
// async 를 쓰면 내부 return 값이 자동으로 Promise 객체로 리턴을 한다.
async function fetchUser() {
    // do network reqeust in 10 secs....
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
// await 는 async 안에서도 쓸수있다.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs ✨
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
        fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
