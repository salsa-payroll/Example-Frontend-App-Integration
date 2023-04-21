# Example-Frontend-App-Integration

This is a mock web application for a pretend organization "Union Mate". Use this application to learn how to embed our web UI integration.

https://user-images.githubusercontent.com/3171251/169429401-d265f2b3-29c2-4b92-8ad5-cafbd42029a6.mov

This project was created initially from an [Ant Design Pro](https://pro.ant.design) template.

## Initial Development Setup

### Install `node_modules`:

```bash
npm install
```

### Add hostname

In order to validate certain scenarios, using a hostname other than `localhost` is necessary. Edit your machine's local `hosts` file to include the following hostname mapped to your machine's localhost (loopback) IP address. There are [many](https://help.nexcess.net/en_US/miscellaneous/how-to-find-the-hosts-file-on-my-mac) [guides](https://linuxize.com/post/how-to-edit-your-hosts-file/#modify-hosts-file-in-macos) [available](https://www.howtogeek.com/howto/27350/beginner-geek-how-to-edit-your-hosts-file/) on the web on how to do this.

```
127.0.0.1 local.app.com
```

## Using Salsa's Embedded UI Components

The application has a "Payroll" menu item in its left navigation bar. This is where you will embed the Salsa UI Component.

## Provided Scripts

Here are some useful scripts to help you quick start and build with web project, code style check and test.

See `package.json` for more scripts.

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint errors:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More on Ant Design Pro

You can view Ant Design Pro's full documentation on [the official website](https://pro.ant.design).
