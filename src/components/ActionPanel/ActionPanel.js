import React from "react";
import { useState } from "react";
import { Btn, Column, Heading, Input, Row } from "../../common";

export const ActionPanel = () => {
// I made 2 states for two first inputs, you can do it for the next inputs, so as an example, the first input has 1 input and its value is listToken.address, and the same logic for the next inputs

  const [listToken, setListToken] = useState({
    address: "",
  });

  const [invest, setInvest] = useState({
    address: "",
    amount: "",
  });

  return (
    <Column w="100%" m="0 0 30px">
      <Heading fw={500} upper fz={20} m="0 auto">
        Action Panel
      </Heading>
      <Row align="center" m="0 0 10px">
        <Input placeholder="Address" m="0 5px" name="address" value={listToken.address} onChange={(e) => setListToken({ ...{ address: e.target.value } })} />
        <Btn w="200px" m="0 0 0 20px">
          List Token
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Address" m="0 5px" onChange={(e) => setInvest({ ...invest, address: e.target.value })} value={invest.address} />
        <Input placeholder="Amount" m="0 5px" onChange={(e) => setInvest({ ...invest, amount: e.target.value })} value={invest.amount} />
        <Btn w="200px" m="0 0 0 20px">
          Invest
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Token Address" m="0 5px" />
        <Input placeholder="To Add" m="0 5px" />
        <Btn w="200px" m="0 0 0 20px">
          Execute Investment
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Amount" m="0 5px" />
        <Btn w="200px" m="0 0 0 20px">
          Transfer token
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Token Add" m="0 5px" />
        <Input placeholder="Timeout" m="0 5px" />
        <Btn w="200px" m="0 0 0 20px">
          Set Tokens Distribute
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Token Address" m="0 5px" />
        <Input placeholder="Addresses" m="0 5px" />
        <Input placeholder="Amounts" m="0 5px" />
        <Btn w="200px" m="0 0 0 20px">
          Input Absolute Amounts
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Token Address" m="0 5px" />
        <Input placeholder="Addresses" m="0 5px" />
        <Input placeholder="Amounts" m="0 5px" />
        <Btn w="200px" m="0 0 0 20px">
          Input percentages
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Token Address" m="0 5px" />
        <Btn w="200px" m="0 0 0 20px">
          Distribute
        </Btn>
      </Row>

      <Row align="center" m="0 0 10px">
        <Input placeholder="Token Address" m="0 5px" />
        <Btn w="200px" m="0 0 0 20px">
          Claim
        </Btn>
      </Row>
    </Column>
  );
};
