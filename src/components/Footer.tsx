
export function Footer() {
  return (
    <footer className="py-10 text-center border-t border-border/50">
      <div className="container">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Amit Dalal
        </p>
      </div>
    </footer>
  );
}
