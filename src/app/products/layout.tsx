import * as GlobalContext from "@/GlobalContext";
import NavVersionControl from "@/components/NavVersionControl";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalContext.GlobalProvider>
      <>
        {children}
        <NavVersionControl />
      </>
    </GlobalContext.GlobalProvider>
  );
}
