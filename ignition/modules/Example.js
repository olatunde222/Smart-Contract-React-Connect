const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ExampleModule", (m) => {
  const exampleContract = m.contract("Example", [], {});

  return { exampleContract };
});
