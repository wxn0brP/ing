#!/usr/bin/env bun

import { ing } from "./ing";
import { ingr } from "./ingr";

const [command, arg] = process.argv.slice(2);

switch (command) {
    case "link":
    case "l":
    case "lnk":
        ing();
        break;
    case "install":
    case "i":
    case "add":
        ingr(arg);
        break;
    case "u":
    case "up":
    case "update":
        ingr();
        break;
    default:
        console.error(`
Unknown command: ${command}
Available commands:

  link                Link package.bin to $HOME/.ing (Linux/MacOS)
  Alias: l, lnk

  install [name]      Install/Update package from github.com/wxn0brP/[name]
  Alias: i, add
  
  up [name]           Update packages
  Alias: u, update
`);
        process.exit(1);
}
