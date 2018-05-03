let http=require("http");
let fs=require("fs");
let url=require("url");
let sliders=require("./sliders");
function read(cb) {
  fs.readFile("./book.json","utf8",function (err,data) {
    if (err||data.length==0){
      cb([]);
    }else {
      cb(JSON.parse(data))
    }
  })
}
function write(data,cb) {
  fs.writeFile("./book.json",JSON.stringify(data),cb);
}
let pageSize=5;
http.createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1')
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  if(req.method=="OPTIONS") return res.end('200');
  let {pathname,query}=url.parse(req.url,true);
  if (pathname==="/sliders"){
    res.setHeader("Content-Type","application/json;charset=utf8");
    setTimeout(function () {
      return res.end(JSON.stringify(sliders));
    },500);
  }
  if(pathname==="/page"){
    let offset=parseInt(query.offset)||0;
    read(function (books) {
      let result=books.reverse().slice(offset,offset+pageSize);
      let hasmore=books.length<=(offset+pageSize)?false:true;
      res.setHeader("Content-Type","application/json;charset=utf8");
      return res.end(JSON.stringify({hasmore,books:result}));
    })
  }
  if (pathname==="/hot"){
    read(function (data) {
      res.setHeader("Content-Type","application/json;charset=utf8");
      return res.end(JSON.stringify(data.reverse().slice(0,6)));
    })
  }
  if (pathname==="/book"){
    let id=parseInt(query.id);
    switch (req.method){
      case "GET":
        if (id){
          read(function (books) {
            let book=books.find(item=>item.bookId===id)||{};
            res.setHeader("Content-Type","application/json;charset=utf8");
            res.end(JSON.stringify(book));
          })
        }else {
          read(function (data) {
            res.setHeader("Content-Type","application/json;charset=utf8");
            res.end(JSON.stringify(data.reverse()));
          })
        }
        break;
      case "POST":
        break;
      case "PUT":
        if (id){
          let str="";
          req.on("data",function (chunk) {
            str+=chunk;
          });
          req.on("end",function () {
            let book=JSON.parse(str);
            read(function (books) {
              books=books.map(item=>{
                if (item.bookId===id){
                  return book;
                }
                return item;
              });
              write(books,function () {
                res.end(JSON.stringify(book))
              })
            })
          })
        }
        break;
      case "DELETE":
        read(function (books) {
          books=books.filter(item=>item.bookId!==id);
          write(books,function () {
            res.end(JSON.stringify({}));
          })
        });
        break;
    }
  }
  if (pathname==="/add"){
      let str="";
      req.on("data",function (chunk) {
        str+=chunk;
      });
      req.on("end",function () {
        let book=JSON.parse(str);
        read(function (books) {
          books.push(book);
          write(books,function () {
            res.end(JSON.stringify(book))
          })
        })
      })
  }
}).listen(3000,function () {
  console.log("listening on port 3000")
});
