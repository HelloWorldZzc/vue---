import parseTemplateToTokens from "./parseTemplateToTokens";
import renderTemplate from "./renderTemplate";
//全局提供my_TemplateEngine
window.my_TemplateEngine={
    //渲染方法
render(templateStr,data){
    let tokens=parseTemplateToTokens(templateStr);
    //调用renderTemplate函数，让token数组编程DOM
    let dom=renderTemplate(tokens,data)
    return dom

}
}
