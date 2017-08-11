## Init empty meteor projet (not necessary if use the clone project)

```
meteor create . --bare
```

## Install dependencies

```
meteor npm install
meteor remove blaze-html-templates jquery
meteor remove autopublish
meteor add babel-runtime
meteor add static-html
meteor add session
meteor add email
meteor add accounts-base
meteor add accounts-password
meteor add kadira:dochead
meteor add akryum:vue-component
meteor add akryum:vue-less
meteor add akryum:vue-router2
```

## Install custom packages (not necessary if use the clone project)

```
meteor npm install --save vue@^2.3.3
meteor npm install --save vue-meta
meteor npm install --save vue-supply
meteor npm install --save element-ui
meteor npm install --save bcrypt
meteor npm i -S babel-runtime vue-meteor-tracker
meteor npm install --save vee-validate
meteor npm install --save vue-resource
meteor update
meteor update --all-packages
meteor npm i
```

## List installed packages

```
meteor list
```

## Start

```
meteor
```

## Build for deployment

```
npm install --production
meteor build ../build --architecture os.linux.x86_64
```
## UI Elements

[Vue2 Element UI](http://element.eleme.io/#/en-US/component/installation)