const path = require("path");
const fs = require("fs");

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  return bankBalances.filter((account) => {
    return account.amount > 100000
  });
}

function datasetWithRoundedDollar() {
  return bankBalances.map((account) => {
    return {
      ...account,
      rounded: Math.round(account.amount)
    }
  });
}

function sumOfBankBalances() {
  const sum = bankBalances.reduce((accumulator = 0, account) => {
    return accumulator += Number(account.amount);
  }, 0);
  return Number(sum.toFixed(2));
}

function sumOfInterests() {
  const states = ["WI", "IL", "WY", "OH", "GA", "DE"];
  const sum = bankBalances.reduce((accumulator = 0, account) => {
    let {amount} = account;
    if(states.indexOf(account.state) === -1) {
      return accumulator;
    } else {
      amount = ((Number(account.amount) * 18.9)/100).toFixed(2);
      return accumulator += Number(amount);
    }
  }, 0);
  return Number(sum.toFixed(2));
}

function higherStateSums() {
  const stateHashTable = {};
  bankBalances.map((account) => {
    if(!stateHashTable[account.state]) {
      stateHashTable[account.state] = 0;
    }
    stateHashTable[account.state] += Number(account.amount);
  });
  const sum = Object.values(stateHashTable).reduce((accumulator, amount) => {
    if(amount > 1000000) {
      accumulator += amount;
    }
    return accumulator;
  }, 0)
  return Number(sum.toFixed(2));
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
