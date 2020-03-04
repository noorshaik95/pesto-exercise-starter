function flipArgs() {
  return (...args) => {
    return args.reverse();
  }
}

export {
  flipArgs
}