const  library = [
  {
    title : "Olawale" , author : "Drogo",  Status:{ own: true, reading: false, read:false
    }
  },
  {
    title : "Akachi " , author : "chuku",  Status:{ own: true, reading: false, read:false
    }
  },
  {
    title : "ellae" , author : "baby",  Status:{ own: true, reading: false, read:false
    }
  }
];
console.log(library);

// steps 2
library[0].Status.read= true;
library[1].Status.read= true;
library[2].Status.read= true;
console.log(library);

//step 3 not working 
const { title: firstBook } = library[0];


//step 4
const toJson= JSON.stringify(library);
console.log(toJson);