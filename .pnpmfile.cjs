// .pnpmfile.cjs
module.exports = {
    hooks: {
      readPackage(packageJson, context) {
        // Specify pnpm version here
        packageJson.engines = {
          pnpm: '7.x'
        };
        return packageJson;
      }
    }
  };
  