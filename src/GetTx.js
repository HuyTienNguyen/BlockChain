import Web3 from "web3";

export default function GetTx() {
  function getTransaction() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://eth.llamarpc.com")
    );
    console.log("hihi");

    const txHash = "0x4844725ade80aaf3cbcce76e352cb9c2e6cc8123ea7bee8d7d435f8273e489dc";

    // Gọi phương thức getTransaction để lấy thông tin về giao dịch
    web3.eth
      .getTransaction(txHash)
      .then(function (transaction) {
        console.log("Thông tin về giao dịch", txHash, "là:", transaction);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <button onClick={getTransaction}>Get Tracsaction</button>
    </div>
  );
}
