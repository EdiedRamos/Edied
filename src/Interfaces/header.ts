export interface HeaderItem {
  id: number;
  name: "about" | "skills" | "projects" | "contact";
  redirect: string;
  Icon: () => JSX.Element;
}
