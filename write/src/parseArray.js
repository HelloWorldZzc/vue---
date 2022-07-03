import renderTemplate from "./renderTemplate";
import lookup from "./lookup";
//处理数组，结合renderTemplate实现递归,注意，这个函数收的参数是token！而不是tokens！
export default function  parseArray(token,data){
    //得到整体数据data中这个数组要使用的部分
    let v=lookup(data,token[1]);
    let result='';
    //遍历数组，其实也是一个循环迭代的操作
    for (let i=0;i<v.length;i++){
     result+=renderTemplate(token[2],{
         //使用了es6的展开运算符，因为在使用的时候，要是里面只有一个字符串
         //那么就需要使用.来代替，因此需要把每个.所代表的值进行说明
         ...v[i],
         ".":v[i]
     });
    }
    return result;
}
