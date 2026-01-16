const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <img
          src="/mad-designer.png"
          alt="Maintenance"
          className="w-full mb-8"
        />

        <h1 className="text-4xl font-bold mb-3">We’re under maintenance</h1>

        <p className="text-muted text-lg">
          We’re making some improvements. Please check back soon.
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
