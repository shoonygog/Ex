class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'strictequalityexample', // change this if you make an actual extension!
      name: 'Strict Equality',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.COMMAND,
          text: 'open[ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://www.youtube.com'
            }
          }
        }
      ]
    };
  }
  strictlyEquals(args) {
    open(args.ONE);
  }
}
Scratch.extensions.register(new StrictEqualityExtension());
