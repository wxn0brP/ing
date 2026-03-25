#!/usr/bin/env bun

import { ing } from "./ing";
import { ingr } from "./ingr";

const [command, arg] = process.argv.slice(2);

switch (command) {
    case "link":
        ing();
        break;
    case "install":
    case "i":
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

  install [name]      Install/Update package from github.com/wxn0brP/[name]
  Alias: i
  
  up [name]           Update packages
  Alias: u, update
`);
        process.exit(1);
}
