module.exports = {
  yaml: [
    {
      specVersion: '0.0.2',
      repository: 'https://github.com/symblox/symblox-subgraph',
      dataSourceKind: 'ethereum/contract',
      network: 'velas',
      mapping: {
        kind: 'ethereum/events',
        version: '0.0.4',
        language: 'wasm/assemblyscript',
      },
    },
  ],
};
