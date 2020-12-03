import nodeExternals from 'webpack-node-externals';
export const target = 'node';
export const externals = [nodeExternals()];

module.exports = {
  entry: './src/index.tsx',
  externals: {
    express: "require(\"express\")"
  },
}