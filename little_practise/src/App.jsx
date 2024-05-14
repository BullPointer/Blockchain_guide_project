import { useState } from "react";

const App = () => {
  const [addr, setAddr] = useState("");
  const handleConnect = async () => {
    if (window.ethereum) {
      try {
        const address = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddr(address[0]);
      } catch (error) {
        console.log("New Error is: ", error);
      }
    } else {
      console.log("You have no wallet installed in your browser");
    }
    console.log(window.ethereum);
  };

  return (
    <div className="pl-10 pt-10 flex flex-col justify-start items-start gap-3">
      <h1 className="text-3xl font-bold underline">Connect your wallet</h1>
      <p>{addr}</p>
      <div
        onClick={handleConnect}
        className="w-fit cursor-pointer py-1 px-2 rounded-full text-white bg-[#6c6396]"
      >
        Connect
      </div>
    </div>
  );
};

export default App;
