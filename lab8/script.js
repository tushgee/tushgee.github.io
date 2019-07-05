let accountInfoList=[];

let Account = function(){
    "use strict";
    let name;
    let balance;  

    function newAccount(nm="Tushig", bal=500000){
        name = nm;
        balance = bal;
    }

    return {
        createAccount: function (name, bal){
            newAccount(name, bal);
        },
        getName: function(){
            return name;
        }
    }
};

function accountHandler(){
    acc = Account();
    acc.createAccount("Naya",150000);
    console.log(acc.getName());
    
    //accountInfoList.push(acc.createAccount());
    //console.log(accountInfoList[0].getName());
}

window.onload = function() {
    document.getElementById('btnSubmit').onclick = accountHandler;
  }
  
