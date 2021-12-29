const main = async () => {


    
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    let waveCount;
     waveCount = await waveContract.getTotalWaves();

     let waveStorage;

        waveStorage = await waveContract.getTotalWavers()


     let waveTxn = await waveContract.wave();

        await waveTxn.wait();


     let storeNew = await  waveContract.storeNewWaver(owner.address)

        await storeNew.wait();



     waveCount = await waveContract.getTotalWaves();

     waveStorage = await waveContract.getTotalWavers()

     waveTxn = await waveContract.connect(randomPerson).wave();
        await waveTxn.wait();

    storeNew = await waveContract.connect(randomPerson).storeNewWaver(randomPerson.address);
        await storeNew.wait();

     
     

     waveCount = await waveContract.getTotalWaves();
     waveStorage = await waveContract.getTotalWavers();

     console.log(`waveStorage`, waveStorage)
     console.log(`randomPerson`, randomPerson.address)



}


const runMain = async () => {
    try{
        await main();
        process.exit(0);

    }

    catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}



runMain();