/**
 * This handler demonstrates a displaying a list of cards
 */
export default async (req, res) => {

  const items = [
    {
      id: 1,
      name: 'Item 1',
      createdAt: (new Date()).toISOString(),
      text: 'Some text',
    }, {
      id: 2,
      name: 'Item 2',
      createdAt: (new Date()).toISOString(),
      text: 'Some text',
    }
  ]

  const result = items.map(item => {
    const linkToDetails = {
      address: '/details',
      args: {
        id: item.id,
        displayValue: item.name,
      },
    }
    return (
      <Card
        linkTo={linkToDetails}
        timestamp={item.createdAt}>
        <CardHeader
          title={item.name} />
        <CardBodyText text={item.text}/>
      </Card>
    )
  })

  res.json({
    view: { type: 'CARDS' },
    result: result,
  })
}
