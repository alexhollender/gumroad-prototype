import * as GlobalContext from "@/GlobalContext";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalContext.GlobalProvider>
      <>{children}</>
    </GlobalContext.GlobalProvider>
  );
}
