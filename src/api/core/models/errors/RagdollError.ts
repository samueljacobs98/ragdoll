abstract class RagdollError extends Error {
  status: number;

  constructor(name: string, message: string, status: number) {
    super(message);
    this.name = name;
    this.status = status;
  }
}

export { RagdollError };
