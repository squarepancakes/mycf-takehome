# TODO Finder

TODO Finder when executed in a directory, produces a list of all files (using their absolute paths) containing the keyword "TODO" (case-sensitive) in them.

The files can be in the immediate directory, or a sub-directory (or a sub-directory of the sub-directory, ad infinitum).

## Prerequisites

Please ensure that the following are installed on the local machine prior to running.

**Git** - [Download & Install Git](https://git-scm.com/downloads)

**Node.js** - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager

## Installation

```
git clone https://github.com/squarepancakes/mycf-takehome.git
cd ./mycf-takehome
npm install
```

## Usage

By default, TODO Finder will ignore files in `node_modules` and `.git` directories.

**To run:**

```
npm run start [directory] [searchFilter]
```

Assuming that TODO is found in all files

```
/path/to/your/dir
  - somedir
    - somemodule
      - somefile.js
      - someotherfile.js
  - somedir2
    - anotherdir
      - yet_another_dir
        - index.js
      - index.js
    - index.js
  - somedir3
    - another_file.js
```

**Example output:**

```
[
/path/to/your/dir/somedir/somemodule/somefile.js,
/path/to/your/dir/somedir/somemodule/someotherfile.js,
/path/to/your/dir/somedir2/anotherdir/yet_another_dir/index.js,
/path/to/your/dir/somedir2/anotherdir/index.js,
/path/to/your/dir/somedir2/index.js,
/path/to/your/dir/somedir3/another_file.js
]
```

**Optional Arguments**
| Directory | Default |
| ------------- |:--------:|
| directory | ./ |
| searchFilter | TODO |

**Run with optional arguments:**

```
npm run start [directory] [searchFilter]
```

## Tests and Lint

### Tests

The following runs the test file `/test/index.test.js`

**Run test**

```
npm run test
```

### Lint

**Run lint:**

```
npm run lint
```
