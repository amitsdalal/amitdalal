
export function Footer() {
  return (
    <footer className="py-8 text-center border-t border-border">
      <div className="container">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Amit Dalal
        </p>
      </div>
    </footer>
  );
}
