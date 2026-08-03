const createNextIntlPlugin = require('next-intl/plugin');
const { execFileSync } = require('node:child_process');

const withNextIntl = createNextIntlPlugin();

function getDeploymentId() {
  if (process.env.NEXT_DEPLOYMENT_ID) {
    return process.env.NEXT_DEPLOYMENT_ID;
  }

  if (process.env.NODE_ENV !== 'production') return undefined;

  try {
    return execFileSync('git', ['rev-parse', '--short=12', 'HEAD'], {
      cwd: __dirname,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim();
  } catch {
    return undefined;
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  deploymentId: getDeploymentId()
};

module.exports = withNextIntl(nextConfig);
