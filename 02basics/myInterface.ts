interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: number;
  //startTrail: () => string
  startTrail(): string;
  getCoupon(coupounname: string, value: number): number;
}

// it is called as interface reopening :)
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "teacher" | "learner";
}

const naresh: Admin = {
  dbId: 1,
  email: "naresh@gmail.com",
  userId: 2,
  githubToken: "123456",
  role: "learner",
  startTrail: () => {
    return "started trail";
  },
  getCoupon: (name: string, off: number) => {
    return 10;
  },
};

naresh.email = "cool@gmail.com";

export {};
