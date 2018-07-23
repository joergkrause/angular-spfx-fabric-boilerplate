## Angular Demo Webpart

Pure client code for SharePoint 2016 On Premise with SpFx installed and Office 365 SharePoint Online. Uses current Angular (currently 6.0.3).

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

* gulp clean - TODO
* gulp test - TODO
* gulp serve - TODO
* gulp bundle - TODO
* gulp package-solution - TODO
