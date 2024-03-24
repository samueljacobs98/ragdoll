abstract class RagdollError extends Error {
  constructor(name: string, message: string) {
    super(message);
    this.name = name;
  }
}

export { RagdollError };
