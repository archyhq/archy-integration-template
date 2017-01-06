export default async (req, res) => {

  // // if you use API (see server.js for details)
  // const { data } = await req.api.get('/someendpoint')

  // links - are links :) to other archy commands
  // think about as about menu items,
  // tell a user what navigation this Integration has
  const links = [{
    address: '/list'
  }, {
    address: '/details'
  }]

  const card1 = (<Card>
    <CardHeader
      title="Go to List"
      subtitle="This will execute new command /list"
      />
    <CardBodyText
      text={`
        On touch user will be redirected to a new screen
        with the results from /list command
      `} />
  </Card>)

  const card2 = (<Card>
    <CardHeader
      title="Counters"
      subtitle="Build dashboard from different elements"
      />
    <CardCounter
      counter="100" />
  </Card>)

  res.json({
      view: { type: 'CARDS' },
      links,
      result: [
        card1,
        card2,
      ],
    }
  )
}
