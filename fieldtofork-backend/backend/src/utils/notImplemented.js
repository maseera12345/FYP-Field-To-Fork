// Placeholder handler for modules that are not built yet.
export const notImplemented = (moduleName) => (req, res) =>
  res.status(501).json({ success: false, message: `The "${moduleName}" module is not implemented yet.` });
