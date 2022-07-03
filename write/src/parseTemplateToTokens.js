//作用：将模板字符串转化为token（刚刚使用scanner是解析{{}}）
import Scanner from "./Scanner";
import nestTokens from "./nestTokens";
export default function parseTemplateToTokens(templateStr){
    let tokens=[];
    //创建扫描器
    const scanner =new Scanner(templateStr);
    //让扫描器开始工作，工作的条件是扫描器的没有扫描到结尾
    var words;
    while (scanner.pos<scanner.templateStr.length){
        //收集文字
         words=scanner.scanUtil("{{");
        if (words!==''){
            //把相关的数据存起来
            tokens.push(['text',words])
        }
        //过{{
        scanner.scan("{{");
        words=scanner.scanUtil("}}");
        if (words!==''){
          if (words[0]==='#'){
              //#开头表示是需要循环遍历的，需要使用不同的token
              tokens.push(['#',words.substring(1)]);
          }else if (words[0]==='/'){
              //结束遍历的标志
              tokens.push(['/',words.substring(1)]);
          }else {
              tokens.push(['name',words])
          }
        }
        scanner.scan("}}")


    }
    //返回整理好的token
    return nestTokens(tokens);
}
