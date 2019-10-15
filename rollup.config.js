import ts from "rollup-plugin-typescript2";

import config from "./rollup.config.base";

config.plugins.push(ts({ verbosity: 3, abortOnError: false }));

export default config;
