module.exports.default = {
  print: false,
  verbose: true,
  environments: ["node"],
  girDirectories: ["./gir-files"],
  outdir: "./node-gtk",
  modules: ["*"],
  ignore: [],
  noNamespace: false,
  buildType: "types",
  moduleType: "cjs",
}
