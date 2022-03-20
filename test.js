function solution(inputString) {
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] == ")") {
            for (let j = i; j >= 0; j--) {
                if (inputString[j] == "(") {
                    console.log("i :", i)
                    console.log("j :", j)
                    let tmp1 = inputString.substring(j, i+1)
                    let tmp3 = tmp1.split("").reverse().join("").replace("(", "").replace(")", "")
                    console.log("tmp1: ", tmp1)
                    console.log("tmp3: ", tmp3)
                    console.log("before inputstring",inputString)
                    inputString = inputString.replace(tmp1, tmp3);
                    console.log("inputstring: ", inputString)
                    i-=2;
                    break;
                }
            }
        }

    }
    return inputString;
}

solution("foo(bar(baz))blim")
