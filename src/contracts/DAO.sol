// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract DAO is Ownable {
  using SafeMath for uint;

  // Variables
  mapping (address => bool) public tokenIsListed;
  mapping (address => uint) public tokensToDistribute;
  mapping (address => uint) public totalInvested;  
  mapping (address => mapping(address => uint)) public absDistribution;
  mapping (address => mapping(address => uint)) public relDistribution;
  mapping (address => mapping(address => uint)) public finalDistribution;
  mapping (address => bool) public isDistributed;

  mapping (address => uint) public tokensToSubtract;

  mapping(address => address[]) public listAbsDistribution;
  mapping(address => address[]) public listRelDistribution;  

  /**
   * @dev admin will execute this function once the DAO receive the tokens
   * @param token: address of the token received by the DAO
   */
  function listToken(address token) public onlyOwner {
    require(token != address(0), "cannot list null address");
    require(tokenIsListed[token] == false, "the token must be unlisted");
    tokenIsListed[token] = true;
  }

  /**
   * @dev invest in one of the listed tokens in the DAO
   * @param token: address of the token to invest
   */
  function invest(address token) payable public {
    require(token != address(0), "cannot invest in null address");
    require(tokenIsListed[token] == true, "token must be listed");
    require(isDistributed[token] == false, "token must be not distributed");
    require(msg.value > 0, "cannot invest 0 amount");    
    totalInvested[token] += msg.value;
  }

  /**
   * @dev admin to send all the funds for specific project to the project address
   * @param token: address of the token to execute investment
   * @param to: address of the project admin which will receive DAO's funds
   */
  function executeInvestment(address token, address to) public payable onlyOwner {
    require(to != address(0), "cannot invest in null address");
    require(totalInvested[token] > 0, "cannot execute investment with 0 amount");
    uint amount = totalInvested[token];
    totalInvested[token] = 0;
    tokenIsListed[token] = false;
    payable(to).transfer(amount);
  }
  
  /**
   * @dev admin to input, for a specific token, the user addresses and the absolute amounts to distribute
   * @param token: address of the token to distribute
   * @param addresses: user addresses to assign token distribution
   * @param amounts: absolute amounts to be distributed to users
   */
  function inputAbs(address token, address[] calldata addresses, uint[] calldata amounts) public onlyOwner {
    require(addresses.length == amounts.length, "all addresses must have an amount associated");
    require(addresses.length > 0, "at least one address needed");
    for(uint i = 0; i < addresses.length; i++) {
      if(absDistribution[token][addresses[i]] == 0) {
        listAbsDistribution[token].push(addresses[i]);
      }
      absDistribution[token][addresses[i]] += amounts[i];      
    }
  }

  /**
   * @dev admin to input, for a specific token, the user addresses and the percentages to distribute
   * @param token: address of the token to distribute
   * @param addresses: user addresses to assign token distribution
   * @param amounts: percentage of tokens to be distributed to users
   */
  function inputRel(address token, address[] calldata addresses, uint[] calldata amounts) public onlyOwner {
    require(addresses.length == amounts.length, "all addresses must have an amount associated");
    require(addresses.length > 0, "at least one address needed");
    for(uint i = 0; i < addresses.length; i++) {
      if(relDistribution[token][addresses[i]] == 0) {
        listRelDistribution[token].push(addresses[i]);
      }
      uint amount = amounts[i].mul(tokensToDistribute[token].div(100));
      relDistribution[token][addresses[i]] += amount;
      tokensToSubtract[token] += amount;           
    }
  }

  /**
   * @dev admin to execute the full distribution for users to claim later
   * @param token: address of the token to distribute
   */
  function distribute(address token) public onlyOwner {
    require(isDistributed[token] == false, "already distributed");
    uint totalAmount = tokensToDistribute[token] - tokensToSubtract[token];
    address[] memory listAbs = listAbsDistribution[token];
    address[] memory listRel = listRelDistribution[token];
    // Distribute the percentages
    for(uint i = 0; i < listRel.length; i++) {
      finalDistribution[token][listRel[i]] += relDistribution[token][listRel[i]];
    }
    // Distribute the absolutes
    for(uint i = 0; i < listAbs.length; i++) {
      uint amount = absDistribution[token][listAbs[i]].mul(totalAmount).div(tokensToDistribute[token]);
      finalDistribution[token][listAbs[i]] += amount;
    }
    isDistributed[token] = true;
  }

  /**
   * @dev users to claim their distributed tokens
   * @param token: address of the token to be claimed
   */
  function claim(address token) public {
    require(isDistributed[token] == true, "not distributed yet");
    require(finalDistribution[token][msg.sender] > 0, "there is nothing to claim");
    uint amount = finalDistribution[token][msg.sender];
    finalDistribution[token][msg.sender] = 0;     
    IERC20(token).transfer(msg.sender, amount);
  }

  /**
   * @dev admin to execute the full distribution for users to claim later
   * @param token: address of the token to distribute
   * @param amount: amount of tokens to distribute
   */
  function setTokensToDistribute(address token, uint amount) public onlyOwner {
    require(IERC20(token).balanceOf(address(this)) >= amount, "not enough funds to distribute");
    tokensToDistribute[token] = amount;
  }  
}