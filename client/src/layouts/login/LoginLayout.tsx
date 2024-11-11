type Props = {
  title?: string;
  children: React.ReactNode;
};

export default function LoginLayout({ children }: Props) {
  return <div>{children}</div>;
}
