# Sanity Blogging Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- Check out the example frontend: [React/Next.js](https://github.com/sanity-io/tutorial-sanity-blog-react-next)
- [Read the blog post about this template](https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

---

# Deploying

When you want to deploy sanity studio itself

```bash
sanity deploy
```

When you want to deploy the GraphQL api

```bash
sanity graphql deploy --dataset production
sanity graphql deploy --dataset staging
```

# Good to know

Call to action, and Articles, share the same datatypes within themselves.
Same goes for all three types of categories!

### Courtesy of Patrick Vuscan :)

Sanity's build files are in `/dist`

## Moving Data

### For getting staging data to production

Inside of the root folder, from CLI:

```bash
sanity dataset export staging stagingData.tar.gz
sanity dataset import --replace stagingData.tar.gz production
```

### For getting production data to staging

Inside of the root folder, from CLI:

```bash
sanity dataset export production productionData.tar.gz
sanity dataset import --replace productionData.tar.gz staging
```
