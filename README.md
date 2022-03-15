# Hello world javascript action

A small github action used to test thing surrounding javascript github actions.

## Compilation

To compile the action and bundle all dependencies into a single file, use the folowing command:

`ncc build index.js --license licenses.txt`

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-javascript-action@v1.1
with:
who-to-greet: 'Mona the Octocat'
