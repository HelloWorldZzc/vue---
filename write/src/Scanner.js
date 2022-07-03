/*
  扫描器类
* */
export default class Scanner{
    constructor(templateStr) {
        //模板字符串的定义
        this.templateStr=templateStr
        console.log(templateStr)
        //指针
        this.pos=0;
        //尾巴，一开始就是模板字符串原文
        this.tail=templateStr
    }
    //功能弱，就是走过指定的内容，没有返回值
    scan(tag){
        if (this.tail.indexOf(tag)===0){
            //tag有多长，比如{{的长度是2，就让指针往后面移动多少位
            this.pos+=tag.length;
            //pos增加了，同时他的尾巴也要做出相应的改变了
            this.tail=this.templateStr.substring(this.pos);
        }
    }

    //让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
    scanUtil(stopTag){
        //记录执行扫描方法的时候的pos的值，方便返回字符串
        const pos_start=this.pos;
        //当尾巴的开头不是stopTag的时候，说明还没有扫描到stopTag
        //整个语句里面都没有使用模板字符串，会让他一直找下去，造成死循环
        while (this.tail.indexOf(stopTag)!==0 && this.pos<this.templateStr.length){
            this.pos++;
            this.tail=this.templateStr.substr(this.pos)
        }
        return this.templateStr.substring(pos_start,this.pos);
    }
}
