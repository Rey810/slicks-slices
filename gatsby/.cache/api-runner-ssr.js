var plugins = [{
      plugin: require('/mnt/c/Users/Rey van den Berg/Dev/Courses/Wes Bos Gatsby/Slices/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/mnt/c/Users/Rey van den Berg/Dev/Courses/Wes Bos Gatsby/Slices/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"y4nv0j7i","dataset":"production","watchMode":true,"token":"skDwHPwFmO8z8TcK13zHQqr7WWbKoQE8dW9E4uR9HFXlgMy50RGaS55c6vzUvxVm2Zrr6Qff50cV8pr4QEfk3aHP6Suri7yZhudhmp0yG38fSadcvXuzpHdRIiFqHdIba7dJ33oWmunKKn4liMDvaOxPzoVuXYQSzODeN3r6fmEGZr0pLREe"},
    },{
      plugin: require('/mnt/c/Users/Rey van den Berg/Dev/Courses/Wes Bos Gatsby/Slices/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
