# @wxn0brp/ing

A CLI tool for managing and linking wxn0brP tools from GitHub.

## About

This is a migration from [wxn0brP/dotfiles](https://github.com/wxn0brP/dotfiles) designed for portability. Instead of installing dotfiles directly, `ing` uses `bunx` to run packages on-demand without permanent installation.

Additionally, `ing` includes Windows support (untested).

## Usage

### Install a package

```bash
bunx @wxn0brp/ing i <package-name>
```

This clones the repository from `github.com/wxn0brP/<package-name>`, installs dependencies, and links the binaries.

### Link package binaries

Links `package.bin` entries to `$HOME/.ing` (Linux/macOS only):

```bash
bunx @wxn0brp/ing link
```

### Update all packages

Update all installed packages:

```bash
bunx @wxn0brp/ing up
```

## Directory structure

- `$HOME/.ing` - Symlinks to package binaries
- `$HOME/.ingr` - Cloned repositories

## Requirements

- [Bun](https://bun.sh) runtime
- Git
- Linux/macOS (fully tested)

## License

MIT
