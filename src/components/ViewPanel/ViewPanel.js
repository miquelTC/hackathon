import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Btn, Column, Heading, Input, Row } from "../../common";

const NumberBlock = styled.div`
  margin: 20px auto;
  padding: 20px;
  width: 400px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-template-rows: 20px 50px 1fr 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  font-size: 30px;
  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
`;

export const ViewPanel = (props) => {
  const [distributionNumber, setDistributionNumber] = useState();
  // Get Distribution
  const [getDistribution, setGetDistribution] = useState({
    token: "",
    user: ""
  });
  
  const distributeHandler = async() => {
    const token = getDistribution.token;
    const user = getDistribution.user;
    const distribution = await props.dao.methods.finalDistribution(token, user).call();
    console.log('distribution', distribution);
    setDistributionNumber(distribution);
  }
  return (
    <Column w="100%">
      <Heading fw={500} upper fz={20} m="0 auto">
        View Panel
      </Heading>
			<Row align="center" m="0 0 10px">
        <Input placeholder="Token Address" m="0 5px" name="token" value={getDistribution.token} onChange = {e => setGetDistribution({...getDistribution, token: e.target.value})} />
        <Input placeholder="User Address" m="0 5px" name="user" value={getDistribution.user} onChange = {e => setGetDistribution({...getDistribution, user: e.target.value})} />
        <Btn w="200px" m="0 0 0 20px" onClick={distributeHandler}>
          Distributed amount
        </Btn>        
      </Row>
      <NumberBlock>{distributionNumber}</NumberBlock>
    </Column>
  );
};
