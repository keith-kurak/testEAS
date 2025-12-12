module.exports = function (api) {
  api.cache(true);

  if (
    process.env.NX_TASK_TARGET_TARGET === 'build' ||
    process.env.NX_TASK_TARGET_TARGET?.includes('storybook')
  ) {
    return {
      presets: [
        [
          'babel-preset-expo',
          {
            runtime: 'automatic',
          },
        ],
      ],
    };
  }

  return {
    presets: [['module:babel-preset-expo']],
  };
};
