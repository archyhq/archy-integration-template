
/**
 * Every handler is using async await generators
 * They will throw an exception
 * This function wraps every handler into try-catch statement
 * and return to Archy nice 500 error page
 */
export const tryCatch = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (e) {
      // output an error to console
      console.log(e)

      res.json({
        view: { type: 'CARDS' },
        result: [
          <Card>
            <CardHeader
              title={"Error Processing Your Request"}
              subtitle="Please try again later" />
          </Card>
        ],
      })
    }
  }
}
