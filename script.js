document.getElementById('submit').addEventListener('click',function(){
    document.getElementById('login-area').style.display="none";
    document.getElementById("transaction-area").style.display="block";
})
//   Deposit button event handler

const Depositbtn = document.getElementById('addDeposit');
      Depositbtn.addEventListener('click',function(){
          const DepositAmount = document.getElementById('depositAmount').value;
          const DepositNumber =  parseFloat(DepositAmount);
        //   const CurrentDeposit = document.getElementById('currentDeposit').innerText;
        //   const CurrentDepositNumber = parseFloat(CurrentDeposit);
        //   const TotalDeposit = DepositNumber + CurrentDepositNumber;
        //   document.getElementById('currentDeposit').innerText = TotalDeposit;
        updateSpanText('currentDeposit',DepositNumber);
        updateSpanText('CurrentBallance',DepositNumber);
      
        
          document.getElementById('depositAmount').value = "";
      })
      //   withdraw button event handler
      
    const WithdrawBtn = document.getElementById('addwithdraw');
    WithdrawBtn.addEventListener('click',function(){
      const withdrawAmount =document.getElementById('withdrawAmount').value;
      const withdrawNumber = parseFloat(withdrawAmount);
      const Currentwithdraw = document.getElementById('CurrentWithdraw').innerText;
      const CurrentwithdrawNumber = parseFloat(Currentwithdraw);
      const TotalWithdraw = withdrawNumber + CurrentwithdrawNumber;
      document.getElementById('CurrentWithdraw').innerText = TotalWithdraw;
      document.getElementById('withdrawAmount').value = "";
      updateSpanText('CurrentBallance', -1*withdrawNumber );
})

function updateSpanText(id,DepositNumber){
  const Current =document.getElementById(id).innerText;
  const CurrentNumber = parseFloat(Current);
  const TotalAmount = DepositNumber + CurrentNumber;
  document.getElementById(id).innerText = TotalAmount;
}



      
      

    