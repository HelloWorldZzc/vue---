//函数的功能是折叠tokens，将#与/之间的数据折叠起来
export default function nestTokens(tokens){
    //最后的结果数组
    let nestedTokens=[];
    //一个栈结构，存放小token，栈顶（靠近端口的，最新进入的）的tokens数组中当前操作的这个tokens小数组
    let section=[];
    // 收集器，天生指向nestedTokens结果数组，引用类型值，所以指向的是同一个数组
    // 收集器的指向会变化，当遇见#的时候，收集器会指向这个token的下标为2的新数组
    let collector = nestedTokens;
    for (let i=0;i<tokens.length;i++){
        //记录一下当时的这个token值
        let token=tokens[i];
        switch (token[0]){
            case "#":
                //看到#，需要在收集器里面放入token
                collector.push(token);
                //入栈
                section.push(token);
                //此时的收集器收集了东西，需要进行更换了
                collector=token[2]=[]
                break;
            case '/':
                //此时为/，代表已经出栈了
                section.pop();
                //出栈了此时要根据栈的长度来更改收集器
                collector=section.length>0?section[section.length - 1][2] : nestedTokens;
                break;
            default:
                //正常的文字内容，需要输入进去
                collector.push(token)
                break;
        }
    }
    return nestedTokens;
}
