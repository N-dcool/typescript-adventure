abstract class TakePhoto {
  constructor(public camaraMode: string, public filter: string) {}

  abstract getHello(): void;
  getReelTime(): number {
    // some complex calculation
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public camaraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(camaraMode, filter);
  }
  getHello(): void {
    console.log("Hello, world");
  }
}

const nc = new Instagram("test", "test", 43);

nc.getHello();
