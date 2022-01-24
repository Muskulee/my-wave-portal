// const main = async () => {


    
//     const [owner, randomPerson] = await hre.ethers.getSigners();
//     const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
//     const waveContract = await waveContractFactory.deploy();
//     await waveContract.deployed();
//     console.log("Contract deployed to:", waveContract.address);
//     console.log("Contract deployed by:", owner.address);

//     let waveCount;
//      waveCount = await waveContract.getTotalWaves();

//      let waveStorage;

//         waveStorage = await waveContract.getTotalWavers()


//      let waveTxn = await waveContract.wave();

//         await waveTxn.wait();


//      let storeNew = await  waveContract.storeNewWaver(owner.address)

//         await storeNew.wait();



//      waveCount = await waveContract.getTotalWaves();

//      waveStorage = await waveContract.getTotalWavers()

//      waveTxn = await waveContract.connect(randomPerson).wave();
//         await waveTxn.wait();

//     storeNew = await waveContract.connect(randomPerson).storeNewWaver(randomPerson.address);
//         await storeNew.wait();

     
     

//      waveCount = await waveContract.getTotalWaves();
//      waveStorage = await waveContract.getTotalWavers();

//      console.log(`waveStorage`, waveStorage)
//      console.log(`randomPerson`, randomPerson.address)



// }


// const runMain = async () => {
//     try{
//         await main();
//         process.exit(0);

//     }

//     catch (error) {
//         console.log(error.message);
//         process.exit(1);
//     }
// }



// runMain();




// const main = async () => {
//     const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
//     const waveContract = await waveContractFactory.deploy();
//     await waveContract.deployed();
//     console.log("Contract addy:", waveContract.address);
  
//     let waveCount;
//     waveCount = await waveContract.getTotalWaves();
//     console.log(waveCount.toNumber());
  
//     /**
//      * Let's send a few waves!
//      */
//     let waveTxn = await waveContract.wave("A message!");
//     await waveTxn.wait(); // Wait for the transaction to be mined
  
//     const [_, randomPerson] = await hre.ethers.getSigners();
//     waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
//     await waveTxn.wait(); // Wait for the transaction to be mined
  
//     let allWaves = await waveContract.getAllWaves();
//     console.log(allWaves);
//   };
  
//   const runMain = async () => {
//     try {
//       await main();
//       process.exit(0);
//     } catch (error) {
//       console.log(error);
//       process.exit(1);
//     }
//   };
  
//   runMain();


const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await waveContract.deployed();
  console.log("Contract addy:", waveContract.address);

  /*
   * Get Contract balance
   */
  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  );
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  /*
   * Send Wave
   */
  let waveTxn = await waveContract.wave("A message!");
  await waveTxn.wait();

  /*
   * Get Contract balance to see what happened!
   */
  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();