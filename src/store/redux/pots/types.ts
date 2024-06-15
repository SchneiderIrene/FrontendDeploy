export interface Instruction{
  id?: string,
  content?: string,
  day?: string,
  image?: string,
  imporant?: boolean
}

export interface Pot {
  id: string;
  active: boolean;
  instruction?: Instruction
}


export interface PotsSliceState {
  pots: Pot[];
  status: "default" | "loading" | "success" | "error";
  error: string | null | undefined;
}