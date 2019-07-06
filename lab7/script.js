"use strict";
let accountInfoList=[];

function accountFactory(){

    function Account(nm, bal){
        let name = nm;
        let balance = parseFloat(bal);
        return { 

            getName: function() {
                return name;
            }, 
            getBalance: function() {
                return balance;
            }  
        };
    };
    
    return {
        createAccount(){
            return new Account(document.getElementById('idAccount').value, document.getElementById('idDeposit').value);
        }
    }

}


function accountHandler() {
    let accountListTxt="";
    accountInfoList.push(accountFactory().createAccount());
    
    for (let a of accountInfoList) {
        accountListTxt += "Account name: " + a.getName()+ " " + "Balance: " + a.getBalance()+"\n";
    }

    document.getElementById('idTextArea').value = accountListTxt;
}

window.onload = function() {
    document.getElementById('btnSubmit').onclick = accountHandler;
  }
  
