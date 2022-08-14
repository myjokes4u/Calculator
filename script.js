let isOperatorClicked=false;
let oldValue=0;
let Result=0;

function ac() {
    document.getElementById("result").innerHTML=0
    document.getElementById("operation").innerHTML=' '
    oldValue=0;
    isOperatorClicked=false;
}
function back(){
    var value=document.getElementById("result").innerHTML;
    if (value=='0.') {
        document.getElementById("result").innerHTML=0
    } else if (value=='0') {
        document.getElementById("result").innerHTML=0
        document.getElementById("operation").innerHTML=" "
    } else if (isOperatorClicked) {
        document.getElementById("result").innerHTML=0
    } else if (value.length>1) {
        document.getElementById("result").innerHTML=value.substring(0,value.length-1)
    } else {
        document.getElementById("result").innerHTML=0
        isOperatorClicked=false
    }
}
function btn(val) {
    var value=document.getElementById("result").innerHTML
    if (value=='0') {
        display(val)
    } else if (isOperatorClicked) {
        display(val)
        isOperatorClicked=false;
    }else if (document.getElementById("operation").innerHTML=='=') {
        document.getElementById("operation").innerHTML=' '
        display(val)
    } else if (value=='E') {
        display('E')
    }else {
        display(value+val)
    }
}
function dotbtn() {
    let dotbtnClicked = document.getElementById("result").innerHTML.includes('.')
    if (document.getElementById("result").innerHTML=="E") {
        document.getElementById("result").innerHTML='E'
    } else if (isOperatorClicked) {
        document.getElementById("result").innerHTML="0."
        isOperatorClicked=false
    } else if (dotbtnClicked) {
        document.getElementById("result").innerHTML=document.getElementById("result").innerHTML
    } else {
        document.getElementById("result").innerHTML+='.'
    }
}
function pmbtn() {
    if (document.getElementById("result").innerHTML=="E") {
        document.getElementById("result").innerHTML="E"
    } else {
        var ops = parseFloat(document.getElementById("result").innerHTML)
        ops = ops*(-1)
        document.getElementById("result").innerHTML=ops
    }
}
function display(val) {
    var value = document.getElementById("result").innerHTML
    if (value.length<16) {
        document.getElementById("result").innerHTML=val
    } else {
        document.getElementById("result").innerHTML='E'
    }
}
function oprbtn(val) {
    let newValue = document.getElementById("result").innerHTML
    let opr = document.getElementById("operation").innerHTML
    if (newValue=='0') {
        document.getElementById("result").innerHTML='0'
    } else if (newValue=="E") {
        document.getElementById("result").innerHTML="E"
    } else if (isOperatorClicked==false) {
        isOperatorClicked=true
        if (val=="%") {
            isOperatorClicked=true
            if (opr=='+') {
                var value = oldValue + "+" + newValue + '*' + oldValue + '/' + 100
                Result= eval(value)
            } else if (opr=='-') {
                var value = oldValue + "-" + newValue + '*' + oldValue + '/' + 100
                Result= eval(value)
            } else if (opr=='x') {
                var value = oldValue + "*" + newValue + '/' + 100
                Result= eval(value)
            } else if (opr=='÷') {
                var value = oldValue + "/" + newValue + '*' + 100
                Result= eval(value)
            } else {
                if (oldValue==0) {
                    var value= 1 + '*' + newValue + '/' + 100
                    Result = eval(value)
                } else {
                    var value = oldValue + "*" + newValue + '/' + 100
                    Result = eval(value)
                }
            }
            display(Result)
            if (val=='/') {
                document.getElementById("operation").innerHTML='÷'
            } else if (val=='*'){
                document.getElementById("operation").innerHTML='x'
            } else if (val=='=') {
                document.getElementById("operation").innerHTML='='
                isOperatorClicked=false
            } else {
                document.getElementById("operation").innerHTML=val
            }
        } else {
            if (opr=='+') {
                var value = oldValue + '+' + newValue
                Result = eval(value)
                display(Result)
                if (val=='/') {
                    document.getElementById("operation").innerHTML='÷'
                } else if (val=='*'){
                    document.getElementById("operation").innerHTML='x'
                } else if (val=='=') {
                    document.getElementById("operation").innerHTML='='
                    isOperatorClicked=false
                } else {
                    document.getElementById("operation").innerHTML=val
                }
            } else if (opr=='-') {
                var value = oldValue + '-' + newValue
                Result = eval(value)
                display(Result)
                if (val=='/') {
                    document.getElementById("operation").innerHTML='÷'
                } else if (val=='*'){
                    document.getElementById("operation").innerHTML='x'
                } else if (val=='=') {
                    document.getElementById("operation").innerHTML='='
                    isOperatorClicked=false
                } else {
                    document.getElementById("operation").innerHTML=val
                }
            } else if (opr=='x') {
                var value = oldValue + '*' + newValue
                Result = eval(value)
                display(Result)
                if (val=='/') {
                    document.getElementById("operation").innerHTML='÷'
                } else if (val=='*'){
                    document.getElementById("operation").innerHTML='x'
                } else if (val=='=') {
                    document.getElementById("operation").innerHTML='='
                    isOperatorClicked=false
                } else {
                    document.getElementById("operation").innerHTML=val
                }
            } else if (opr=='÷') {
                var value = oldValue + '/' + newValue
                Result = eval(value)
                display(Result)
                if (val=='/') {
                    document.getElementById("operation").innerHTML='÷'
                } else if (val=='*'){
                    document.getElementById("operation").innerHTML='x'
                } else if (val=='=') {
                    document.getElementById("operation").innerHTML='='
                    isOperatorClicked=false
                } else {
                    document.getElementById("operation").innerHTML=val
                }
            }/* else if (opr=='%') {
                var value = oldValue + '*' + newValue + '/' + 100
                Result = eval(value)
                display(Result)
                if (val=='/') {
                    document.getElementById("operation").innerHTML='÷'
                } else if (val=='*'){
                    document.getElementById("operation").innerHTML='x'
                } else if (val=='=') {
                    document.getElementById("operation").innerHTML='='
                    isOperatorClicked=false
                } else {
                    document.getElementById("operation").innerHTML=val
                }
            }*/ else {
                if (val=='/') {
                    document.getElementById('operation').innerHTML='÷'
                }else if (val=='*') {
                    document.getElementById('operation').innerHTML='x'
                }else if (val=='=') {
                    document.getElementById('operation').innerHTML=''
                    isOperatorClicked=false
                }else {
                    document.getElementById('operation').innerHTML=val
                }
            }
        }
        oldValue = document.getElementById('result').innerHTML
    } else {
        if (val=='/') {
            document.getElementById('operation').innerHTML='÷'
        }else if (val=='*') {
            document.getElementById('operation').innerHTML='x'
        }else if (val=='=') {
            document.getElementById('operation').innerHTML=''
            isOperatorClicked=false
        }else {
            document.getElementById('operation').innerHTML=val
        }
    }
}