# Home

## Config / Run

[adapted from this guide](https://github.com/meteor/meteor/wiki/Meteor-Cordova-Phonegap-integration)
[and this one!]((https://github.com/meteor/meteor/wiki/How-to-submit-your-Android-app-to-Play-Store))

1. Clone repo
2. deploy with `meteor deploy hackstagram.meteor.com`
3. build with `meteor build ../hackstagram_compiled --server=hackstagram.meteor.com`
4. extract apk with `cd <where_you_have_it>` then `tar -zxvf hackstagram.tar.gz`
5. sign it [using these instructions]
   * keytool -genkey -alias hackstagram -keyalg RSA -keysize 2048 -validity 10000
   * password: wifi (but subued, you know: bangless)
4. load it to your phone [using these instructions](http://www.ubergizmo.com/how-to/how-to-install-apk-files-sideloading-on-android/)
* might require installing [Android File Transfer for Mac](https://www.android.com/filetransfer/#tips)

## To Do

* take a picture "in the wild!"
* learn about re-deploying by:
  * change text, redeploy -- does it push?
  *
* brainstorm cool features
* learn how to deploy to store & update
* read docs

## Wish List

* photo vertical
  * captioning
  * logins/account
  * vote up/down
  * view nearby
  * deploy

* intersection sharing

* polls to nearby peeps

* where are my friends
* collapse multiple photos into cluster

* notifications

*
