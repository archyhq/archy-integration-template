# Archy Integration Template

This repository contains example of minimum archy integration written on node.js.

## Getting Started

Run `npm install` and install all production and development dependencies.
We use babeljs to transform code from ES2016 to ES5 JavaScript standard,
also to be able to write responses in JSX instead of plain JSON.

While it's not required to use either babel or JSX to write integrations for Archy,
we encourage you to give this approach a try. Please ask questions on slack http://slack.archy.ai/

### Development Server

After you install dependencies you can run development server with:

```
npm run dev
```

This will start express application on port 3000.

### Build for production

Run `npm run build` to build production-ready code.


### Add Integration to Archy

Go to Archy and add you new integration: https://archy.ai/developer/service/add

In order for your integration to work, you will need HTTP endpoint to be accessible by Archy.

We recommend these services to deploy your code:

- https://www.heroku.com
- https://now.sh
- AWS Lambda using http://apex.run/

### Developing Integration

If you want to see how your integration looks on Archy Client, you can expose
your localhost to the Internet using ngrok: https://ngrok.com/download

1. Download ngrok https://ngrok.com/download
2. Run ngrok http 3000
3. Copy provided endpoint and use it in https://archy.ai/developer/service/add
