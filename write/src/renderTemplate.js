import lookup from "./lookup";
import parseArray from "./parseArray";
//函数的功能是让token数组编程DOM字符串
export default function  renderTemplate(tokens,data){
    let result='';
    //遍历token
    for (let i=0;i<tokens.length;i++){
        //查看结点
        let token=tokens[i];
        if (token[0]==='text'){
            //能够拼起来的类型
            result+=token[1]
        }else if (token[0]==='name'){
            //如果是name的类型，当然需要使用lookup防止很多...的情况
            result+=lookup(data,token[1])
        }else if (token[0]==='#'){
            //当时#的时候，结束
            result+=parseArray(token,data);
        }
    }
    return result;
}
