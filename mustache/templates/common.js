const createStartBlock = (blocks, env, universalTestBlock) => {
  if (env === 'test') {
    return universalTestBlock != null && universalTestBlock != 'null'
      ? universalTestBlock
      : blocks.test;
  } else if (env === 'prod') {
    return blocks.prod;
  } else {
    throw new Error('Invalid env for creating a yaml file');
  }
};

module.exports = {
  createStartBlock,
};
