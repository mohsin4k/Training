const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("foo");
    }, 300);
  });
  
  myPromise.then((value)=>{
    console.log("Resolved with value "+value);
    return "foo1";
  }, (value)=>{
    console.log("Rejected with value "+value);
    throw "foo1";
  })
  .then((value)=>{
    console.log("Resolved1 with value "+value);
  }, (value)=>{
    console.log("Rejected1 with value "+value);
  });