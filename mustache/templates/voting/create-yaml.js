const Contracts = require('./contracts');
const { createStartBlock } = require('../common');

module.exports = {
  createYaml: (env, universalTestBlock) => {
    const createVotingBlock = ({ startBlocks, name, address }) => ({
      name,
      mappingFile: '../src/governor-mapping.ts',
      startBlock: createStartBlock(startBlocks, env, universalTestBlock),
      address,
      abi: 'Governor',
      entities: ['ProposalCreated', 'VoteCast'],
      abis: [
        {
          name: 'Governor',
          path: '../abis/Governor.json',
        },
      ],
      events: [
        {
          event:
            'ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)',
          handler: 'handleProposalCreated',
        },
        {
          event: 'VoteCast(address,uint256,bool,uint256)',
          handler: 'handleVoteCast',
        },
      ],
    });

    return Contracts.map(({ prod, test, type, name, address }) => {
      const startBlocks = { prod, test};
      if (type === 'voting') {
        return createVotingBlock({ startBlocks, name, address });
      } else {
        throw new Error('invalid type in voting');
      }
    });
  },
};
