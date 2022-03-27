import React from "react";
import { useState } from "react";
import { Btn, Column, Heading, Input, Row } from "../../common";

export const ActionPanel = (props) => {
// I made 2 states for two first inputs, you can do it for the next inputs, so as an example, the first input has 1 input and its value is listToken.address, and the same logic for the next inputs

  // List Token
  const [listToken, setListToken] = useState({
    address: "",
  });
  
  const listTokenHandler = async() => {
    props.dao.methods.listToken(listToken.address).send({ from: props.account })
    .on('transactionHash', (hash) => {
      console.log(hash);
    });
  }

  // Invest
  const [invest, setInvest] = useState({
    address: "",
    amount: "",
  });

  const investHandler = async() => {
    props.dao.methods.invest(invest.address).send({ from: props.account, value: invest.amount })
    .on('transactionHash', (hash) => {
      console.log(hash);
    });
  }

  // Execute Investment
  const [executeInvestment, setExecuteInvestment] = useState({
    token: "",
    recipient: "",
  });

  const executeInvestmentHandler = async() => {
    props.dao.methods.executeInvestment(executeInvestment.token, executeInvestment.recipient).send({ from: props.account })
    .on('transactionHash', (hash) => {
      console.log(hash);
    });
  }


  // Transfer token to DAO
  const [transfer, setTransfer] = useState({
    amount: "",
  });
  const transferHandler = async() => {
    props.token.methods.transfer("0x5d2ae5458137578a83e33723e2B1ae0A223B1e15", transfer.amount).send({ from: props.account })
    .on('transactionHash', (hash) => {
      console.log(hash);
    });    
  }

  // Enable the token distribution
  const [setDistribution, setSetDistribution] = useState({
    address: "",
    amount: ""
  });
  const setDistributionHandler = async() => {
    props.dao.methods.setTokensToDistribute(setDistribution.address, setDistribution.amount).send({ from: props.account })
    .on('transactionHash', (hash) => {
      console.log(hash);
    });    
  }

  // Input with absolute values
  const [inputAbs, setInputAbs] = useState({
    address: "",
    addresses: "",
    amounts: ""
  });
  const inputAbsHandler = async() => {
    props.dao.methods.inputAbs(inputAbs.address, inputAbs.addresses.split(','), inputAbs.amounts.split(',')).send({ from: props.account })
    .on('transactionHash', (hash) => {
      console.log(hash);
    });
  }

  // Input with percentages
  const [inputRel, setInputRel] = useState({
    address: "",
    addresses: "",
    amounts: ""
  });
  const inputRelHandler = async() => {
    props.dao.methods.inputRel(inputRel.address, inputRel.addresses.split(','), inputRel.amounts.split(',')).send({ from: props.account })
    .on('transactionHash', (hash) => {
      console.log(hash);
    });
  }

  // Distribute
  const [distribute, setDistribute] = useState({
    address: "",
  });
  
  const distributeHandler = async() => {
    props.dao.methods.distribute(distribute.address).send({ from: props.account })
    .on('transactionHash', (hash) => {
      console.log(hash);
    });
  }

  // Claim
  const [claim, setClaim] = useState({
    address: "",
  });
  
  const claimHandler = async() => {
    props.dao.methods.claim(claim.address).send({ from: props.account })
    .on('transactionHash', (hash) => {
      console.log(hash);
    });
  }

  return (
    <Column w="100%" m="0 0 30px">
      <Heading fw={500} upper fz={20} m="0 auto">
        Action Panel
      </Heading>
      <Row align="center" m="0 0 10px">
        <Input placeholder="Address" m="0 5px" name="address" value={listToken.address} onChange={(e) => setListToken({ ...{ address: e.target.value } })} />
        <Btn w="200px" m="0 0 0 20px" onClick={listTokenHandler}>
          List Token
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Address" m="0 5px" onChange={(e) => setInvest({ ...invest, address: e.target.value })} value={invest.address} />
        <Input placeholder="Amount" m="0 5px" onChange={(e) => setInvest({ ...invest, amount: e.target.value })} value={invest.amount} />
        <Btn w="200px" m="0 0 0 20px" onClick={investHandler} >
          Invest
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Token Address" m="0 5px" onChange={(e) => setExecuteInvestment({ ...executeInvestment, token: e.target.value })} value={executeInvestment.token} />
        <Input placeholder="Recipient Address" m="0 5px" onChange={(e) => setExecuteInvestment({ ...executeInvestment, recipient: e.target.value })} value={executeInvestment.recipient} />
        <Btn w="200px" m="0 0 0 20px" onClick={executeInvestmentHandler} >
          Execute Investment
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Amount" m="0 5px" onChange={(e) => setTransfer({ ...transfer, amount: e.target.value })} value={transfer.amount} />
        <Btn w="200px" m="0 0 0 20px" onClick={transferHandler}>
          Transfer token
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Token address" m="0 5px" onChange={(e) => setSetDistribution({ ...setDistribution, address: e.target.value })} value={setDistribution.address} />
        <Input placeholder="Amount" m="0 5px" onChange={(e) => setSetDistribution({ ...setDistribution, amount: e.target.value })} value={setDistribution.amount} />
        <Btn w="200px" m="0 0 0 20px" onClick={setDistributionHandler}>
          Set Tokens Distribute
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Token Address" m="0 5px" onChange={(e) => setInputAbs({ ...inputAbs, address: e.target.value })} value={inputAbs.address} />
        <Input placeholder="Addresses" m="0 5px" onChange={(e) => setInputAbs({ ...inputAbs, addresses: e.target.value })} value={inputAbs.addresses} />
        <Input placeholder="Amounts" m="0 5px" onChange={(e) => setInputAbs({ ...inputAbs, amounts: e.target.value })} value={inputAbs.amounts} />
        <Btn w="200px" m="0 0 0 20px" onClick={inputAbsHandler} >
          Input Absolute Amounts
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Token Address" m="0 5px" onChange={(e) => setInputRel({ ...inputRel, address: e.target.value })} value={inputRel.address} />
        <Input placeholder="Addresses" m="0 5px" onChange={(e) => setInputRel({ ...inputRel, addresses: e.target.value })} value={inputRel.addresses} />
        <Input placeholder="Amounts" m="0 5px" onChange={(e) => setInputRel({ ...inputRel, amounts: e.target.value })} value={inputRel.amounts} />
        <Btn w="200px" m="0 0 0 20px" onClick={inputRelHandler}>
          Input percentages
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Token Address" m="0 5px" onChange={(e) => setDistribute({ ...distribute, address: e.target.value })} value={distribute.address} />
        <Btn w="200px" m="0 0 0 20px" onClick={distributeHandler}>
          Distribute
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Token Address" m="0 5px" onChange={(e) => setClaim({ ...claim, address: e.target.value })} value={claim.address} />
        <Btn w="200px" m="0 0 0 20px" onClick={claimHandler}>
          Claim
        </Btn>
      </Row>
    </Column>
  );
};
