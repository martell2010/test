let EXTERNAL_MODULES = [];

if(import.meta.env.VITE_WITH_SUBMODULES == 'true'){
  const EXTERNAL = await import('../../modules/index');
  EXTERNAL_MODULES = Object.values(EXTERNAL.default) ?? []
}

console.log({ EXTERNAL_MODULES });
export { EXTERNAL_MODULES };