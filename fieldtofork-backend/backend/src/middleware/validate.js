// validate({ body: schema, query: schema, params: schema }) using zod.
// On success the parsed (cleaned) values replace req.body / req.query / req.params.
export const validate = (schemas) => (req, res, next) => {
  try {
    for (const key of ["params", "query", "body"]) {
      if (schemas[key]) req[key] = schemas[key].parse(req[key]);
    }
    next();
  } catch (err) {
    next(err); // ZodError is formatted by errorHandler
  }
};
