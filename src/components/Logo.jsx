const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Icon */}
      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/30">
        <span className="font-bold text-accent text-lg">HL</span>
      </div>

      {/* Text (hidden on very small screens) */}
      <div className="leading-tight hidden sm:block">
        <p className="font-semibold">Hamza Lamkhailif</p>
        <p className="text-xs text-muted">Data Analyst</p>
      </div>
    </div>
  );
};

export default Logo;
