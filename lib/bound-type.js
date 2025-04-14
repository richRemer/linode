export default function bound_type(Type, ...args) {
  return class extends Type {
    constructor(...moreArgs) {
      super(...args, ...moreArgs);
    }
  }
}
