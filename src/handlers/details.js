/**
 * Details is essentially a list of Cards
 *
 * But composed in a way to form a details page about a single object
 */

export default async (req, res) => {

  const payload = req.body.payload
  const args = payload.args

  const itemId = args.id

  const result = [
    <Card>
      <CardHeader
        title={`Item ${itemId}`} />
    </Card>,
    <Card
      linkTo="https://docs.archy.ai">
      <Media
        iconName="external-link"
        title="External Link" />
    </Card>,
    <Card>
      <CardBodyText text="Description or text about item" />
    </Card>
  ]

  res.json({
    view: { type: 'CARDS' },
    result: result,
  })
}
