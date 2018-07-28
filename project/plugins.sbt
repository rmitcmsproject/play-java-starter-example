// The Play plugin
addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.6.17")

// Play enhancer - this automatically generates getters/setters for public fields
// and rewrites accessors of these fields to use the getters/setters. Remove this
// plugin if you prefer not to have this feature, or disable on a per project
// basis using disablePlugins(PlayEnhancer) in your build.sbt
addSbtPlugin("com.typesafe.sbt" % "sbt-play-enhancer" % "1.2.2")
addSbtPlugin("com.heroku" % "sbt-heroku" % "2.1.0")
addSbtPlugin("com.typesafe.sbteclipse" % "sbteclipse-plugin" % "5.2.2")

