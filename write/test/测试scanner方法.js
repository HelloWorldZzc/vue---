/*
*
*
    console.log("render函数被调用了，要命令Scanner工作")
    let scanner =new Scanner(templateStr);
   //读取的过程是先查找{{，再跳过，在查找}},再跳过
    while (scanner.pos!==templateStr.length){
        let word1=scanner.scanUtil("{{")
        console.log(word1)
        scanner.scan("{{")
        let word2=scanner.scanUtil("}}")
        console.log(word2)
        scanner.scan("}}")
    }
* */
