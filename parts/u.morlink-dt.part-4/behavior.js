// My Part 4 - a custom part. Its geometry (links/joints) lives in manifest.json; edit it in the
// app (select a node → Inspector) or here. This script is the behavior, run every simulation tick.
definePart({
  params: {},
  step(ctx) {
    // Command joints with ctx.setJoint('name', value); read your params via ctx.params.*
  },
})
