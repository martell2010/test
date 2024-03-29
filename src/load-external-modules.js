let EXTERNAL_MODULES = [];

if(import.meta.env.VITE_WITH_SUBMODULES == 'true'){
  try {
    const EXTERNAL = await import('../feature/modules/index');
    EXTERNAL_MODULES = Object.values(EXTERNAL.default) ?? []
  } catch (error) {
    console.log('Load external modules ERROR:', { error });
  }
}

console.log({ EXTERNAL_MODULES });
export { EXTERNAL_MODULES };